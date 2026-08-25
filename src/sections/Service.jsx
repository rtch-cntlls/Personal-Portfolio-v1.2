import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                <React.Fragment key={i}>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 5 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{
                            duration: 0.1,
                            delay: delay + i * 0.03,
                        }}
                        style={{ display: 'inline' }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && " "} 
                </React.Fragment>
            ))}
        </motion.p>
    );
}

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            number: "01",
            title: "Static Website",
            category: "Development & Delivery",
            description: "Lightning-fast, ultra-secure landing pages and portfolios built with modern technologies tailored for optimal conversion.",
            details: "Perfect for personal portfolios, landing pages, and small business sites. Built using modern technologies. Optimized for maximum search engine performance, lightning-fast load times, and top-tier security standards."
        },
        {
            number: "02",
            title: "Dynamic Website",
            category: "FullStack Architecture",
            description: "Interactive web applications featuring real-time database integration, secure user authentication, and seamless third-party APIs.",
            details: "Ideal for web apps, SaaS platforms, and e-commerce stores. Features secure backend integration, real-time database syncing, user authentication pipelines, and robust third-party API connections (payment gateways, dashboards, etc.)."
        },
        {
            number: "03",
            title: "Deployment & Maintenance",
            category: "Infrastructure & Ops",
            description: "Seamless Git-based deployment, cloud hosting setup, continuous security updates, and dependable performance monitoring.",
            details: "Ensure your apps stay online without a hitch. Includes seamless Git-based deployment workflows, cloud hosting server setup (Cloudflare, Hostinger, Vercel, Netlify), continuous security patching, and dependable performance tracking."
        },
        {
            number: "04",
            title: "UI/UX & Optimization",
            category: "Design & Refinement",
            description: "Performance tuning, SEO enhancements, and bespoke responsive design to keep your digital products running at top speed.",
            details: "Turn visitors into long-term users. Focuses on deep code refactoring, Core Web Vitals optimization, advanced on-page SEO enhancements, and responsive mobile-first layouts tailored for exceptional user experience."
        }
    ];

    return (
        <section id="services">
            <div className="container px-3 px-md-5 mt-4 mb-3">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Services I Offer</small>
                    <h4 className="mb-2 fw-bold">What I can do for you</h4>
                </div>

                <div className="row g-4 overflow-hidden">
                    {services.map((service, index) => {
                        const isFeatured = index === 0 || index === 3;

                        return (
                            <div 
                                key={service.number}
                                className={isFeatured ? "col-lg-7" : "col-lg-5"} 
                            >
                                <motion.div 
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="position-relative p-3 h-100 service-wrapper cursor-pointer"
                                    onClick={() => setSelectedService(service)}
                                >
                                    <div className="position-absolute border-top border-start border-2 border-secondary z-3 camera-focus camera-focus-tl"></div>
                                    <div className="position-absolute border-top border-end border-2 border-secondary z-3 camera-focus camera-focus-tr"></div>
                                    <div className="position-absolute border-bottom border-start border-2 border-secondary z-3 camera-focus camera-focus-bl"></div>
                                    <div className="position-absolute border-bottom border-end border-2 border-secondary z-3 camera-focus camera-focus-br"></div>

                                    <div className={`card h-100 border-0 rounded-0 p-4 p-xl-5 service-card position-relative overflow-hidden ${
                                            isFeatured 
                                                ? 'bg-black text-light shadow' 
                                                : 'bg-body text-body border border-secondary border-opacity-25'
                                        }`}>
                                        
                                        <div className="position-absolute top-0 end-0 p-4 opacity-10 font-monospace fw-bold display-4 service-number">
                                            {service.number}
                                        </div>

                                        <div className="card-body d-flex flex-column p-0 z-1">
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <span className={`font-monospace small tracking-widest text-uppercase ${isFeatured ? 'text-warning' : 'text-muted'}`}>
                                                    {service.category}
                                                </span>
                                            </div>

                                            <h3 className={`fw-bold mb-3 service-title ${isFeatured ? 'text-white' : ''}`} style={{ fontSize: '1.75rem' }}>
                                                {service.title}
                                            </h3>

                                            <TypingText 
                                                text={service.description}
                                                className={`small line-height-lg mb-4 flex-grow-1 service-description ${isFeatured ? 'text-light opacity-75' : 'text-muted'}`}
                                                delay={0.1}
                                            />

                                            <div className={`small text-decoration-underline mt-2 ${isFeatured ? 'text-warning' : 'text-primary'}`}>
                                                [Click to view details]
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal fade show d-block" 
                        tabIndex="-1" 
                        style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <motion.div 
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="modal-content rounded-2 border border-secondary bg-body text-body shadow-lg"
                            >
                                <div className="modal-header border-bottom border-secondary border-opacity-25">
                                    <div className="font-monospace small text-uppercase opacity-75">
                                        // service-{selectedService.number}
                                    </div>
                                    <button 
                                        type="button" 
                                        className="btn-close shadow-none" 
                                        onClick={() => setSelectedService(null)}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body p-4 p-xl-5">
                                    <span className="font-monospace small text-warning text-uppercase tracking-widest d-block mb-2">
                                        {selectedService.category}
                                    </span>
                                    <h3 className="fw-bold mb-3">{selectedService.title}</h3>
                                    
                                    <TypingText 
                                        text={selectedService.description}
                                        className="text-muted mb-4 service-description"
                                        delay={0.1}
                                    />
                                    
                                    <hr className="border-secondary opacity-25 mb-4" />
                                    
                                    <TypingText 
                                        text={selectedService.details}
                                        className="small mb-0 line-height-lg service-description"
                                        delay={0.3}
                                    />
                                </div>
                                <div className="modal-footer border-top border-secondary border-opacity-25">
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary rounded-pill px-4 btn-sm font-monospace"
                                        onClick={() => setSelectedService(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}