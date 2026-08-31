import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { getToolsUsed } from '../data/skillsData';

const ToolCard = memo(({ tool, isDarkMode }) => (
    <div className={`tool-card position-relative p-3 rounded-3 d-flex flex-column align-items-center justify-content-center mb-3 aspect-square ${
        isDarkMode 
            ? 'bg-dark bg-opacity-25 border border-secondary border-opacity-25' 
            : 'bg-light border border-light-subtle'
    }`}>
        <div className={`corner-border corner-tl border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
        <div className={`corner-border corner-tr border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
        <div className={`corner-border corner-bl border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />
        <div className={`corner-border corner-br border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'}`} />

        <div className="d-flex align-items-center justify-content-center fs-2">
            {tool.icon}
        </div>
    </div>
));

export default function Tools() {
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

    const col1 = toolsUsed.filter((_, i) => i % 4 === 0);
    const col2 = toolsUsed.filter((_, i) => i % 4 === 1);
    const col3 = toolsUsed.filter((_, i) => i % 4 === 2);
    const col4 = toolsUsed.filter((_, i) => i % 4 === 3);

    return (
        <section id="skillsandtools" className={`position-relative transition-all py-5 ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
            <div className="container px-3 px-md-5">
                <div className="mb-3">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Stack & Technologies</small>
                    <h4 className=" fw-bold font-serif mt-1">Tools & Environment</h4>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="tools-ticker-wrapper position-relative overflow-hidden rounded-3 p-2 tools-ticker-height">
                        <div className="row g-2 h-100">
                            <div className="col-3 h-100 overflow-hidden position-relative">
                                <div className="tools-ticker-col ticker-up">
                                    {[...col1, ...col1, ...col1].map((tool, index) => (
                                        <ToolCard key={`c1-${index}`} tool={tool} isDarkMode={isDarkMode} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-3 h-100 overflow-hidden position-relative">
                                <div className="tools-ticker-col ticker-up-delayed">
                                    {[...col2, ...col2, ...col2].map((tool, index) => (
                                        <ToolCard key={`c2-${index}`} tool={tool} isDarkMode={isDarkMode} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-3 h-100 overflow-hidden position-relative">
                                <div className="tools-ticker-col ticker-up">
                                    {[...col3, ...col3, ...col3].map((tool, index) => (
                                        <ToolCard key={`c3-${index}`} tool={tool} isDarkMode={isDarkMode} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-3 h-100 overflow-hidden position-relative">
                                <div className="tools-ticker-col ticker-up-delayed">
                                    {[...col4, ...col4, ...col4].map((tool, index) => (
                                        <ToolCard key={`c4-${index}`} tool={tool} isDarkMode={isDarkMode} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}