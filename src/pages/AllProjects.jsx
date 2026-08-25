import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConstructionImg from '../assets/images/construction.svg';

export default function AllProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <div className={`mt-5 min-vh-100 d-flex align-items-center justify-content-center ${isDarkMode ? 'bg-black text-light' : 'bg-light text-dark'}`}>
      <div className="container py-5 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-4 p-md-5 border ${isDarkMode ? 'bg-dark border-secondary text-light' : 'bg-white border-dark-subtle text-dark shadow-sm'} rounded-0 mx-auto`}
          style={{ maxWidth: '600px' }}
        >
          <div className="mb-4 overflow-hidden" style={{ maxHeight: '220px' }}>
            <img 
              src={ConstructionImg} 
              alt="Under Construction" 
              className="img-fluid object-fit-contain" 
              style={{ maxHeight: '180px' }}
            />
          </div>

          <div className="mb-3">
            <span className={`badge rounded-0 font-monospace px-3 py-2 border ${isDarkMode ? 'bg-black text-warning border-warning' : 'bg-light text-dark border-dark'}`}>
              STATUS: IN PROGRESS
            </span>
          </div>

          <h2 className="fw-bold mb-3">Under Construction</h2>
          
          <p className={`small mb-4 ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
            I currently building this dedicated archive page to showcase all projects with detailed write-ups and tech stacks. Check back soon for updates!
          </p>

          <div>
            <Link 
              to="/" 
              className={`btn btn-sm rounded-0 px-4 py-2 ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}
            >
              &larr; Back to Home
            </Link>
          </div>

        </motion.div>

      </div>
    </div>
  );
}