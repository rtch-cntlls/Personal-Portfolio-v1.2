import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AvatarImg from '../../assets/images/profile1.webp';

export default function Image({ isDarkMode }) {
  return (
    <div className="col-lg-5 text-center mt-5 mt-lg-0">
      <div className="position-relative mx-auto img-container">

        <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
        <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
        <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
        <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

        <div className={`img-panel ${isDarkMode ? 'bg-black border border-secondary border-opacity-50 text-light' : 'bg-white text-dark'} shadow-lg rounded-0 overflow-hidden p-3 position-relative`}>

          <div className="bg-dark rounded-0 overflow-hidden position-relative z-2 avatar-wrapper">
            <img
              src={AvatarImg}
              alt=""
              className="w-100 h-100 object-fit-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="position-absolute inset-0 bg-light bg-opacity-75 align-items-center justify-content-center text-dark fw-bold fallback-avatar-text" style={{ inset: 0 }}>
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
                href="https://linkedin.com/in/rtch-cntlls-314543419"
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
  );
}