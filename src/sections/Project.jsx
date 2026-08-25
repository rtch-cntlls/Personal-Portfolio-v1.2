import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Project() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

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

  const displayedProjects = projects.slice(0, 3);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
          <Link 
            to="/projects" 
            className={`text-decoration-underline small fw-semibold ${isDarkMode ? 'text-light opacity-75' : 'text-dark'}`}>
            View All Projects &rarr;
          </Link>
        </motion.div>

        <motion.div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="d-flex flex-row overflow-x-auto pb-2 pt-2 flex-nowrap flex-md-wrap row mx-0 g-4"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} >
          {displayedProjects.map((project, index) => (
            <motion.div 
              className="col-12 col-md-4 flex-shrink-0 flex-grow-0 px-2 px-md-2" 
              key={project.id} 
              variants={cardVariants}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="position-relative p-3 h-100">
                <div className={`position-absolute top-0 start-0 border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-tl`} style={{ width: '10px', height: '10px' }}></div>
                <div className={`position-absolute top-0 end-0 border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-tr`} style={{ width: '10px', height: '10px' }}></div>
                <div className={`position-absolute bottom-0 start-0 border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-bl`} style={{ width: '10px', height: '10px' }}></div>
                <div className={`position-absolute bottom-0 end-0 border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark-subtle'} z-3 camera-focus-br`} style={{ width: '10px', height: '10px' }}></div>

                <div className={`img-panel h-100 ${isDarkMode ? 'bg-black text-light' : 'bg-white text-dark'} shadow-sm rounded-0 position-relative d-flex flex-column border ${isDarkMode ? 'border-secondary' : 'border-dark-subtle'}`}>
                  <div className="bg-dark rounded-0 overflow-hidden position-relative z-2 mb-3 project-img">
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
                      <p className={`small mb-3 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25">
                      <Link to="/projects" className={`btn btn-sm rounded-0 flex-grow-1 ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                        View Details
                      </Link>
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`btn btn-sm rounded-0 flex-grow-1 ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}>
                          Visit Site &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="d-flex d-md-none justify-content-center align-items-center gap-2 mt-3">
          {displayedProjects.map((_, index) => (
            <span
              key={index}
              className={`rounded-pill transition-all ${activeIndex === index ? (isDarkMode ? 'bg-light' : 'bg-dark') : 'bg-secondary opacity-50'}`}
              style={{
                width: activeIndex === index ? '24px' : '8px',
                height: '8px',
                transition: 'width 0.3s ease, background-color 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}