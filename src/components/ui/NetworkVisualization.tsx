import React from 'react';
import { motion } from 'framer-motion';

const NetworkVisualization: React.FC = () => {
  const nodes = [
    { id: 1, x: 20, y: 20, icon: '📊', delay: 0 },
    { id: 2, x: 80, y: 20, icon: '💼', delay: 0.2 },
    { id: 3, x: 20, y: 80, icon: '📈', delay: 0.4 },
    { id: 4, x: 80, y: 80, icon: '💎', delay: 0.6 },
    { id: 5, x: 50, y: 50, icon: '🎯', delay: 0.8, central: true }
  ];

  const connections = [
    { from: { x: 50, y: 50 }, to: { x: 20, y: 20 } },
    { from: { x: 50, y: 50 }, to: { x: 80, y: 20 } },
    { from: { x: 50, y: 50 }, to: { x: 20, y: 80 } },
    { from: { x: 50, y: 50 }, to: { x: 80, y: 80 } }
  ];

  return (
    <div className="relative w-full h-48 mt-6 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, index) => (
          <motion.line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
          />
        ))}
      </svg>
      
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`
            absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center text-lg
            ${node.central 
              ? 'bg-gradient-to-br from-primary to-primary-glow shadow-glow' 
              : 'glass border-primary/30'
            }
          `}
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: node.delay,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: node.central 
              ? "0 0 30px hsl(var(--primary) / 0.6)" 
              : "0 0 20px hsl(var(--primary) / 0.4)"
          }}
        >
          {node.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default NetworkVisualization;