import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Card';
import { Github, ExternalLink } from 'lucide-react';

// Import images
import bankImg from "../../assets/images/bank.png";
import movieImg from "../../assets/images/movie.png";
import empImg from "../../assets/images/employee.png";
import itineraryImg from "../../assets/images/itineraryImg.png";
import farmmart from "../../assets/images/farmmart.png";
import photoImg from "../../assets/images/photography.png";
import foodImg from "../../assets/images/food.png";
import todoImg from "../../assets/images/todolist.png";
import travelImg from "../../assets/images/TravelBlog.png";
import budgettracker from "../../assets/images/budgettracker.png";
import ageImg from "../../assets/images/agecalculator.png";
import furnitureImg from "../../assets/images/furniture.png";

const filterOptions = ['All', 'React.js', 'Next.js', 'JS', 'Node.js', 'Python', 'MongoDB', 'HTML/CSS'];

const allProjects = [
  {
    title: "AI Itinerary Planner",
    description: "An AI-powered travel itinerary planner with personalized recommendations.",
    image: itineraryImg,
    tech: ['Next.js', 'Python', 'FastAPI'],
    category: ['Next.js', 'Python'],
    github: 'https://github.com/Ajeshjose11/ai-travel-planner',
    live: 'https://ai-travel-planner-mocha.vercel.app/'
  },
  {
    title: 'Farm Mart',
    description: 'Real-time farm product bidding platform with secure MERN stack implementation.',
    image: farmmart,
    tech: ['React', 'Node.js', 'MongoDB'],
    category: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Ajeshjose11/FarmMart-frontend',
    live: 'https://farm-mart-frontend.vercel.app/'
  },
  {
    title: 'Photography Portfolio',
    description: 'Minimalist photography showcase with smooth transitions and gallery.',
    image: photoImg,
    tech: ['React', 'Node.js', 'CSS'],
    category: ['React.js', 'HTML/CSS'],
    github: 'https://github.com/Ajeshjose11/portfolio-react',
    live: 'https://photography-portfolio-frontend-cyan.vercel.app/'
  },
  {
    title: 'Budget Tracker UI',
    description: 'Modern budget tracking interface with real-time analytics and built-in productivity tools.',
    image: budgettracker,
    tech: ['CSS', 'JavaScript', 'React'],
    category: ['JS', 'React.js'],
    github: 'https://github.com/Ajeshjose11/finance-dashboard-ui',
    live: 'https://finance-dashboard-ui-five-amber.vercel.app/'
  },
  {
    title: 'Food Website',
    description: 'A responsive food ordering website using React and Tailwind CSS.',
    image: foodImg,
    tech: ['HTML', 'CSS', 'React'],
    category: ['HTML/CSS', 'React.js'],
    github: 'https://github.com/Ajeshjose11/onlinefoodwebsite',
    live: 'https://onlinefoodwebsite.vercel.app/'
  },
  {
    title: 'Movie Search',
    description: 'Integrates TMDB API to search and display trending and searched movies.',
    image: movieImg,
    tech: ['JavaScript', 'Tailwind', 'API'],
    category: ['React.js', 'JS'],
    github: 'https://github.com/Ajeshjose11/MovieDetails',
    live: 'https://movie-details-nu.vercel.app/'
  },
  
  {
    title: 'Online Bank',
    description: 'Modern banking interface with transaction simulation and security features.',
    image: bankImg,
    tech: ['JavaScript', 'Tailwind', 'React'],
    category: ['JS', 'React.js'],
    github: 'https://github.com/Ajeshjose11/onlinebanking',
    live: 'https://onlinebankingwebsite.vercel.app/'
  },
  {
    title: 'To-Do List',
    description: 'Task management app with categories and persistent storage.',
    image: todoImg,
    tech: ['JavaScript', 'Tailwind', 'React'],
    category: ['JS', 'React.js'],
    github: 'https://github.com/Ajeshjose11/Task-Manager',
    live: 'https://task-manager-zeta-brown.vercel.app/'
  },
  {
    title: 'Travel Blog',
    description: 'Personal travel blogging platform with image galleries.',
    image: travelImg,
    tech: ['HTML', 'Bootstrap', 'CSS'],
    category: ['HTML/CSS'],
    github: 'https://github.com/Ajeshjose11/travelblog',
    live: 'https://travelblog-virid.vercel.app/'
  },
  {
    title: 'Employee Details',
    description: 'Management system with persistent storage for employee records.',
    image: empImg,
    tech: ['JavaScript', 'Tailwind', 'CSS'],
    category: ['React.js', 'HTML/CSS'],
    github: 'https://github.com/Ajeshjose11/employeedetailsstorage',
    live: 'https://employeedetailsstorage.vercel.app/'
  },
  {
    title: 'Age Calculator',
    description: 'Simple tool to calculate precise age and upcoming birthdays.',
    image: ageImg,
    tech: ['CSS', 'JavaScript', 'React'],
    category: ['JS', 'React.js'],
    github: 'https://github.com/Ajeshjose11/agecalculator',
    live: 'https://agecalculator-oqyj.vercel.app/'
  },
  {
    title: 'Furniture Website',
    description: 'E-commerce interface for modern furniture collections.',
    image: furnitureImg,
    tech: ['HTML', 'Bootstrap', 'CSS'],
    category: ['HTML/CSS'],
    github: 'https://github.com/Ajeshjose11/online-furniture',
    live: 'https://online-furniture-delta.vercel.app/'
  }
];

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = allProjects.filter(project => 
    filter === 'All' || project.category.includes(filter)
  );

  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '48px', textAlign: 'center' }}
        >
          My <span className="text-gradient">Creations</span>
        </motion.h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '64px', flexWrap: 'wrap' }}>
          {filterOptions.map(option => (
            <motion.button
              key={option}
              onClick={() => setFilter(option)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 28px',
                borderRadius: '30px',
                border: filter === option ? '1px solid var(--primary-1)' : '1px solid var(--card-border)',
                background: filter === option ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.05)',
                color: filter === option ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: filter === option ? '0 10px 30px rgba(21, 72, 237, 0.3)' : 'none'
              }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid-12"
          style={{ gap: '24px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout="position"
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{ gridColumn: 'span 12', lg: 'span 4' }}
                className="project-card-wrapper"
              >
                <div style={{ position: 'relative', height: '100%', borderRadius: '24px', willChange: 'transform' }} className="project-card-container">
                  <Card style={{ padding: 0, overflow: 'hidden', height: '100%', background: 'transparent', border: 'none' }}>
                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
                      <motion.img 
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                        src={project.image} 
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))'
                      }} />
                    </div>

                    <div style={{ padding: '24px', background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.015)', borderRadius: '0 0 24px 24px' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>{project.title}</h3>
                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.9rem', 
                        marginBottom: '20px', 
                        lineHeight: '1.5',
                        minHeight: '54px'
                      }}>
                        {project.description}
                      </p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                        {project.tech.map(t => (
                          <span key={t} style={{
                            fontSize: '0.6rem',
                            fontWeight: '800',
                            padding: '4px 10px',
                            borderRadius: '30px',
                            background: 'rgba(21, 72, 237, 0.08)',
                            color: 'var(--primary-2)',
                            border: '1px solid rgba(21, 72, 237, 0.12)',
                            textTransform: 'uppercase'
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          className="premium-btn"
                          style={{ flex: 1, color: darkMode ? '#fff' : '#000' }}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={14} style={{ marginRight: '6px' }} />
                          Code
                        </button>
                        <button 
                          className="premium-btn active"
                          style={{ flex: 1.4, color: darkMode ? '#fff' : '#000' }}
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink size={14} style={{ marginRight: '6px' }} />
                          Live
                        </button>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Gradient Border on Hover */}
                  <div className="card-border-gradient"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <style>{`
        .project-card-container {
          background: var(--card-bg);
          transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .project-card-container:hover {
          transform: translateY(-5px);
        }

        .card-border-gradient {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1.5px;
          background: var(--gradient-primary);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .project-card-container:hover .card-border-gradient {
          opacity: 0.8;
        }

        .premium-btn {
          position: relative;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid rgba(21, 72, 237, 0.4);
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          background: transparent;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .premium-btn:hover {
          background: var(--primary-1);
          color: white !important;
          box-shadow: 0 0 20px rgba(21, 72, 237, 0.5);
          border-color: transparent;
        }

        .premium-btn::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          transform: skewX(-20deg);
        }

        .premium-btn:hover::before {
          animation: sh02 0.5s 0s linear;
        }

        @keyframes sh02 {
          from { opacity: 0; left: 0%; }
          50% { opacity: 1; }
          to { opacity: 0; left: 100%; }
        }

        @media (min-width: 1024px) {
          .project-card-wrapper { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
