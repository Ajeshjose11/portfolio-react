import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';

const skills = [
  // Frontend
  { name: 'HTML', slug: 'html5', color: '#E34F26' },
  { name: 'CSS', slug: 'css3', color: '#1572B6' },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#000000' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'Express.js', slug: 'express', color: '#828282' },
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'FastAPI', slug: 'fastapi', color: '#009688' },
  
  // Database
  { name: 'SQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  
  // Devops/Tools
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'Git', slug: 'git', color: '#F05032' },
];

const TechStack = ({ darkMode }) => {
  return (
    <section id="tech-stack" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center' }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '24px' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                rotateX: 15, 
                rotateY: 15,
                translateY: -5,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: '1000px' }}
            >
              <Card 
                style={{ 
                  textAlign: 'center', 
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  height: '100%',
                  borderColor: darkMode ? 'var(--card-border)' : skill.color + '44',
                  background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  transformStyle: 'preserve-3d',
                  position: 'relative'
                }}
              >
                <div 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '16px', 
                    background: `${skill.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 32px ${skill.color}33`,
                    transform: 'translateZ(20px)',
                    padding: '12px'
                  }}
                >
                  <img 
                    src={skill.slug === 'css3' 
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      : `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`} 
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      filter: darkMode && skill.name === 'Next.js' ? 'invert(1)' : 'none' 
                    }}
                  />
                </div>
                <span style={{ 
                  fontWeight: '600', 
                  fontSize: '1rem', 
                  color: 'var(--text-primary)',
                  transform: 'translateZ(10px)'
                }}>
                  {skill.name}
                </span>
                
                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: `radial-gradient(circle at center, ${skill.color}55, transparent 70%)`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                    borderRadius: '16px'
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
