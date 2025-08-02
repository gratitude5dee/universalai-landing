import { useRef } from 'react';

interface SecurityEvent {
  type: 'suspicious_input' | 'rate_limit_exceeded' | 'validation_failure' | 'auth_attempt';
  details: string;
  timestamp: Date;
  userAgent?: string;
  ipAddress?: string;
}

export const useSecurityMonitoring = () => {
  const eventLog = useRef<SecurityEvent[]>([]);
  const rateLimitMap = useRef<Map<string, { count: number; lastAttempt: Date }>>(new Map());

  const logSecurityEvent = (event: Omit<SecurityEvent, 'timestamp'>) => {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date(),
      userAgent: navigator.userAgent.substring(0, 100), // Limit length
    };

    eventLog.current.push(securityEvent);
    
    // Keep only last 100 events to prevent memory issues
    if (eventLog.current.length > 100) {
      eventLog.current = eventLog.current.slice(-100);
    }

    // Log critical events to console for monitoring
    if (event.type === 'suspicious_input' || event.type === 'rate_limit_exceeded') {
      console.warn('[Security] ' + event.type, event.details);
    }
  };

  const checkRateLimit = (key: string, maxAttempts: number = 5, windowMs: number = 300000): boolean => {
    const now = new Date();
    const existing = rateLimitMap.current.get(key);

    if (!existing) {
      rateLimitMap.current.set(key, { count: 1, lastAttempt: now });
      return true;
    }

    const timeSinceLastAttempt = now.getTime() - existing.lastAttempt.getTime();
    
    if (timeSinceLastAttempt > windowMs) {
      // Reset window
      rateLimitMap.current.set(key, { count: 1, lastAttempt: now });
      return true;
    }

    if (existing.count >= maxAttempts) {
      logSecurityEvent({
        type: 'rate_limit_exceeded',
        details: `Rate limit exceeded for key: ${key}. Attempts: ${existing.count}`,
      });
      return false;
    }

    // Increment counter
    rateLimitMap.current.set(key, { 
      count: existing.count + 1, 
      lastAttempt: now 
    });
    return true;
  };

  const detectSuspiciousInput = (input: string, fieldName: string): boolean => {
    // Check for potential XSS attempts
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /eval\s*\(/gi,
    ];

    // Check for SQL injection patterns
    const sqlPatterns = [
      /(\b(union|select|insert|update|delete|drop|create|alter)\b.*\b(from|into|set|where|table)\b)/gi,
      /('|(\')|(;)|(--)|(\\||\\\\|))/g,
    ];

    const allPatterns = [...xssPatterns, ...sqlPatterns];
    
    for (const pattern of allPatterns) {
      if (pattern.test(input)) {
        logSecurityEvent({
          type: 'suspicious_input',
          details: `Suspicious input detected in ${fieldName}: pattern matched`,
        });
        return true;
      }
    }

    return false;
  };

  const getSecurityEvents = () => eventLog.current;

  const clearOldEvents = () => {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    eventLog.current = eventLog.current.filter(event => event.timestamp > oneDayAgo);
  };

  return {
    logSecurityEvent,
    checkRateLimit,
    detectSuspiciousInput,
    getSecurityEvents,
    clearOldEvents,
  };
};
