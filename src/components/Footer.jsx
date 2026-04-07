import React from "react";
import { motion } from "framer-motion";

function Footer({ darkMode }) {
  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--card-border)',
      background: 'rgba(var(--bg-color-rgb), 0.5)',
      backdropFilter: 'blur(10px)',
      marginTop: '80px',
      textAlign: 'center'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>
            <span className="text-gradient">AJESH JOSE</span> 
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
export default Footer;
