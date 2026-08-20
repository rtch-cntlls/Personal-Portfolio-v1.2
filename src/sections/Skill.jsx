import { useState, useEffect } from 'react';
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
                { name: 'HTML5', icon: <FaHtml5 className="text-danger" /> },
                { name: 'CSS3', icon: <FaCss3Alt className="text-primary" /> },
                { name: 'JavaScript', icon: <FaJs className="text-warning" /> },
                { name: 'React.js', icon: <FaReact className="text-info" /> },
                { name: 'Next.js', icon: <SiNextdotjs className={isDarkMode ? 'text-light' : 'text-dark'} /> },
                { name: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
            ]
        },
        backend: {
            title: 'Backend',
            skills: [
                { name: 'PHP', icon: <FaPhp style={{ color: '#777bb3' }} /> },
                { name: 'Laravel', icon: <FaLaravel className="text-danger" /> },
                { name: 'Next.js', icon: <SiNextdotjs className={isDarkMode ? 'text-light' : 'text-dark'} /> },
                { name: 'Supabase', icon: <SiSupabase className="text-success" /> },
                { name: 'MySQL', icon: <SiMysql className="text-primary" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-info" /> },
            ]
        },
        languages: {
            title: 'Languages',
            skills: [
                { name: 'Java', icon: <FaJava className="text-danger" /> },
                { name: 'C Language', icon: <img src={CIcon} alt="C Language" className="skill-img" /> }
            ]
        },
        designEditing: {
            title: 'Design & Editing',
            skills: [
                { name: 'Figma', icon: <img src={FigmaIcon} alt="Figma" className="skill-img"/> },
                { name: 'Canva', icon: <img src={CanvaIcon} alt="Canva" className="skill-img"/> },
                { 
                    name: 'Capcut', 
                    icon: <img src={CapcutIcon} alt="Capcut" className="skill-img" style={{ filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
            ]
        },
        tools: {
            title: 'Tools & AI',
            skills: [
                { name: 'VSCode', icon: <img src={VSCodeIcon} alt="VS Code" className="skill-img" /> },
                { name: 'Visual Studio', icon: <img src={VisualStudioIcon} alt="Visual Studio" className="skill-img" /> },
                { name: 'Git', icon: <FaGitAlt className="text-danger" /> },
                { name: 'GitHub', icon: <FaGithub className={isDarkMode ? 'text-light' : 'text-dark'} /> },
                { name: 'Xampp', icon: <img src={XamppIcon} alt="Xampp" className="skill-img" /> },
                { 
                    name: 'Vercel', 
                    icon: <img src={VercelIcon} alt="Vercel" className="skill-img" style={{ filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
                { 
                    name: 'ChatGPT', 
                    icon: <img src={GPTIcon} alt="ChatGPT" className="skill-img" style={{ filter: isDarkMode ? 'brightness(0) invert(1)' : 'none' }} /> 
                },
                { name: 'Gemini', icon: <img src={GeminiIcon} alt="Gemini" className="skill-img" /> },
            ]
        }
    };

    const currentData = skillCategories[activeCategory] || skillCategories.frontend;

    return (
        <section id="skills" className={`position-relative transition-all py-4 ${isDarkMode ? 'bg-black text-light' : 'text-dark'}`}>
            <div className="container px-5">
                
                <h4 className="mb-4 title">My Expertise</h4>

                <div className="row g-4 align-items-start">
                    
                    <div className="col-lg-3">
                        <div className="d-flex flex-column gap-2">
                            {Object.entries(skillCategories).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`btn text-start py-2 px-3 rounded-1 transition-all ${
                                        activeCategory === key 
                                            ? 'btn-custom shadow-sm fw-bold' 
                                            : isDarkMode ? 'btn-outline-secondary text-light' : 'btn-outline-dark text-dark'
                                    }`}
                                >
                                    {data.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="position-relative">
                            
                            <div className={`p-4 d-flex flex-column justify-content-start skill-container position-relative rounded-0 ${isDarkMode ? 'bg-black border border-secondary border-opacity-50 text-light' : 'bg-transparent border border-dark-subtle text-dark'} shadow-sm`}>
                                
                                <span className="position-absolute resize-handle handle-tl z-4"></span>
                                <span className="position-absolute resize-handle handle-tm z-4"></span>
                                <span className="position-absolute resize-handle handle-tr z-4"></span>
                                <span className="position-absolute resize-handle handle-bl z-4"></span>
                                <span className="position-absolute resize-handle handle-bm z-4"></span>
                                <span className="position-absolute resize-handle handle-br z-4"></span>

                                <div className="row g-4 z-2">
                                    {currentData.skills.map((skill, index) => (
                                        <div className="skill-col" key={index}>
                                            <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                                <div className="icon-wrapper">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-monospace small text-center opacity-90">{skill.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}