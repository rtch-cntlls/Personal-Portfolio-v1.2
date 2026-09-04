import { motion } from 'framer-motion';
import { TIMELINE_SKILLS } from '../data/skillsData';

export default function Skill() {
    const leadArticle = TIMELINE_SKILLS[0];
    const designArticle = TIMELINE_SKILLS[1];
    const responsiveArticle = TIMELINE_SKILLS[2];
    const editingArticle = TIMELINE_SKILLS[3];

    return (
        <section id="skillsandtools" className="position-relative transition-all">
            <div className="container px-3 px-md-5">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Capabilities & Editorial</small>
                    <h4 className="fw-bold mt-1">Expertise & Insights</h4>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="row g-4">
                        <div className="col-lg-6">
                            {leadArticle && (
                                <div className="magazine-card themed-card p-4 rounded position-relative overflow-visible h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-6 z-1">
                                            <div className="mb-2 text-primary">{leadArticle.icon}</div>
                                            <h4 className="fw-bold mb-2">{leadArticle.title}</h4>
                                            <p className="opacity-75 mb-3 small lh-base">{leadArticle.description}</p>
                                             <div className="d-flex flex-wrap gap-1">
                                                {leadArticle.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="badge bg-secondary bg-opacity-10 text-muted font-monospace tag-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-4 mt-md-0 position-relative">
                                            <div 
                                                className="position-relative" 
                                                style={{ transform: 'scale(1.2) rotate(3deg)', zIndex: 5, transformOrigin: 'center center' }} 
                                            >
                                                <img src={leadArticle.previewImage} alt="Website Sample" className="img-fluid w-100 object-fit-contain" style={{ maxHeight: '180px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-6">
                            {designArticle && (
                                <div 
                                    className="magazine-card themed-card p-4 rounded position-relative overflow-hidden h-100 bg-cover-left"
                                    style={{ 
                                        '--bg-image': `url(${designArticle.bgImage})`, 
                                        '--overlay-dark': 'rgba(65, 58, 58, 0.95)', 
                                        '--overlay-light': 'rgba(255, 255, 255, 0.94)',
                                        borderColor: 'rgba(255, 193, 7, 0.5)'
                                    }}
                                >
                                    <div>
                                        <div className="col-md-6">
                                            <div className="mb-2 text-primary">{designArticle.icon}</div>
                                            <h4 className="fw-bold mb-2">{designArticle.title}</h4>
                                            <p className="small opacity-75 mb-3">{designArticle.description}</p>
                                            <div className="d-flex flex-wrap gap-1">
                                                {designArticle.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="badge bg-secondary bg-opacity-10 text-muted font-monospace tag-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-6">
                            {responsiveArticle && (
                                <div className="magazine-card themed-card p-4 rounded position-relative overflow-hidden h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-7">
                                            <div className="mb-2 text-primary">{responsiveArticle.icon}</div>
                                            <h4 className="fw-bold mb-2">{responsiveArticle.title}</h4>
                                            <p className="small opacity-75 mb-3">{responsiveArticle.description}</p>
                                            <div className="d-flex flex-wrap gap-1">
                                                {responsiveArticle.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="badge bg-secondary bg-opacity-10 text-muted font-monospace tag-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-5 mt-3 mt-md-0 text-center text-md-end">
                                            <img src={responsiveArticle.overlapImage} alt="Responsive Mockup" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-6">
                            {editingArticle && (
                                <div className="magazine-card themed-card p-4 rounded position-relative overflow-hidden h-100">
                                    <div className="row align-items-center h-100">
                                        <div className="col-md-7">
                                            <div className="mb-2 text-primary">{editingArticle.icon}</div>
                                            <h4 className="fw-bold mb-0">{editingArticle.title}</h4>
                                            <p className="small opacity-75 mb-2 mt-2">{editingArticle.description}</p>
                                            <div className="d-flex flex-wrap gap-1">
                                                {editingArticle.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="badge font-monospace skill-tag-badge bg-secondary bg-opacity-10 text-muted">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-5 mt-3 mt-md-0 d-flex gap-2 justify-content-end align-items-center position-relative">
                                            {editingArticle.scatterImages.map((img, imgIdx) => {
                                                const imgSrc = typeof img === 'object' ? img.src : img;
                                                const shouldInvert = typeof img === 'object' && img.invertInDarkMode;
                                                return (
                                                    <div key={imgIdx} className={`scattered-img-wrapper overflow-hidden ${imgIdx === 0 ? 'scatter-rotate-left' : 'scatter-rotate-right'}`}>
                                                        <img src={imgSrc} alt="Scatter preview" className={`w-100 h-100 object-fit-contain ${shouldInvert ? 'filter-invert-dark' : ''}`} />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}