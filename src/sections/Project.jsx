import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectImg1 from '../assets/project/e-commerce/1.png'; 
import ProjectImg2 from '../assets/project/nces/1.PNG';
import ProjectImg3 from '../assets/project/erent/1.PNG';

export default function Project() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const projects = [
    {
      id: 'proj-1',
      title: 'E-Commerce Platform',
      image: ProjectImg1,
      description: 'Motorcycle Parts E-commerce & Services Management System',
    },
    {
      id: 'proj-2',
      title: 'Web App',
      image: ProjectImg2,
      description: 'Student Record Management System',
    },
    {
      id: 'proj-3',
      title: 'Rental Platform',
      image: ProjectImg3,
      description: 'Property Rental Platform Management System',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section id="project">
      <div className="container px-3 px-md-5 py-4">
        <motion.div 
          className="d-flex justify-content-between align-items-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
            <div>
              <small className="text-uppercase tracking-wider opacity-75 font-monospace">Sample Projects</small>
              <h4 className="mb-2 title">Selected Project</h4>
            </div>
          <a 
            href="#all-projects" 
            className={`text-decoration-underline small fw-semibold ${isDarkMode ? 'text-light opacity-75' : 'text-dark'}`}>
            View All Projects &rarr;
          </a>
        </motion.div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} >
          {projects.map((project) => (
            <motion.div className="col-md-4" key={project.id} variants={cardVariants}>
              
              <div className="position-relative p-2 h-100">
                
                <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-tl`}></div>
                <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-tr`}></div>
                <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-bl`}></div>
                <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-br`}></div>

                <div className={`img-panel h-100 ${isDarkMode ? 'bg-black text-light' : 'bg-white text-dark'} shadow-sm rounded-0 position-relative d-flex flex-column`}>
                  
                  <div className="bg-dark rounded-0 overflow-hidden position-relative z-2 mb-3" style={{ height: '220px' }}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-fill"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>

                  <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between text-start z-2">
                    <div>
                      <h5 className={`fw-bold mb-2 about-title ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                        {project.title}
                      </h5>
                      <p className={`small mb-0 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}