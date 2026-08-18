import { HiOutlineArrowRight, HiOutlineDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center pt-5 overflow-hidden" >
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 text-lg-start text-center">
                    <div className="head fw-bold">
                        <h1 className="m-0">Hi, I'm</h1>
                    </div>
                    <div className="headline">
                        <h1 className="m-0">Rtch Cntlls</h1>
                    </div>
                    <div className="sub-headline mb-4">
                        <h1 className="m-0 lh-1">
                            <div>
                                <span className="full"><span className='f'>F</span>Ull</span>
                                <span className="stack me-2">stack</span> 
                                <span className="developer">
                                    <span className='d'>D</span>
                                    eveloper
                                </span>
                            </div>
                            <div className="text-lg-end text-center mt-1" style={{ maxWidth: '600px' }}>
                            <span className="and me-1">&</span>
                            <span className="ui">UI/UX</span>
                            <span className='designer'> Designer</span>
                            </div>
                        </h1>
                    </div>

                    <p className="lead text-muted mb-4 mx-auto mx-lg-0" style={{ maxWidth: '540px' }}>
                        I build exceptional, high-performing digital experiences, clean web interfaces, and robust backend systems with modern technologies.
                    </p>

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-4">
                        <a 
                            href="#projects" 
                            className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2 shadow-sm"
                        >
                            View Projects <HiOutlineArrowRight size={18} />
                        </a>
                        <a 
                            href="#contact" 
                            className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 px-4 py-2"
                        >
                            Download CV <HiOutlineDownload size={18} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 text-muted">
                        <span className="small fw-semibold text-uppercase tracking-wider">Follow me:</span>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-5 text-reset">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-5 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fs-5 text-reset">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 text-center">
                    <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                    <div 
                        className="position-absolute top-50 start-50 translate-middle bg-primary opacity-10 rounded-circle"
                        style={{ width: '300px', height: '300px', filter: 'blur(50px)', zIndex: -1 }}
                    ></div>
                    
                    <div className="card border-0 shadow-lg bg-body-tertiary rounded-4 overflow-hidden p-4">
                        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center">
                        <span className="text-muted fw-semibold">Hero Image / Avatar</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}