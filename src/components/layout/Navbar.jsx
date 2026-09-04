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
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const navLinks = [
    { href: '#hero', icon: <HiOutlineHome size={15} />, label: 'Home' },
    { href: '#project', icon: <HiOutlineBriefcase size={15} />, label: 'Projects' },
    { href: '#skillsandtools', icon: <HiOutlineCode size={15} />, label: 'Skills & Tools' },
    { href: '#about', icon: <HiOutlineUser size={15} />, label: 'About' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navLinks]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-black text-light border-bottom border-secondary border-opacity-50' : 'navbar-light bg-white shadow-sm'} fixed-top`}>
      <div className="container px-3 px-md-5">
        <a className="navbar-brand" href="#hero">
          <div className={`${darkMode ? 'bg-dark' : 'bg-white'} d-flex align-items-center justify-content-center gap-1 logo`}>
            <img 
              src={Logo} 
              alt="Rtch Cntlls Logo" 
              className={`w-100 h-100 logo-img object-fit-contain ${darkMode ? 'dark-mode-logo' : ''}`} 
            />
            <div className="d-flex flex-column lh-1">
                <span className={`name ${darkMode ? 'text-light' : 'text-dark'}`}>
                  R.Dev
                </span>
                <span className={`name ${darkMode ? 'text-light' : 'text-a'}`}>
                  404
                </span>
            </div>
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
            className="navbar-nav align-items-lg-center gap-lg-3 mx-auto"
            variants={navContainerVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;
              return (
                <motion.li 
                  key={index} 
                  className="nav-item"
                  variants={navItemVariants}
                >
                  <a 
                    className={`nav-link d-inline-flex align-items-center gap-1 position-relative px-2 py-1 fw-bold tracking-tight ${
                      isActive 
                        ? darkMode ? 'text-light' : 'text-dark' 
                        : darkMode ? 'text-light opacity-75' : 'text-secondary'
                    }`} 
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href);
                      setIsExpanded(false);
                    }}
                  >
                    {isActive && (
                      <>
                        <span className={`position-absolute border-top border-start border-2 ${darkMode ? 'border-light' : 'border-dark'} camera-focus-tl`} style={{ top: '0px', left: '0px', width: '6px', height: '6px' }}></span>
                        <span className={`position-absolute border-top border-end border-2 ${darkMode ? 'border-light' : 'border-dark'} camera-focus-tr`} style={{ top: '0px', right: '0px', width: '6px', height: '6px' }}></span>
                        <span className={`position-absolute border-bottom border-start border-2 ${darkMode ? 'border-light' : 'border-dark'} camera-focus-bl`} style={{ bottom: '0px', left: '0px', width: '6px', height: '6px' }}></span>
                        <span className={`position-absolute border-bottom border-end border-2 ${darkMode ? 'border-light' : 'border-dark'} camera-focus-br`} style={{ bottom: '0px', right: '0px', width: '6px', height: '6px' }}></span>
                      </>
                    )}
                    {link.icon} {link.label}
                  </a>
                </motion.li>
              );
            })}
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