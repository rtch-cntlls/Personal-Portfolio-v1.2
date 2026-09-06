import { memo } from 'react';
import { motion } from 'framer-motion';
import { getToolsUsed } from '../data/skillsData';

const ToolItem = memo(({ tool }) => (
    <div className="tool-item position-relative p-2 me-4 flex-shrink-0 d-flex flex-column align-items-center justify-content-center">
        <div className="corner-border corner-tl border-top border-start border-1" />
        <div className="corner-border corner-tr border-top border-end border-1" />
        <div className="corner-border corner-bl border-bottom border-start border-1" />
        <div className="corner-border corner-br border-bottom border-end border-1" />

        <div className="d-flex align-items-center justify-content-center fs-2 mb-1 tool-icon-wrapper">
            {tool.icon}
        </div>
        <span className="text-truncate text-center font-monospace opacity-75 tool-name">
            {tool.name}
        </span>
    </div>
));

export default function Tools() {
    const toolsUsed = getToolsUsed();

    const desktopRows = [
        toolsUsed.filter((_, i) => i % 3 === 0),
        toolsUsed.filter((_, i) => i % 3 === 1),
        toolsUsed.filter((_, i) => i % 3 === 2),
    ];

    const mobileRows = [
        toolsUsed.filter((_, i) => i % 4 === 0),
        toolsUsed.filter((_, i) => i % 4 === 1),
        toolsUsed.filter((_, i) => i % 4 === 2),
        toolsUsed.filter((_, i) => i % 4 === 3),
    ];

    return (
        <section id="skillsandtools" className="position-relative transition-all py-5">
            <div className="container px-3 px-md-5">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">
                        Stack & Technologies
                    </small>
                    <h4 className="fw-bold font-serif mt-1">Tools & Environment</h4>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="tools-ticker-wrapper-horizontal position-relative overflow-hidden p-2">
                        <div className="d-none d-md-flex flex-column gap-3">
                            {desktopRows.map((row, rIdx) => (
                                <div key={`dt-row-${rIdx}`} className="overflow-hidden position-relative w-100 py-1">
                                    <div className={`tools-ticker-row ${rIdx % 2 === 1 ? 'ticker-left-delayed' : 'ticker-left'}`}>
                                        {[...row, ...row, ...row].map((tool, index) => (
                                            <ToolItem key={`dt-${rIdx}-${index}`} tool={tool} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex d-md-none flex-column gap-2">
                            {mobileRows.map((row, rIdx) => (
                                <div key={`mb-row-${rIdx}`} className="overflow-hidden position-relative w-100 py-1">
                                    <div className={`tools-ticker-row ${rIdx % 2 === 1 ? 'ticker-left-delayed' : 'ticker-left'}`}>
                                        {[...row, ...row, ...row].map((tool, index) => (
                                            <ToolItem key={`mb-${rIdx}-${index}`} tool={tool} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}