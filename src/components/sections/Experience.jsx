import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Luminar Technolab',
    period: '08-2025 - 01-2026',
    icon: <Briefcase size={20} />
  },
  {
    title: "Bachelor's of Technology",
    company: 'Computer Science and Design',
    period: '2021 - 2025',
    institute: 'APJ Abdul Kalam Technological University',
    icon: <GraduationCap size={20} />
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '64px', textAlign: 'center' }}
        >
          My <span className="text-gradient">Journey</span>
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'var(--gradient-primary)',
            borderRadius: '2px',
            opacity: 0.3
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ position: 'relative', paddingLeft: '60px' }}
              >
                {/* Dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '0',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    zIndex: 2,
                    boxShadow: '0 0 15px var(--accent-glow)'
                  }}
                />

                <Card>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '700', 
                    color: 'var(--primary-1)',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    {exp.period}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '4px' }}>{exp.title}</h3>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: exp.institute ? '4px' : '0' }}>
                    {exp.company}
                  </h4>
                  {exp.institute && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>
                      {exp.institute}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
