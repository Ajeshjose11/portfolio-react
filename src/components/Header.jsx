import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Home as HomeIcon, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: <HomeIcon size={18} /> },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

function Header({ toggleTheme, darkMode }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'tech-stack', 'projects', 'experience', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navbarStyles = {
    position: 'fixed',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    background: darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(16px)',
    padding: '6px 10px',
    borderRadius: '40px',
    border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
    gap: '4px',
  };

  const linkStyles = (isActive) => ({
    textDecoration: 'none',
    color: isActive ? (darkMode ? '#fff' : '#000') : (darkMode ? '#94a3b8' : '#64748b'),
    fontSize: '0.85rem',
    fontWeight: isActive ? '700' : '500',
    padding: '10px 18px',
    borderRadius: '30px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isActive ? (darkMode ? 'rgba(21, 72, 237, 0.15)' : 'rgba(21, 72, 237, 0.1)') : 'transparent',
    border: isActive ? (darkMode ? '1px solid rgba(21, 72, 237, 0.3)' : '1px solid rgba(21, 72, 237, 0.2)') : '1px solid transparent',
  });

  const contactBtnStyles = {
    background: 'var(--gradient-primary)',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '0.85rem',
    cursor: 'pointer',
    marginLeft: '8px',
    boxShadow: '0 4px 15px rgba(21, 72, 237, 0.3)',
  };

  return (
    <>
      <header style={navbarStyles}>
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ scale: 1.05, background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}
            whileTap={{ scale: 0.95 }}
            style={linkStyles(activeSection === link.href.substring(1))}
          >
            {link.icon ? link.icon : link.name}
          </motion.a>
        ))}
        
        <motion.button
          onClick={() => document.getElementById('contact').scrollIntoView()}
          whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.95 }}
          style={contactBtnStyles}
          className="contact-btn"
        >
          <span className="contact-text">Contact</span>
          <MessageSquare className="contact-icon" size={18} style={{ display: 'none' }} />
        </motion.button>

        <div style={{ width: '1px', height: '20px', background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', margin: '0 8px' }} />

        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: darkMode ? '#f8fafc' : '#0f172a',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
      </header>

      {/* Global CSS for the navbar */}
      <style>{`
        @media (max-width: 768px) {
          header {
            width: 95%;
            padding: 4px 8px;
            gap: 2px;
            bottom: 20px;
          }
          header a {
            padding: 8px 10px !important;
            font-size: 0.72rem !important;
          }
          header .contact-btn {
            padding: 8px !important;
            min-width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50% !important;
            margin-left: 2px !important;
            box-shadow: none !important;
          }
          header .contact-text {
            display: none !important;
          }
          header .contact-icon {
            display: block !important;
          }
          /* Hide divider on mobile to save space */
          header div[style*="width: 1px"] {
            display: none !important;
          }
          header button:last-child {
             padding: 8px !important;
             margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
