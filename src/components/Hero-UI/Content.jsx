import { HiOutlineArrowRight, HiOutlineDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCommandLine, HiSparkles } from 'react-icons/hi2';

export default function Content({ isDarkMode, currentText }) {
  const stats = [
    {
      id: 'clients',
      icon: <HiSparkles />,
      value: '5+',
      label: 'Satisfied Clients',
    },
    {
      id: 'projects',
      icon: <HiBriefcase />,
      value: '10+',
      label: 'Completed Projects',
    },
    {
      id: 'tech-stack',
      icon: <HiCommandLine />,
      value: '20+',
      label: 'Technologies',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 } 
    },
  };

  return (
    <motion.div 
      className="col-lg-7 text-lg-start text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className={`head fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        <h1 className="m-0 d-flex align-items-center justify-content-center justify-content-lg-start">
          <span>{currentText}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="ms-1 cursor-caret"
            style={{ backgroundColor: isDarkMode ? '#fff' : '#000' }}
          />
        </h1>
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
          <div className="text-lg-end text-center mt-2 sub-headline-wrapper">
            <span className={`and me-1 ${isDarkMode ? 'text-light' : ''}`}>&</span>
            <span className="ui">UI/UX</span>
            
            <motion.span 
              className="designer-selected-wrapper ms-2 d-inline-block"
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="resize-handle handle-tl"></span>
              <span className="resize-handle handle-tm"></span>
              <span className="resize-handle handle-tr"></span>
              <span className="resize-handle handle-bl"></span>
              <span className="resize-handle handle-bm"></span>
              <span className="resize-handle handle-br"></span>
              <span className="designer px-3 py-1">Designer</span>
            </motion.span>
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

      <motion.div 
        className="stats-cards-section pt-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="row g-3 justify-content-center justify-content-lg-start">
          {stats.map((stat) => (
            <motion.div className="col-4" key={stat.id} variants={cardVariants}>
              <div 
                className={`position-relative p-3 rounded-0 border h-100 d-flex flex-column align-items-center align-items-lg-start bg-transparent stat-card-box ${
                  isDarkMode ? 'border-secondary text-light' : 'border-dark-subtle text-dark'
                }`} 
              >
                <span className="position-absolute stat-handle handle-tl"></span>
                <span className="position-absolute stat-handle handle-tm"></span>
                <span className="position-absolute stat-handle handle-tr"></span>
                <span className="position-absolute stat-handle handle-bl"></span>
                <span className="position-absolute stat-handle handle-bm"></span>
                <span className="position-absolute stat-handle handle-br"></span>

                <div className="d-flex align-items-center justify-content-start gap-3 w-100 mb-1">
                  <div className={`fs-4 ${isDarkMode ? 'text-light' : 'text-secondary'}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h2 className="fw-bold fs-5 m-0 lh-1">{stat.value}</h2>
                    <span className="small text-uppercase opacity-75 d-block mt-1 stat-label">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}