export default function Services() {
    const services = [
        {
            number: "01",
            title: "Static Website",
            category: "Development & Delivery",
            description: "Lightning-fast, ultra-secure landing pages and portfolios built with modern technologies tailored for optimal conversion.",
        },
        {
            number: "02",
            title: "Dynamic Website",
            category: "FullStack Architecture",
            description: "Interactive web applications featuring real-time database integration, secure user authentication, and seamless third-party APIs.",
        },
        {
            number: "03",
            title: "Deployment & Maintenance",
            category: "Infrastructure & Ops",
            description: "Robust CI/CD pipelines, cloud hosting setup, continuous security updates, and 24/7 performance monitoring.",
        },
        {
            number: "04",
            title: "UI/UX & Optimization",
            category: "Design & Refinement",
            description: "Performance tuning, SEO enhancements, and bespoke responsive design to keep your digital products running at top speed.",
        }
    ];

    return (
        <section id="services">
            <div className="container px-5 mt-4 mb-3">
                <div className="mb-4">
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Services Offer</small>
                    <h4 className="mb-2 title">What I Do</h4>
                </div>

                <div className="row g-4">
                    {services.map((service, index) => {
                        const isFeatured = index === 0 || index === 3;
                        
                        return (
                            <div className={isFeatured ? "col-lg-7" : "col-lg-5"} key={index}>
                                <div className={`card h-100 border-0 rounded-0 p-4 p-xl-5 transition-all position-relative overflow-hidden ${
                                        isFeatured 
                                            ? 'bg-black text-light shadow' 
                                            : 'bg-body text-body border border-secondary border-opacity-25'
                                    }`}>
                                    
                                    <div className="position-absolute top-0 end-0 p-4 opacity-10 font-monospace fw-bold display-4" style={{ lineHeight: 1 }}>
                                        {service.number}
                                    </div>

                                    <div className="card-body d-flex flex-column p-0 z-1">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <span className={`font-monospace small tracking-widest text-uppercase ${isFeatured ? 'text-warning' : 'text-muted'}`}>
                                                {service.category}
                                            </span>
                                        </div>

                                        <h3 className={`fw-bold mb-3 ${isFeatured ? 'text-white' : 'text-dark'}`} style={{ fontSize: '1.75rem' }}>
                                            {service.title}
                                        </h3>

                                        <p className={`small line-height-lg mb-4 flex-grow-1 ${isFeatured ? 'text-light opacity-75' : 'text-muted'}`}>
                                            {service.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}