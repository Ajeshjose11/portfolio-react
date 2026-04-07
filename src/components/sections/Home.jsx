import { motion } from 'framer-motion';
import Button from '../Button';
import profile from '../../assets/images/profile.jpg';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = ({ darkMode, imageTarget }) => {
  return (
    <div id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 20px',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '40px',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 8rem)', 
                fontWeight: '950', 
                margin: 0, 
                lineHeight: 0.8,
                letterSpacing: '-4px',
                color: darkMode ? '#fff' : '#111',
                textTransform: 'uppercase'
              }}
            >
              AJESH
            </motion.h1>
          </div>

          <div style={{ 
            width: '320px', 
            height: '390px', 
            position: 'relative',
            flexShrink: 0
          }}>
            {imageTarget === 'home' && (
              <motion.div
                layoutId="profile-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '24px', 
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                  zIndex: 2,
                }}
              >
                <img 
                  src={profile} 
                  alt="Ajesh Jose" 
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
            )}
          </div>

          <div style={{ flex: 1, minWidth: '300px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 8rem)', 
                fontWeight: '950', 
                margin: 0, 
                lineHeight: 0.8,
                letterSpacing: '-4px',
                color: darkMode ? '#fff' : '#111',
                textTransform: 'uppercase'
              }}
            >
              JOSE
            </motion.h1>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ 
              fontSize: '1.2rem', 
              fontWeight: '500', 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}
          >
            Software developer | Full stack developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView()}>
              View Projects
            </Button>
            <Button variant="outline" dark onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '24px' }}
          >
            {[
              { icon: <Github size={20} />, url: 'https://github.com/Ajeshjose11' },
              { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/ajesh-jose/' },
              { icon: <Mail size={20} />, url: 'mailto:ajeshjose11@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: 'var(--primary-1)' }}
                style={{ color: '#888', transition: 'color 0.3s ease' }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home { padding-top: 100px; padding-bottom: 150px; }
          .container > div:first-child { flex-direction: column !important; gap: 20px !important; }
          .container h1 { font-size: 5rem !important; text-align: center !important; }
          div[style*="text-align: right"], div[style*="text-align: left"] { 
            text-align: center !important; 
            align-items: center !important; 
            min-width: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
