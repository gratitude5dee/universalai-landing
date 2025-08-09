import React from 'react';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-xs text-text-tertiary mb-4 font-mono">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs text-text-tertiary mb-4 font-mono">PRODUCT</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-xs text-text-tertiary mb-4 font-mono">DEVELOPERS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">SDK</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Docs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs text-text-tertiary mb-4 font-mono">RESOURCES</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs text-text-tertiary mb-4 font-mono">LEGAL</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-secondary flex items-center justify-between">
          <p className="text-xs text-text-tertiary">
            © 2025 MusicOS. A <a href="https://universalaiapp.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">UniversalAI</a> Project.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-tertiary hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="text-text-tertiary hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};