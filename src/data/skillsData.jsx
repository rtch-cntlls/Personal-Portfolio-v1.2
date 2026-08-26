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
    FaLaravel, FaPhp, FaJava, FaCode, FaPaintBrush, FaMobileAlt, FaVideo
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiSupabase, SiMysql, SiPostgresql , SiWebflow, SiCloudflare, SiGithubcopilot
} from 'react-icons/si';

export const TIMELINE_SKILLS = [
    {
        title: "Web Development",
        icon: <FaCode className="text-primary fs-5" />,
        description: "Building responsive, modern, and high-performance web applications with frontend and backend frameworks.",
        tags: ["React", "Next.js", "PHP", "Laravel", "SQL"]
    },
    {
        title: "Web Design",
        icon: <FaPaintBrush className="text-warning fs-5" />,
        description: "Creating clean user interfaces, wireframes, and design systems focused on seamless user experiences.",
        tags: ["Figma", "UI/UX", "Prototyping", "Bootstrap"]
    },
    {
        title: "Responsive Design",
        icon: <FaMobileAlt className="text-success fs-5" />,
        description: "Ensuring web interfaces adapt fluidly across desktop, tablet, and mobile displays with clean CSS structures.",
        tags: ["CSS3", "Flexbox/Grid", "Media Queries"]
    },
    {
        title: "Basic Editing Skills",
        icon: <FaVideo className="text-danger fs-5" />,
        description: "Crafting graphic assets, promotional visuals, and short-form video content for web integration.",
        tags: ["Canva", "CapCut"]
    }
];

export const getToolsUsed = (isDarkMode) => [
    { name: 'HTML5', icon: <FaHtml5 className="text-danger fs-2" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-primary fs-2" /> },
    { name: 'JavaScript', icon: <FaJs className="text-warning fs-2" /> },
    { name: 'React.js', icon: <FaReact className="text-info fs-2" /> },
    { name: 'Next.js', icon: <SiNextdotjs className={`fs-2 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="fs-2 icon-bootstrap" /> },
    { name: 'PHP', icon: <FaPhp className="fs-2 icon-php" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-danger fs-2" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-success fs-2" /> },
    { name: 'MySQL', icon: <SiMysql className="text-primary fs-2" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-info fs-2" /> },
    { name: 'Java', icon: <FaJava className="text-danger fs-2" /> },
    { name: 'C Language', icon: <img src={CIcon} alt="C Icon" className="tool-icon" /> },
    { name: 'Figma', icon: <img src={FigmaIcon} alt="Figma Icon" className="tool-icon" /> },
    { name: 'Canva', icon: <img src={CanvaIcon} alt="Canva Icon" className="tool-icon" /> },
    { 
        name: 'CapCut', 
        icon: <img src={CapcutIcon} alt="CapCut Icon" className={`tool-icon ${isDarkMode ? 'filter-invert' : ''}`} /> 
    },
    { name: 'VS Code', icon: <img src={VSCodeIcon} alt="VS Code Icon" className="tool-icon" /> },
    { name: 'Visual Studio', icon: <img src={VisualStudioIcon} alt="Visual Studio Icon" className="tool-icon" /> },
    { name: 'Git', icon: <FaGitAlt className="text-danger fs-2" /> },
    { name: 'GitHub', icon: <FaGithub className={`fs-2 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> },
    { name: 'Github Copilot', icon: <SiGithubcopilot className="text-dark fs-2" /> },
    { name: 'XAMPP', icon: <img src={XamppIcon} alt="XAMPP Icon" className="tool-icon" /> },
    { 
        name: 'Vercel', 
        icon: <img src={VercelIcon} alt="Vercel Icon" className={`tool-icon ${isDarkMode ? 'filter-invert' : ''}`} /> 
    },
    { 
        name: 'ChatGPT', 
        icon: <img src={GPTIcon} alt="ChatGPT Icon" className={`tool-icon ${isDarkMode ? 'filter-invert' : ''}`} /> 
    },
    { name: 'Gemini', icon: <img src={GeminiIcon} alt="Gemini Icon" className="tool-icon" /> },
    { name: 'Webflow', icon: <SiWebflow className="text-primary fs-2" /> },
    { name: 'Cloudflare', icon: <SiCloudflare className="text-warning fs-2" /> },
];