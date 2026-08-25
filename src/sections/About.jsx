import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutFiles } from '../data/aboutData';

function TypingText({ text, className = "", delay = 0 }) {
    const words = text.split(" ");

    return (
        <motion.p 
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <span key={i}>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 5 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            duration: 0.1,
                            delay: delay + i * 0.04,
                        }}
                        style={{ display: 'inline' }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && " "}
                </span>
            ))}
        </motion.p>
    );
}

export default function About() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeFileKey, setActiveFileKey] = useState('bio');
    const activeData = aboutFiles[activeFileKey];

    useEffect(() => {
        const checkTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            setIsDarkMode(currentTheme === 'dark');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

        return () => observer.observer ? observer.disconnect() : observer.disconnect();
    }, []);

    return (
        <section id="about" className={`position-relative transition-all ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
           <div className="container py-4 px-2 px-md-5 position-relative z-2">
                
                <div className={`shadow-sm border border-secondary-subtle ${isDarkMode ? 'bg-black border-secondary text-light' : 'bg-light border-dark text-dark'}`}>
                    
                    <div className={`px-3 py-2 d-flex align-items-center justify-content-between border-bottom ${isDarkMode ? 'bg-dark border-secondary' : 'bg-secondary-subtle border-dark-subtle'}`}>
                        <div className="d-flex align-items-center gap-2">
                            <span className="window-dot bg-danger rounded-circle d-inline-block window-dot-size"></span>
                            <span className="window-dot bg-warning rounded-circle d-inline-block window-dot-size"></span>
                            <span className="window-dot bg-success rounded-circle d-inline-block window-dot-size"></span>
                            <span className="font-monospace small ms-2 text-uppercase opacity-75">About_Me.exe - {activeData.fileName}</span>
                        </div>
                    </div>

                    <div className={`path-bar px-3 py-2 border-bottom font-monospace small d-flex align-items-center gap-2 ${isDarkMode ? 'border-secondary bg-black' : 'border-dark-subtle bg-white'}`}>
                        <span className="opacity-50">Path:</span>
                        <span className="badge bg-dark rounded-0 fw-normal">C:/portfolio/about_me/{activeData.fileName}</span>
                    </div>

                    <div className={`d-block d-md-none border-bottom p-2 font-monospace small ${isDarkMode ? 'border-secondary bg-dark' : 'border-dark-subtle bg-light'}`}>
                        <div className="text-uppercase opacity-50 mb-1 px-1" style={{ fontSize: '0.75rem' }}>Select File:</div>
                        <div className="d-flex gap-2 overflow-auto">
                            {Object.keys(aboutFiles).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveFileKey(key)}
                                    className={`btn btn-sm font-monospace rounded-0 text-nowrap ${
                                        activeFileKey === key 
                                            ? 'btn-primary text-white' 
                                            : isDarkMode ? 'btn-outline-secondary text-light' : 'btn-outline-dark'
                                    }`}
                                >
                                    📁 {aboutFiles[key].fileName}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="row g-0">
                        
                        <motion.div 
                            className={`col-md-3 border-end p-3 font-monospace small d-none d-md-block ${isDarkMode ? 'border-secondary' : 'border-dark-subtle'}`}
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="fw-bold text-uppercase opacity-50 mb-3">Directories</div>
                            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                {Object.keys(aboutFiles).map((key) => (
                                    <li 
                                        key={key}
                                        onClick={() => setActiveFileKey(key)}
                                        className={`p-2 cursor-pointer transition-all ${activeFileKey === key ? 'bg-primary bg-opacity-10 border border-secondary rounded text-secondary fw-bold' : 'opacity-75 hover-opacity-100'}`}>
                                        📁 {aboutFiles[key].fileName}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="col-12 col-md-9 p-4 about-content-area">
                            <div className="font-monospace mb-2 text-uppercase small opacity-75">// Active File: {activeData.fileName}</div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <motion.h2 
                                        key={activeData.id + '-title'}
                                        className={`mb-2 fw-bold about-title ${isDarkMode ? 'text-custom ' : 'text-dark '}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {activeData.title}
                                    </motion.h2>
                                    
                                    <TypingText 
                                        key={activeData.id + '-text'}
                                        text={activeData.text}
                                        className={`lead fs-6 opacity-90 mb-4 about service-description ${isDarkMode ? 'text-muted' : 'text-dark'}`}
                                        delay={0.1}
                                    />

                                    <motion.div 
                                        key={activeData.id + '-table'}
                                        className="table-responsive"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <table className={`table table-sm font-monospace small ${isDarkMode ? 'table-dark text-light' : ''}`}>
                                            <tbody>
                                                {activeData.details.map((detail, idx) => (
                                                    <tr key={idx}>
                                                        <td className="opacity-50 w-25">{detail.label}</td>
                                                        <td>
                                                            {detail.statusClass ? (
                                                                <span className={detail.statusClass}>{detail.value}</span>
                                                            ) : (
                                                                detail.value
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </motion.div>
                                </div>

                                <motion.div 
                                    key={activeData.id + '-img'}
                                    className="col-lg-5 text-center mt-4 mt-lg-0"
                                    initial={{ opacity: 0, x: 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                                >
                                    <div className="position-relative p-3 mx-auto d-inline-block">
                                        <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
                                        <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
                                        <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
                                        <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

                                        <img 
                                            src={activeData.image} 
                                            alt={activeData.imageAlt} 
                                            className="img-fluid object-fit-contain z-2 position-relative"
                                            style={{ maxHeight: activeData.imageMaxHeight }}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}