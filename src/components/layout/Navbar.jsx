import { useState, useEffect } from 'react';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineCog, 
  HiOutlineBriefcase 
} from 'react-icons/hi';
import { BiPalette } from 'react-icons/bi';
import { FiSun, FiMoon } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState('primary');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const changeTheme = (color) => {
    setThemeColor(color);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-black border-bottom border-secondary border-opacity-50' : 'navbar-light bg-white shadow-sm'} fixed-top`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" href="#hero">
          <div className={`${darkMode ? 'bg-light' : 'bg-white'} custom-border p-1 shadow-sm d-flex align-items-center justify-content-center logo`}>
            <img src={Logo} alt="Rtch Cntlls Logo" className="w-100 h-100" />
          </div>
          <div className="d-flex flex-column">
            <span className={`fw-bold lh-sm name ${darkMode ? 'text-light' : 'text-dark'}`}>
              Rtch Cntlls
            </span>
            <span className="text-primary fw-medium text-uppercase tracking-wider sub-name">
              Web Developer
            </span>
          </div>
        </a>
 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-4 mx-auto">
            <li className="nav-item">
              <a className={`${darkMode ? 'text-light' : 'text-dark'} nav-link d-flex align-items-center gap-1`} href="#hero">
                <HiOutlineHome size={16} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`${darkMode ? 'text-light' : 'text-dark'} nav-link d-flex align-items-center gap-1`} href="#about">
                <HiOutlineUser size={16} /> About
              </a>
            </li>
            <li className="nav-item">
              <a className={`${darkMode ? 'text-light' : 'text-dark'} nav-link d-flex align-items-center gap-1`} href="#skills">
                <HiOutlineCode size={16} /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={`${darkMode ? 'text-light' : 'text-dark'} nav-link d-flex align-items-center gap-1`} href="#services">
                <HiOutlineCog size={16} /> Services
              </a>
            </li>
            <li className="nav-item">
              <a className={`${darkMode ? 'text-light' : 'text-dark'} nav-link d-flex align-items-center gap-1`} href="#projects">
                <HiOutlineBriefcase size={16} /> Projects
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <div className="dropdown">
              <button 
                className={`btn btn-outline-${themeColor} btn-sm dropdown-toggle d-flex align-items-center gap-1`} 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false" >
                <BiPalette size={16} /> Theme
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li><button className="dropdown-item text-primary" onClick={() => changeTheme('primary')}>■ Blue</button></li>
                <li><button className="dropdown-item text-success" onClick={() => changeTheme('success')}>■ Green</button></li>
                <li><button className="dropdown-item text-warning" onClick={() => changeTheme('warning')}>■ Yellow</button></li>
                <li><button className="dropdown-item text-danger" onClick={() => changeTheme('danger')}>■ Red</button></li>
              </ul>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} d-flex align-items-center justify-content-center mode`}
              title="Toggle Dark/Light Mode" >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}