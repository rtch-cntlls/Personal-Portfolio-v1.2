import { useState, useEffect } from 'react';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineCog, 
  HiOutlineBriefcase 
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/logo.png';

const navContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 300, damping: 24 } 
  },
  exit: { opacity: 0, y: -10 },
};

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const navLinks = [
    { href: '#hero', icon: <HiOutlineHome size={15} />, label: 'Home' },
    { href: '#about', icon: <HiOutlineUser size={15} />, label: 'About' },
    { href: '#project', icon: <HiOutlineBriefcase size={15} />, label: 'Projects' },
    { href: '#services', icon: <HiOutlineCog size={15} />, label: 'Services' },
    { href: '#skills', icon: <HiOutlineCode size={15} />, label: 'Skills' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-black text-light border-bottom border-secondary border-opacity-50' : 'navbar-light bg-white shadow-sm'} fixed-top`}>
      <div className="container px-5">
        <a className="navbar-brand" href="#hero">
          <div className={`${darkMode ? 'bg-dark' : 'bg-white'} d-flex align-items-center justify-content-center logo`}>
            <img 
              src={Logo} 
              alt="Rtch Cntlls Logo" 
              className={`w-100 h-100 logo-img ${darkMode ? 'dark-mode-logo' : ''}`} 
            />
          </div>
        </a>
 
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <div className="form-check form-switch m-0 ps-0">
            <input
              className={`form-check-input ms-0 shadow-none theme-switch-input ${darkMode ? 'dark-switch' : 'light-switch'}`}
              type="checkbox"
              role="switch"
              id="darkModeSwitchMobile"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              title="Toggle Dark/Light Mode"
            />
          </div>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbarNav"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
 
        <div className={`collapse navbar-collapse justify-content-between ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <motion.ul 
            className="navbar-nav align-items-lg-center gap-lg-4 mx-auto"
            variants={navContainerVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={index} 
                className="nav-item"
                variants={navItemVariants}
              >
                <a 
                  className={`${darkMode ? 'text-light' : 'text-secondary'} nav-link d-flex align-items-center gap-1`} 
                  href={link.href}
                  onClick={() => setIsExpanded(false)}
                >
                  {link.icon} {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="d-none d-lg-flex align-items-center">
            <div className="form-check form-switch m-0 ps-0">
              <input
                className={`form-check-input ms-0 shadow-none theme-switch-input ${darkMode ? 'dark-switch' : 'light-switch'}`}
                type="checkbox"
                role="switch"
                id="darkModeSpeedDesktop"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                title="Toggle Dark/Light Mode"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}