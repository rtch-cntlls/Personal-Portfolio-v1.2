import React, { useState, useEffect } from 'react';
import { 
  HiOutlineMail, 
  HiOutlineArrowUp 
} from 'react-icons/hi';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaTiktok, 
  FaInstagram 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-bs-theme');
      setIsDark(theme === 'dark');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#project', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={16} />, href: 'https://github.com/rtch-cntlls', label: 'GitHub' },
    { icon: <FaLinkedinIn size={16} />, href: 'https://linkedin.com/in/rtch-cntlls-314543419', label: 'LinkedIn' },
    { icon: <FaFacebookF size={16} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram size={16} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTiktok size={16} />, href: 'https://tiktok.com', label: 'TikTok' },
  ];

  return (
    <footer className={`position-relative border-top ${isDark ? 'bg-black text-light border-secondary border-opacity-50' : 'bg-light text-dark border-dark-subtle'} py-5 mt-5 overflow-hidden`}>
      <div className="container px-3 px-md-5">
        <div className="row g-5 justify-content-between align-items-start mb-5">
          
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="fw-bold mb-3 tracking-tight">Let's Build Together.</h3>
              <p className={`${isDark ? 'text-muted' : 'text-secondary'} mb-4`} style={{ maxWidth: '400px' }}>
                Crafting performant, accessible, and user-centric web applications from Cebu City to the world. Always open to interesting conversations and ideas.
              </p>
              
              <div className="d-flex align-items-center gap-2">
                <span className="position-relative d-flex h-3 w-3">
                  <span className="animate-ping position-absolute inline-flex h-100 w-100 rounded-circle bg-success opacity-75"></span>
                  <span className="position-relative inline-flex rounded-circle h-2 w-2 bg-success m-auto" style={{ width: '8px', height: '8px' }}></span>
                </span>
                <span className={`small font-monospace ${isDark ? 'text-light' : 'text-dark'} fw-medium`}>
                  Available for select opportunities
                </span>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-3 col-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h6 className={`fw-bold mb-3 font-monospace small text-uppercase ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Navigation
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className={`text-decoration-none transition-all ${isDark ? 'text-light opacity-75 hover-opacity-100' : 'text-dark opacity-75 hover-opacity-100'}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-3 col-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h6 className={`fw-bold mb-3 font-monospace small text-uppercase ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Socials
              </h6>
              
              <div className="d-flex flex-wrap gap-2 mb-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`d-flex align-items-center justify-content-center rounded-circle border ${isDark ? 'border-secondary text-light bg-dark' : 'border-dark-subtle text-dark bg-white'} transition-all`}
                    style={{ width: '38px', height: '38px' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a 
                href="mailto:your.rtchcntlls@gmail.com"
                className={`btn btn-sm ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2`}
              >
                <HiOutlineMail size={16} />
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </div>

        </div>

        <div className={`pt-4 border-top ${isDark ? 'border-secondary border-opacity-25' : 'border-dark-subtle'} d-flex flex-column flex-md-row justify-content-between align-items-center gap-3`}>
          <p className={`small font-monospace mb-0 ${isDark ? 'text-muted' : 'text-secondary'}`}>
            &copy; {currentYear} Rtch Cntlls
          </p>

          <div className="d-flex align-items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={`btn btn-sm ${isDark ? 'btn-dark border-secondary text-light' : 'btn-light border text-dark'} d-flex align-items-center justify-content-center rounded-circle`}
              style={{ width: '36px', height: '36px' }}
            >
              <HiOutlineArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}