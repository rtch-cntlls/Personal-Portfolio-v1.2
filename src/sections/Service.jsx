import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import ServiceModal from '../components/ServiceModal';

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [liked, setLiked] = useState({});
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

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

    const toggleLike = (number) => {
        setLiked(prev => ({ ...prev, [number]: !prev[number] }));
    };

    return (
        <section id="services" className={`py-5 ${isDarkMode ? 'bg-black text-light' : 'bg-white text-dark'} overflow-hidden`}>
            <div className="container px-2 px-md-5 my-4">
                
                <div className="text-center mb-4">
                    <h4 className="fw-bold mb-2">What I can do for you</h4>
                </div>

                <div className="position-relative d-flex align-items-center justify-content-center carousel-container">
                    <div className="d-flex align-items-center justify-content-center w-100 position-relative carousel-track">
                        <AnimatePresence initial={false}>
                            {servicesData.map((service, index) => {
                                const offset = (index - currentIndex + servicesData.length) % servicesData.length;
                                const isCenter = offset === 0;
                                const isLeft = offset === servicesData.length - 1;
                                const isRight = offset === 1;

                                if (!isCenter && !isLeft && !isRight) return null;

                                return (
                                    <motion.div
                                        key={service.number}
                                        layout
                                        className={`position-absolute px-2 carousel-card-wrapper ${isCenter ? 'center' : 'clickable'}`}
                                        initial={{
                                            scale: 0.7,
                                            opacity: 0,
                                            x: isLeft ? -400 : isRight ? 400 : 0
                                        }}
                                        animate={{
                                            scale: isCenter ? 1 : 0.82,
                                            x: isCenter ? 0 : isLeft ? -320 : 320,
                                            opacity: isCenter ? 1 : 0.4,
                                            filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                                            zIndex: isCenter ? 10 : 1
                                        }}
                                        exit={{
                                            scale: 0.7,
                                            opacity: 0,
                                            filter: 'blur(10px)'
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 26,
                                            mass: 0.8
                                        }}
                                        onClick={() => {
                                            if (isLeft) prevSlide();
                                            else if (isRight) nextSlide();
                                        }} >
                                        <div className={`card ${isDarkMode ? 'bg-black text-light border-3 border-secondary' : 'bg-white text-dark border-light'} rounded-5 shadow-lg position-relative overflow-hidden carousel-card`}>
                                            
                                            <div className={`d-flex justify-content-between align-items-center px-4 pt-3 pb-1 ${isDarkMode ? 'bg-black text-light' : 'bg-white text-dark'} z-3 status-bar-time`}>
                                                <span className="fw-bold">4:04</span>
                                                <div className={`${isDarkMode ? 'bg-light' : 'bg-dark'} rounded-pill position-absolute start-50 translate-middle-x status-bar-notch`}></div>
                                                <div className={`d-flex align-items-center gap-1 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                                                    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="5" width="3" height="6" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
                                                    <svg width="15" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                                    <svg width="22" height="11" viewBox="0 0 25 12" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="1" width="20" height="10" rx="2" /><line x1="23" y1="4" x2="23" y2="8" strokeLinecap="round" /><rect x="3" y="3" width="15" height="6" fill="currentColor" /></svg>
                                                </div>
                                            </div>

                                            <div className={`d-flex align-items-center justify-content-between px-3 py-2 border-bottom ${isDarkMode ? 'border-secondary border-opacity-25' : 'border-light'}`}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="rounded-circle bg-gradient bg-primary text-white d-flex align-items-center justify-content-center fw-bold profile-avatar">
                                                        RC
                                                    </div>
                                                    <div>
                                                        <h6 className={`mb-0 profile-handle text-uppercase ${isDarkMode ? 'text-light' : 'text-dark'}`}>RtchCntlls</h6>
                                                    </div>
                                                </div>
                                                <span className="text-muted fw-bold">&#8230;</span>
                                            </div>

                                            <div 
                                                className={`position-relative p-4 d-flex flex-column justify-content-center align-items-center text-center border-bottom ${isDarkMode ? 'border-secondary border-opacity-25' : 'border-light'} service-hero-header`} 
                                                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(${service.bgImage})` }}>
                                                <h4 className="fw-bold mb-0 text-white service-hero-title">
                                                    {service.title}
                                                </h4>
                                            </div>

                                            <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                                                <div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <button 
                                                                className="btn p-0 border-0 shadow-none bg-transparent" 
                                                                onClick={() => toggleLike(service.number)}
                                                                aria-label="Like post"
                                                            >
                                                                <svg width="22" height="22" viewBox="0 0 24 24" fill={liked[service.number] ? "#dc3545" : "none"} stroke={liked[service.number] ? "#dc3545" : "currentColor"} strokeWidth="2">
                                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                                </svg>
                                                            </button>
                                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                                        </div>
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                    </div>

                                                    <div className="fw-bold mb-1 like-count">
                                                        {liked[service.number] ? (parseInt(service.likes.replace(',', '')) + 1).toLocaleString() : service.likes} likes
                                                    </div>

                                                    <p className={`small mb-2 service-description ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="text-center pb-2">
                                                    <button 
                                                        className={`btn w-100 rounded-pill py-2 fw-bold shadow-sm btn-action ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-white'}`}
                                                        onClick={() => isCenter && setSelectedService(service)}
                                                    >
                                                        {isCenter ? "View Details" : "Focus This Card"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className={`position-absolute bottom-0 start-50 translate-middle-x ${isDarkMode ? 'bg-light' : 'bg-dark'} rounded-pill mb-1 home-indicator`}></div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                    <button className={`btn rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm carousel-nav-btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={prevSlide}>
                        &larr;
                    </button>
                    <div className={`font-monospace fw-bold px-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                        {currentIndex + 1} / {servicesData.length}
                    </div>
                    <button className={`btn rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm carousel-nav-btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={nextSlide}>
                        &rarr;
                    </button>
                </div>
            </div>

            <ServiceModal 
                service={selectedService} 
                onClose={() => setSelectedService(null)} 
            />
        </section>
    );
}