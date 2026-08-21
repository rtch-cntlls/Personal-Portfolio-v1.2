import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VSCodeIcon from '../assets/icons/VScode.PNG';
import CanvaIcon from '../assets/icons/Canva.PNG';
import CapcutIcon from '../assets/icons/Capcut.png';
import FigmaIcon from '../assets/icons/Figma.PNG';
import CIcon from '../assets/icons/C.PNG';
import VisualStudioIcon from '../assets/icons/VisualStudio.PNG';
import XamppIcon from '../assets/icons/Xampp.PNG';
import VercelIcon from '../assets/icons/Vercel.PNG';
import GPTIcon from '../assets/icons/GPT.PNG';
import GeminiIcon from '../assets/icons/Gemini.PNG';
import { 
    FaReact, FaJs, FaBootstrap, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, 
    FaLaravel, FaPhp, FaJava 
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiSupabase, SiMysql, SiPostgresql 
} from 'react-icons/si';

export default function Skill() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

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

    const skillCategories = {
        frontend: {
            title: 'Frontend',
            skills: [
                { name: 'HTML5', icon: <FaHtml5 className="text-danger fs-3" /> },
                { name: 'CSS3', icon: <FaCss3Alt className="text-primary fs-3" /> },
                { name: 'JavaScript', icon: <FaJs className="text-warning fs-3" /> },
                { name: 'React.js', icon: <FaReact className="text-info fs-3" /> },
                { name: 'Next.js', icon: <SiNextdotjs className={`fs-3 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> },
                { name: 'Bootstrap', icon: <FaBootstrap className="fs-3" style={{ color: '#7952b3' }} /> },
            ]
        },
        backend: {
            title: 'Backend',
            skills: [
                { name: 'PHP', icon: <FaPhp className="fs-3" style={{ color: '#777bb3' }} /> },
                { name: 'Laravel', icon: <FaLaravel className="text-danger fs-3" /> },
                { name: 'Next.js', icon: <SiNextdotjs className={`fs-3 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> },
                { name: 'Supabase', icon: <SiSupabase className="text-success fs-3" /> },
                { name: 'MySQL', icon: <SiMysql className="text-primary fs-3" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-info fs-3" /> },
            ]
        },
        languages: {
            title: 'Languages',
            skills: [
                { name: 'Java', icon: <FaJava className="text-danger fs-3" /> },
                { name: 'C Language', icon: <img src={CIcon} alt="C Language" className="skill-img" style={{ width: '28px', height: '28px' }} /> }
            ]
        },
        designEditing: {
            title: 'Design & Editing',
            skills: [
                { name: 'Figma', icon: <img src={FigmaIcon} alt="Figma" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
                { name: 'Canva', icon: <img src={CanvaIcon} alt="Canva" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
                { 
                    name: 'Capcut', 
                    icon: <img src={CapcutIcon} alt="Capcut" className="skill-img" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
            ]
        },
        tools: {
            title: 'Tools & AI',
            skills: [
                { name: 'VSCode', icon: <img src={VSCodeIcon} alt="VS Code" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
                { name: 'Visual Studio', icon: <img src={VisualStudioIcon} alt="Visual Studio" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
                { name: 'Git', icon: <FaGitAlt className="text-danger fs-3" /> },
                { name: 'GitHub', icon: <FaGithub className={`fs-3 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> },
                { name: 'Xampp', icon: <img src={XamppIcon} alt="Xampp" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
                { 
                    name: 'Vercel', 
                    icon: <img src={VercelIcon} alt="Vercel" className="skill-img" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
                { 
                    name: 'ChatGPT', 
                    icon: <img src={GPTIcon} alt="ChatGPT" className="skill-img" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
                { name: 'Gemini', icon: <img src={GeminiIcon} alt="Gemini" className="skill-img" style={{ width: '28px', height: '28px' }} /> },
            ]
        }
    };

    useEffect(() => {
        if (isPaused) return;

        const categoryKeys = Object.keys(skillCategories);
        const interval = setInterval(() => {
            setActiveCategory((prevCategory) => {
                const currentIndex = categoryKeys.indexOf(prevCategory);
                const nextIndex = (currentIndex + 1) % categoryKeys.length;
                return categoryKeys[nextIndex];
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [isPaused, skillCategories]);

    const currentData = skillCategories[activeCategory] || skillCategories.frontend;

    return (
        <section id="skills" className={`position-relative transition-all py-4 mt-5 ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
            <div className="container px-3 px-md-5">
                <div>
                    <small className="text-uppercase tracking-wider opacity-75 font-monospace">Tech Stack & Tools</small>
                    <h4 className="mb-2 title">My Expertise</h4>
                </div>
                <div 
                    className="row g-4 align-items-start"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)} >
                    
                    <motion.div 
                        className="col-lg-3"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="d-flex flex-column gap-2">
                            {Object.entries(skillCategories).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`btn text-start py-2 px-3 rounded-1 transition-all d-flex justify-content-between align-items-center ${
                                        activeCategory === key 
                                            ? 'btn-custom shadow-sm fw-medium' 
                                            : isDarkMode ? 'btn-outline-secondary text-light' : 'btn-outline-dark text-secondary'
                                    }`} >
                                    <span className='small'>📁 {data.title}</span>
                                    <span className={`badge rounded-pill ${activeCategory === key ? 'bg-white text-dark bg-opacity-75' : isDarkMode ? 'bg-secondary text-dark' : 'bg-secondary text-white'} font-monospace`} style={{ fontSize: '0.7rem' }}>
                                         {data.skills.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="col-lg-9"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="position-relative">
                            
                            <div className={`p-4 d-flex flex-column justify-content-start skill-container position-relative rounded-0 ${isDarkMode ? 'bg-black border border-secondary border-opacity-50 text-light' : 'bg-light border border-dark-subtle text-dark'} shadow-sm`}>
                                
                                <span className="position-absolute resize-handle handle-tl z-4"></span>
                                <span className="position-absolute resize-handle handle-tm z-4"></span>
                                <span className="position-absolute resize-handle handle-tr z-4"></span>
                                <span className="position-absolute resize-handle handle-bl z-4"></span>
                                <span className="position-absolute resize-handle handle-bm z-4"></span>
                                <span className="position-absolute resize-handle handle-br z-4"></span>

                                <div className="row g-3 z-2">
                                    {currentData.skills.map((skill, index) => (
                                        <div className="col-6 col-md-4 col-lg-3" key={index}>
                                            <div 
                                                className={`position-relative p-3 rounded-2 d-flex flex-column align-items-center justify-content-center gap-2 h-100 transition-all ${isDarkMode ? 'bg-dark bg-opacity-25 border border-secondary border-opacity-25' : 'bg-white border border-light-subtle shadow-xs'}`}
                                                style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                {hoveredIndex === index && (
                                                    <>
                                                        <div className={`position-absolute border-top border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tl`} style={{ top: '-4px', left: '-4px', width: '12px', height: '12px' }}></div>
                                                        <div className={`position-absolute border-top border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-tr`} style={{ top: '-4px', right: '-4px', width: '12px', height: '12px' }}></div>
                                                        <div className={`position-absolute border-bottom border-start border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-bl`} style={{ bottom: '-4px', left: '-4px', width: '12px', height: '12px' }}></div>
                                                        <div className={`position-absolute border-bottom border-end border-2 ${isDarkMode ? 'border-light' : 'border-dark'} z-3 camera-focus-br`} style={{ bottom: '-4px', right: '-4px', width: '12px', height: '12px' }}></div>
                                                    </>
                                                )}

                                                <div className="d-flex align-items-center justify-content-center mb-1">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-monospace small text-center opacity-90">{skill.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}