import React from 'react';
import { motion } from 'framer-motion';

const ValuePropsSection = () => {
  const values = [
    { number: '10x', label: 'Faster Content Creation' },
    { number: 'Zero', label: 'Coding Required' },
    { number: '24/7', label: 'AI Assistant Support' },
    { number: '100%', label: 'Ownership Rights' }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-3">
                {value.number}
              </div>
              <div className="text-muted-foreground text-sm lg:text-base">
                {value.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;