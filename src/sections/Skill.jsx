import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

import { TIMELINE_SKILLS, getToolsUsed } from '../data/skillsData';

const ToolCard = memo(({ tool, isDarkMode }) => (
    <div className="col-4 col-sm-3 col-md-3">
        <div className={`tool-card position-relative p-2 rounded-2 d-flex flex-column align-items-center justify-content-center gap-1 h-100 ${
            isDarkMode 
                ? 'bg-dark bg-opacity-25 border border-secondary border-opacity-25' 
                : 'bg-light border border-light-subtle'
        }`}>
            <div className={`corner-border corner-tl border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
            <div className={`corner-border corner-tr border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
            <div className={`corner-border corner-bl border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
            <div className={`corner-border corner-br border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />

            <div className="d-flex align-items-center justify-content-center">
                {tool.icon}
            </div>
            <span className="font-monospace text-center opacity-90 tool-card-label">
                {tool.name}
            </span>
        </div>
    </div>
));

export default function Skill() {
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

    const toolsUsed = getToolsUsed(isDarkMode);

    return (
        <section id="skills" className={`position-relative transition-all py-5 ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
            <div className="container px-3 px-md-5">
                <div className="mb-5">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Capabilities & Tools</small>
                    <h4 className="mb-2 fw-bold">My Expertise & Toolkit</h4>
                </div>

                <div className="row g-5 align-items-start">
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="position-relative ps-4 border-start border-1 border-secondary border-opacity-50 ms-2">
                            {TIMELINE_SKILLS.map((item, index) => (
                                <div key={index} className="position-relative mb-4 pb-2">
                                    <div 
                                        className={`timeline-node position-absolute top-0 start-0 translate-middle rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm ${
                                            isDarkMode ? 'bg-black border border-secondary text-light' : 'bg-white border-dark text-dark'
                                        }`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className={`ms-4 p-3 rounded-3 transition-all ${
                                        isDarkMode 
                                            ? 'bg-dark bg-opacity-50 border border-secondary border-opacity-25' 
                                            : 'bg-white border border-light-subtle shadow-sm'
                                    }`}>
                                        <h6 className="fw-bold mb-1">{item.title}</h6>
                                        <p className="small mb-2 opacity-75">{item.description}</p>
                                        <div className="d-flex flex-wrap gap-1 mt-2">
                                            {item.tags.map((tag, tagIdx) => (
                                                <span 
                                                    key={tagIdx} 
                                                    className={`badge font-monospace skill-tag-badge ${
                                                        isDarkMode 
                                                            ? 'bg-secondary bg-opacity-25 text-light border border-secondary border-opacity-50' 
                                                            : 'bg-light text-dark border border-secondary border-opacity-25'
                                                    }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} >
                        <div className={`p-4 position-relative rounded-2 ${
                            isDarkMode 
                                ? 'bg-black' 
                                : 'bg-transparent'
                        }`}>
                            <div className="row g-3">
                                {toolsUsed.map((tool, index) => (
                                    <ToolCard key={index} tool={tool} isDarkMode={isDarkMode} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}