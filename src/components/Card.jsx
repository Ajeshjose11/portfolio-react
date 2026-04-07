import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, style = {}, ...props }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: -5,
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        borderColor: 'var(--primary-1)',
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--card-border)',
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        ...style
      }}
      {...props}
    >
      {/* Subtle glow effect on hover */}
      <motion.div
        className="card-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-primary)',
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: '24px',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
