import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AvatarImg from '../../assets/images/pfp.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { 
    y: -200, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      mass: 0.8, 
    },
  },
};


export default function Image({ isDarkMode }) {
  return (
    <motion.div 
      className="col-lg-5 text-center mt-5 mt-lg-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="position-relative mx-auto img-container">

        <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
        <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
        <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
        <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

        <div className={`img-panel ${isDarkMode ? 'bg-black border border-secondary border-opacity-50 text-light' : 'bg-white text-dark'} shadow-lg rounded-0 overflow-hidden p-3 position-relative`}>

          <div className="bg-dark rounded-0 overflow-hidden position-relative z-2 avatar-wrapper">
            
            <div className="avatar-grid-overlay">
              <div className="avatar-grid-square" style={{ top: '0px', left: '40px' }}></div>
              <div className="avatar-grid-square" style={{ top: '40px', left: '160px' }}></div>
              <div className="avatar-grid-square" style={{ top: '80px', left: '280px' }}></div>
              <div className="avatar-grid-square" style={{ top: '120px', left: '80px' }}></div>
              <div className="avatar-grid-square" style={{ top: '160px', left: '200px' }}></div>
              <div className="avatar-grid-square" style={{ top: '200px', left: '120px' }}></div>
              <div className="avatar-grid-square" style={{ top: '240px', left: '240px' }}></div>
              <div className="avatar-grid-square" style={{ top: '280px', left: '40px' }}></div>
              <div className="avatar-grid-square" style={{ top: '320px', left: '160px' }}></div>
              <div className="avatar-grid-square" style={{ top: '360px', left: '280px' }}></div>
              <div className="avatar-grid-square" style={{ top: '40px', left: '0px' }}></div>
              <div className="avatar-grid-square" style={{ top: '80px', left: '120px' }}></div>
              <div className="avatar-grid-square" style={{ top: '120px', left: '240px' }}></div>
              <div className="avatar-grid-square" style={{ top: '160px', left: '40px' }}></div>
              <div className="avatar-grid-square" style={{ top: '200px', left: '280px' }}></div>
              <div className="avatar-grid-square" style={{ top: '240px', left: '160px' }}></div>
              <div className="avatar-grid-square" style={{ top: '280px', left: '200px' }}></div>
              <div className="avatar-grid-square" style={{ top: '320px', left: '80px' }}></div>
              <div className="avatar-grid-square" style={{ top: '360px', left: '120px' }}></div>
              <div className="avatar-grid-square" style={{ top: '400px', left: '200px' }}></div>
            </div>

            <img
              src={AvatarImg}
              alt=""
              className="w-100 h-100 object-fit-cover position-relative z-1"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="position-absolute inset-0 bg-light bg-opacity-75 align-items-center justify-content-center text-dark fw-bold fallback-avatar-text z-2" style={{ inset: 0 }}>
              <span>Manga Avatar Here</span>
            </div>
          </div>

          <div className="mt-3 pt-2 z-2 position-relative text-start">
            <motion.span 
              variants={itemVariants} 
              className={`d-block font-monospace fw-bold small mb-2 text-uppercase ${isDarkMode ? 'text-light' : 'text-dark'}`}
            >
                💬 Let's Connect:
            </motion.span>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="d-flex gap-2" >

              <motion.a
                variants={itemVariants}
                href="mailto:your.rtchcntlls@gmail.com"
                className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                title="Email Me" >
                <HiOutlineMail size={16} /> Email
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://linkedin.com/in/rtch-cntlls-314543419"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                title="LinkedIn Profile"  >
                <FaLinkedin size={15} /> LinkedIn
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://github.com/rtch-cntlls"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} flex-grow-1 d-flex align-items-center justify-content-center gap-1 fw-bold font-monospace shadow-sm`}
                title="GitHub Profile" >
                <FaGithub size={15} /> GitHub
              </motion.a>
            </motion.div>
          </div>
        </div>
        <div className={`position-absolute top-0 start-0 w-100 h-100 ${isDarkMode ? 'bg-secondary bg-opacity-25' : 'bg-secondary'} rounded-0 img-backdrop-shadow`}></div>
      </div>
    </motion.div>
  );
}