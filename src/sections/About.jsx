import { useState, useEffect } from 'react';
import PhilippinesMapImg from '../assets/images/PH.png';
import HelloWorld from '../assets/images/1.png';
import CTU from '../assets/images/2.png';

export default function About() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeFile, setActiveFile] = useState('bio');

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

    return (
        <section id="about" className={`position-relative transition-all ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
           <div className="container py-4 px-2 px-md-5 position-relative z-2">
                
                <div className={`shadow-sm border border-secondary-subtle ${isDarkMode ? 'bg-black border-secondary text-light' : 'bg-light border-dark text-dark'}`}>
                    
                    <div className={`px-3 py-2 d-flex align-items-center justify-content-between border-bottom ${isDarkMode ? 'bg-dark border-secondary' : 'bg-secondary-subtle border-dark-subtle'}`}>
                        <div className="d-flex align-items-center gap-2">
                            <span className="window-dot bg-danger rounded-circle d-inline-block window-dot-size"></span>
                            <span className="window-dot bg-warning rounded-circle d-inline-block window-dot-size"></span>
                            <span className="window-dot bg-success rounded-circle d-inline-block window-dot-size"></span>
                            <span className="font-monospace small ms-2 text-uppercase opacity-75">About_Me.exe - {activeFile}.md</span>
                        </div>
                    </div>

                    <div className={`path-bar px-3 py-2 border-bottom font-monospace small d-flex align-items-center gap-2 ${isDarkMode ? 'border-secondary bg-black' : 'border-dark-subtle bg-white'}`}>
                        <span className="opacity-50">Path:</span>
                        <span className="badge bg-dark rounded-0 fw-normal">C:/portfolio/about_me/{activeFile}.md</span>
                    </div>

                    <div className="row g-0">
                        
                        <div className={`col-md-3 border-end p-3 font-monospace small ${isDarkMode ? 'border-secondary' : 'border-dark-subtle'}`}>
                            <div className="fw-bold text-uppercase opacity-50 mb-3">Directories</div>
                            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                <li 
                                    onClick={() => setActiveFile('bio')}
                                    className={`p-2 cursor-pointer transition-all ${activeFile === 'bio' ? 'bg-primary bg-opacity-10 border border-secondary rounded text-secondary fw-bold' : 'opacity-75 hover-opacity-100'}`}>
                                    📁 bio.md
                                </li>
                                <li 
                                    onClick={() => setActiveFile('education')}
                                    className={`p-2 cursor-pointer transition-all ${activeFile === 'education' ? 'bg-primary bg-opacity-10 border border-secondary rounded text-secondary fw-bold' : 'opacity-75 hover-opacity-100'}`}>
                                    📁 education.md
                                </li>
                                <li 
                                    onClick={() => setActiveFile('location')}
                                    className={`p-2 cursor-pointer transition-all ${activeFile === 'location' ? 'bg-primary bg-opacity-10 border border-secondary rounded text-secondary fw-bold' : 'opacity-75 hover-opacity-100'}`}>
                                    📁 location.md
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-9 p-4 about-content-area">
                            {activeFile === 'bio' && (
                                <>
                                    <div className="font-monospace mb-2 text-uppercase small opacity-75">// Active File: bio.md</div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <h2 className={`mb-2 fw-bold ${isDarkMode ? 'text-custom ' : 'text-dark '}`}>Hello, World.</h2>
                                            <p className={`lead fs-6 opacity-90 mb-4 ${isDarkMode ? 'text-muted' : 'text-dark'}`}>
                                                I'm a passionate developer who bridges the gap between creative visual design and robust software engineering. 
                                                I like building things that live on the web, combining clean user interfaces with efficient logic.
                                            </p>
                                            <div className="table-responsive">
                                                <table className={`table table-sm font-monospace small ${isDarkMode ? 'table-dark text-light' : ''}`}>
                                                    <tbody>
                                                        <tr><td className="opacity-50 w-25">File type:</td><td>Markdown Document</td></tr>
                                                        <tr><td className="opacity-50">Role:</td><td>Full-Stack Developer & UI/UX Design</td></tr>
                                                        <tr><td className="opacity-50">Status:</td><td><span className="text-success fw-bold">● Available for hire / collaboration</span></td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 text-center mt-4 mt-lg-0">
                                            <div className="position-relative p-3 mx-auto d-inline-block">
                                                <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
                                                <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
                                                <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
                                                <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

                                                <img 
                                                    src={HelloWorld} 
                                                    alt="Bio" 
                                                    className="img-fluid object-fit-contain z-2 position-relative"
                                                    style={{ maxHeight: '250px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeFile === 'education' && (
                                <>
                                    <div className="font-monospace mb-2 text-uppercase small opacity-75">// Active File: education.md</div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <h2 className={`mb-2 fw-bold ${isDarkMode ? 'text-custom ' : 'text-dark '}`}>Academic Background.</h2>
                                            <p className={`lead fs-6 opacity-90 mb-4 ${isDarkMode ? 'text-muted' : 'text-dark'}`}>
                                            As an Information Technology graduate, I love building my technical skills through hands-on personal projects. I am always exploring new tools to expand what I can create.
                                            </p>
                                            <div className="table-responsive">
                                                <table className={`table table-sm font-monospace small ${isDarkMode ? 'table-dark text-light' : ''}`}>
                                                    <tbody>
                                                        <tr><td className="opacity-50 w-25">Degree:</td><td>Bachelor of Science in Information Technology</td></tr>
                                                        <tr><td className="opacity-50">Focus:</td><td>Web Development & IT Infrastructure</td></tr>
                                                        <tr><td className="opacity-50">Status:</td><td><span className="text-success fw-bold">● Graduate / Lifelong Learner</span></td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 text-center mt-4 mt-lg-0">
                                            <div className="position-relative p-3 mx-auto d-inline-block">
                                                <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
                                                <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
                                                <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
                                                <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

                                                <img 
                                                    src={CTU} 
                                                    alt="CTU" 
                                                    className="img-fluid object-fit-contain z-2 position-relative"
                                                    style={{ maxHeight: '250px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeFile === 'location' && (
                                <>
                                    <div className="font-monospace mb-2 text-uppercase small opacity-75">// Active File: location.md</div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <h2 className={`mb-2 fw-bold ${isDarkMode ? 'text-custom ' : 'text-dark '}`}>Geographic Node.</h2>
                                            <p className={`lead fs-6 opacity-90 mb-4 ${isDarkMode ? 'text-muted' : 'text-dark'}`}>
                                                Operating locally from Cebu City, with full availability for remote collaboration globally.
                                            </p>
                                            <div className="table-responsive">
                                                <table className={`table table-sm font-monospace small text-muted ${isDarkMode ? 'table-dark text-light' : ''}`}>
                                                    <tbody>
                                                        <tr><td className="opacity-50 w-25">Base:</td><td>Cebu City, Philippines</td></tr>
                                                        <tr><td className="opacity-50">Timezone:</td><td>UTC+8 (Philippine Standard Time)</td></tr>
                                                        <tr><td className="opacity-50">Status:</td><td><span className="text-success fw-bold">● Active</span></td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 text-center mt-4 mt-lg-0">
                                            <div className="position-relative p-3 mx-auto d-inline-block">
                                                <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`}></div>
                                                <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`}></div>
                                                <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`}></div>
                                                <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`}></div>

                                                <img 
                                                    src={PhilippinesMapImg} 
                                                    alt="Location Map" 
                                                    className="img-fluid object-fit-contain z-2 position-relative"
                                                    style={{ maxHeight: '200px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}