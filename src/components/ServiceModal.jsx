import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceModal({ service, onClose }) {
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

  return (
    <AnimatePresence>
      {service && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}
          onClick={onClose}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`modal-content rounded-4 border ${isDarkMode ? 'bg-black text-light border-secondary border-opacity-50' : 'bg-white text-dark border-light'} shadow-lg p-3`}
            >
              <div className="modal-header border-bottom-0 pb-0 justify-content-end">
                <button 
                  type="button" 
                  className={`btn-close shadow-none ${isDarkMode ? 'btn-close-white' : ''}`} 
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body px-4 py-3">
                <h3 className={`fw-bold mb-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>{service.title}</h3>
                
                <p className={`mb-4 small service-description ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                  {service.description}
                </p>
                
                <hr className={`opacity-25 mb-4 ${isDarkMode ? 'text-light' : 'text-muted'}`} />
                
                <h6 className={`fw-bold mb-2 ${isDarkMode ? 'text-light' : 'text-dark'}`}>Detailed Specifications:</h6>
                <p className={`small mb-0 lh-lg service-description ${isDarkMode ? 'text-light opacity-75' : 'text-secondary'}`}>
                  {service.details}
                </p>
              </div>
              <div className="modal-footer border-top-0 pt-0">
                <button 
                  type="button" 
                  className={`btn rounded-pill px-4 btn-sm w-100 py-2 fw-bold ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-white'}`}
                  onClick={onClose}
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}