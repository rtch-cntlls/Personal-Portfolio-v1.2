import { useState, useEffect } from 'react';
import { HiOutlineArrowRight, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AvatarImg from '../assets/images/pfp.jpg';

export default function Hero() {
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
    <section id="hero" className="d-flex align-items-center pt-5 overflow-hidden">
      <div className="hero-grid-pattern">
        <div className="grid-square" style={{ top: '40px', left: '120px' }}></div>
        <div className="grid-square" style={{ top: '80px', left: '360px' }}></div>
        <div className="grid-square" style={{ top: '40px', left: '680px' }}></div>
        <div className="grid-square" style={{ top: '120px', left: '920px' }}></div>
        <div className="grid-square" style={{ top: '80px', left: '1160px' }}></div>
        <div className="grid-square" style={{ top: '40px', left: '1440px' }}></div>

        <div className="grid-square" style={{ top: '240px', left: '200px' }}></div>
        <div className="grid-square" style={{ top: '320px', left: '560px' }}></div>
        <div className="grid-square" style={{ top: '280px', left: '840px' }}></div>
        <div className="grid-square" style={{ top: '360px', left: '1280px' }}></div>
        <div className="grid-square" style={{ top: '200px', left: '1600px' }}></div>

        <div className="grid-square" style={{ top: '520px', left: '80px' }}></div>
        <div className="grid-square" style={{ top: '600px', left: '320px' }}></div>
        <div className="grid-square" style={{ top: '560px', left: '600px' }}></div>
        <div className="grid-square" style={{ top: '640px', left: '880px' }}></div>
        <div className="grid-square" style={{ top: '520px', left: '1120px' }}></div>
        <div className="grid-square" style={{ top: '600px', left: '1400px' }}></div>
        <div className="grid-square" style={{ top: '560px', left: '1680px' }}></div>
        <div className="grid-square" style={{ top: '640px', left: '440px' }}></div>
        <div className="grid-square" style={{ top: '520px', left: '1840px' }}></div>
      </div>

      <div className="container py-5 position-relative z-2">
        <div className="row align-items-center">

          <div className="col-lg-7 text-lg-start text-center">
            <div className={`head fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <h1 className="m-0">Hi, I'm</h1>
            </div>

            <div className="headline">
              <h1 className="m-0">
                <span className="r">R</span>
                <span className="me-4 tch">tch</span>
                <span className="c">C</span>
                <span className="n">n</span>
                <span className="tl">tl</span>
                <span className="l">l</span>
                <span className="s">s</span>
              </h1>
            </div>

            <div className="sub-headline mb-4">
              <h1 className="m-0 lh-1">
                <div>
                  <span className="full"><span className="f">F</span>Ull</span>
                  <span className="stack me-2">stack</span>
                  <span className="developer ms-2">
                    <span className="d">D</span>
                    eveloper
                  </span>
                </div>
                <div className="text-lg-end text-center mt-1 sub-headline-wrapper">
                  <span className={`and me-1 ${isDarkMode ? 'text-light' : ''}`}>&</span>
                  <span className="ui">UI/UX</span>
                  <span className="designer ms-2 px-3">Designer</span>
                </div>
              </h1>
            </div>

            <p className={`lead mb-4 mx-auto mx-lg-0 hero-lead-text ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
              I build exceptional, high-performing digital experiences, clean web interfaces, and robust backend systems with modern technologies.
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
              <a
                href="#projects"
                className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} d-inline-flex align-items-center gap-2 px-4 py-2 shadow-sm`}>
                View Projects <HiOutlineArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-secondary'} d-inline-flex align-items-center gap-2 px-4 py-2`} >
                Download CV <HiOutlineDownload size={18} />
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="position-relative mx-auto img-container">

              <div className={`img-panel ${isDarkMode ? 'bg-black border border-secondary border-opacity-50 text-light' : 'bg-white text-dark'} shadow-lg rounded-0 overflow-hidden p-3 position-relative`}>

                <div className="ratio ratio-1x1 bg-dark rounded-0 overflow-hidden position-relative z-2">
                  <img
                    src={AvatarImg}
                    alt=""
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="position-absolute inset-0 bg-light bg-opacity-75 align-items-center justify-content-center text-dark fw-bold fallback-avatar-text">
                    <span>Manga Avatar Here</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 z-2 position-relative text-start">
                  <span className={`d-block font-monospace fw-bold small mb-2 text-uppercase ${isDarkMode ? 'text-light' : 'text-dark'}`}>💬 Let's Connect:</span>
                  <div className="d-flex gap-2">
                    <a
                      href="mailto:your.rtchcntlls@gmail.com"
                      className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                      title="Email Me" >
                      <HiOutlineMail size={16} /> Email
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                      title="LinkedIn Profile"  >
                      <FaLinkedin size={15} /> LinkedIn
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                      title="GitHub Profile" >
                      <FaGithub size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={`position-absolute top-0 start-0 w-100 h-100 ${isDarkMode ? 'bg-secondary bg-opacity-25' : 'bg-secondary'} rounded-0 img-backdrop-shadow`}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}