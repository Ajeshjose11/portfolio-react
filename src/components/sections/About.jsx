import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';
import profile from '../../assets/images/profile.jpg';
import { GraduationCap, Target } from 'lucide-react';

const About = ({ darkMode, imageTarget }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const infoItems = [
    {
      icon: <GraduationCap size={20} />,
      title: 'Education',
      content: (
        <>
          <strong>B.Tech in CSE</strong><br/>
          <small>APJ Abdul Kalam Technological University</small>
        </>
      ),
    },
    {
      icon: <Target size={20} />,
      title: 'Passionate',
      content: 'Building scalable, AI-integrated web applications with modern full-stack technologies.',
    },
  ];

  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '60px', alignItems: 'center' }}
        >
          <div style={{ gridColumn: 'span 12', lg: 'span 7' }} className="about-text-col">
            <motion.h2 
              variants={itemVariants}
              style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '32px' }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Computer Science graduate and Full Stack Developer specializing in MERN and Next.js. 
                Experienced in building scalable web applications with Node.js and Express.
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Skilled in integrating AI features working with MongoDB and SQL, designing REST APIs, 
                and deploying using Docker and cloud platforms.
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontWeight: '500' }}>
                Passionate about building efficient, AI-powered web solutions.
              </p>
            </motion.div>

            <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
              {infoItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} style={{ flex: 1 }}>
                  <Card style={{ padding: '20px', height: '100%' }}>
                    <div style={{ color: 'var(--primary-1)', marginBottom: '12px' }}>{item.icon}</div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.content}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 'span 12', lg: 'span 5' }} className="about-photo-col">
            <div style={{ 
              width: '100%', 
              maxWidth: '400px',
              height: '500px',
              position: 'relative',
              margin: '0 auto'
            }} className="about-profile-card-container">
            {imageTarget === 'about' && (
              <motion.div
                layoutId="profile-card"
                className="about-profile-card"
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
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                }}
              >
                  <img 
                    src={profile} 
                    alt="Ajesh Jose" 
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-text-col { grid-column: span 7 !important; }
          .about-photo-col { grid-column: span 5 !important; }
        }
        @media (max-width: 1023px) {
          .about-text-col, .about-photo-col { grid-column: span 12 !important; }
          .about-photo-col { order: -1; margin-bottom: 40px; }
          .about-text-col { text-align: center; }
          .about-text-col div[style*="display: flex"] { justify-content: center; }
          .about-profile-card-container { max-width: 280px !important; height: 350px !important; }
          .about-profile-card { width: 100%; height: 100%; }
        }
      `}</style>
    </section>
  );
};

export default About;
