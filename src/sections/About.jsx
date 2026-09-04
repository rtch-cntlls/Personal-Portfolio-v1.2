import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';

export default function About() {
    return (
        <section id="about">
            <div className="container px-3 px-md-5 py-4">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">About Me</small>
                    <h4 className="fw-bold mt-1">Who I Am</h4>
                </div>
                <div className="row align-items-center g-5">
                    <motion.div 
                        className="col-lg-5 text-center d-none d-lg-block"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <img 
                            src={aboutData.image} 
                            alt={aboutData.imageAlt} 
                            className="img-fluid shadow-sm rounded-0 object-fit-cover"
                            style={{ maxHeight: '420px', width: '100%', maxWidth: '350px' }}
                        />
                    </motion.div>

                    <motion.div 
                        className="col-lg-7 position-relative p-4 p-md-5"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="position-absolute camera-focus-tl border-top border-start border-primary"></div>
                        <div className="position-absolute camera-focus-tr border-top border-end border-primary"></div>
                        <div className="position-absolute camera-focus-bl border-bottom border-start border-primary"></div>
                        <div className="position-absolute camera-focus-br border-bottom border-end border-primary"></div>

                        <blockquote className="blockquote mb-4 position-relative ps-4 border-start border-3 border-primary">
                            <span 
                                className="position-absolute top-0 start-0 translate-middle-y text-primary font-monospace" 
                                style={{ fontSize: '3rem', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}
                                aria-hidden="true"
                            >
                                “
                            </span>
                            <h3 className="fw-bold fs-3 fst-italic mb-0">
                                {aboutData.title}
                            </h3>
                        </blockquote>

                        <div className="about-text-content opacity-90 lh-lg d-flex flex-column gap-3 fs-6">
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <p key={index} className="mb-0 text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}