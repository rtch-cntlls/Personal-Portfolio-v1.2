import { memo } from 'react';
import { motion } from 'framer-motion';
import { getToolsUsed } from '../data/skillsData';

const ToolCard = memo(({ tool }) => (
    <div className="tool-card tool-card-theme position-relative p-2 rounded-3 d-flex flex-column align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '105px', height: '95px' }}>
        <div className="corner-border corner-tl border-top border-start border-2" />
        <div className="corner-border corner-tr border-top border-end border-2" />
        <div className="corner-border corner-bl border-bottom border-start border-2" />
        <div className="corner-border corner-br border-bottom border-end border-2" />

        <div className="d-flex align-items-center justify-content-center fs-3 mb-1">
            {tool.icon}
        </div>
        <span className="text-truncate w-100 text-center font-monospace opacity-75" style={{ fontSize: '0.65rem' }}>
            {tool.name}
        </span>
    </div>
));

export default function Tools() {
    const toolsUsed = getToolsUsed();

    const row1 = toolsUsed.filter((_, i) => i % 3 === 0);
    const row2 = toolsUsed.filter((_, i) => i % 3 === 1);
    const row3 = toolsUsed.filter((_, i) => i % 3 === 2);

    return (
        <section id="skillsandtools" className="position-relative transition-all py-5">
            <div className="container px-3 px-md-5">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Stack & Technologies</small>
                    <h4 className="fw-bold font-serif mt-1">Tools & Environment</h4>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="tools-ticker-wrapper-horizontal position-relative overflow-hidden rounded-3 p-2 d-flex flex-column gap-3">
                        <div className="overflow-hidden position-relative w-100">
                            <div className="tools-ticker-row ticker-left">
                                {[...row1, ...row1, ...row1].map((tool, index) => (
                                    <ToolCard key={`r1-${index}`} tool={tool} />
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden position-relative w-100">
                            <div className="tools-ticker-row ticker-left-delayed">
                                {[...row2, ...row2, ...row2].map((tool, index) => (
                                    <ToolCard key={`r2-${index}`} tool={tool} />
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden position-relative w-100">
                            <div className="tools-ticker-row ticker-left">
                                {[...row3, ...row3, ...row3].map((tool, index) => (
                                    <ToolCard key={`r3-${index}`} tool={tool} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}