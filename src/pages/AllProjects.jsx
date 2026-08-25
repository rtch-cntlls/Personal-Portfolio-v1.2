import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function AllProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setIsDarkMode(currentTheme === 'dark');
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mt-5 min-vh-100 ${isDarkMode ? 'bg-black text-light' : 'bg-light text-dark'}`}>
      <div className="container py-5">
        
        <div className="d-flex justify-content-between align-items-center mb-5 border-bottom border-secondary border-opacity-25 pb-4">
          <div>
            <small className="text-uppercase tracking-wider opacity-75 font-monospace">Portfolio Archive</small>
            <h2 className="fw-bold mb-0">All Projects</h2>
          </div>
          <Link 
            to="/" 
            className={`btn btn-sm rounded-0 ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
          >
            &larr; Back to Home
          </Link>
        </div>

        <div className="d-flex flex-column gap-5">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 border ${isDarkMode ? 'bg-dark border-secondary text-light' : 'bg-white border-dark-subtle text-dark shadow-sm'} rounded-0 position-relative`}
            >
              <div className="row g-4 align-items-center">
                
                <div className="col-lg-5">
                  <div className="bg-secondary rounded-0 overflow-hidden position-relative" style={{ height: '260px' }}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <div className="col-lg-7 d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-monospace small opacity-75">Project #0{index + 1}</span>
                    </div>

                    <h3 className="fw-bold mb-3">{project.title}</h3>
                    
                    <p className={`fw-semibold mb-2 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                      {project.description}
                    </p>

                    <p className={`small mb-3 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                      {project.longDescription || 
                        "This is a comprehensive full-stack system designed to optimize operational workflows, track user activities, and deliver seamless responsive experiences."}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIdx) => (
                          <span 
                            key={techIdx} 
                            className={`badge rounded-0 font-monospace border ${
                              isDarkMode 
                                ? 'bg-black text-light border-secondary' 
                                : 'bg-light text-dark border-dark-subtle'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-top border-secondary border-opacity-25">
                    {project.liveLink ? (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`btn btn-sm rounded-0 px-4 ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}
                      >
                        Visit Site &rarr;
                      </a>
                    ) : (
                      <button 
                        disabled 
                        className={`btn btn-sm rounded-0 px-4 opacity-50 ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}