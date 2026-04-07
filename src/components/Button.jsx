import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', dark, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#1548ed] via-[#15bbed] to-[#15ed97] text-white shadow-lg shadow-[#1548ed]/20 hover:shadow-[#1548ed]/40',
    secondary: 'border-2 border-[#1548ed] text-[#1548ed] hover:bg-[#1548ed]/5',
    outline: 'border-2 border-white/20 text-white hover:border-[#1548ed] hover:text-[#1548ed] backdrop-blur-md',
  };

  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontSize: '1rem',
    textDecoration: 'none',
  };

  const primaryStyles = {
    background: 'var(--gradient-primary)',
    color: 'white',
    boxShadow: '0 4px 15px var(--accent-glow)',
  };

  const secondaryStyles = {
    background: 'transparent',
    border: '2px solid var(--primary-1)',
    color: 'var(--primary-1)',
  };

  const outlineStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--card-border)',
    color: 'var(--text-primary)',
    backdropFilter: 'blur(10px)',
  };

  const darkStyles = {
    background: '#111827',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const selectedStyles = props.dark ? darkStyles : (variant === 'primary' ? primaryStyles : variant === 'secondary' ? secondaryStyles : outlineStyles);

  return (
    <motion.button
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.97 }}
      style={{ ...buttonStyles, ...selectedStyles }}
      className={`custom-button ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
