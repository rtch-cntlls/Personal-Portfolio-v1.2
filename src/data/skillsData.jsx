import VSCodeIcon from '../assets/icons/VScode.PNG';
import CanvaIcon from '../assets/icons/Canva.PNG';
import CapcutIcon from '../assets/icons/Capcut.png';
import FigmaIcon from '../assets/icons/Figma.PNG';
import CIcon from '../assets/icons/C.PNG';
import VisualStudioIcon from '../assets/icons/VisualStudio.PNG';
import VercelIcon from '../assets/icons/Vercel.PNG';
import GPTIcon from '../assets/icons/GPT.PNG';
import GeminiIcon from '../assets/icons/Gemini.PNG';

import SampleWebsiteImg from '../assets/images/development.png';
import DesignBgImg from '../assets/images/wireframe.png';
import ResponsiveMockupImg from '../assets/images/responsive.png';
import EditSample1 from '../assets/icons/Capcut.png';
import EditSample2 from '../assets/icons/Canva.PNG';

import { 
    FaReact, FaJs, FaBootstrap, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, 
    FaLaravel, FaPhp, FaJava, FaCode, FaPaintBrush, FaMobileAlt, FaVideo
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiSupabase, SiMysql, SiPostgresql, SiWebflow, SiCloudflare, SiGithubcopilot
} from 'react-icons/si';

export const TIMELINE_SKILLS = [
    {
        title: "Web Development",
        icon: <FaCode className="text-primary fs-5" />,
        description: "Building responsive, modern, and high-performance web applications with frontend and backend frameworks.",
        tags: ["React", "Next.js", "PHP", "Laravel", "SQL"],
        previewImage: SampleWebsiteImg
    },
    {
        title: "Web Design",
        icon: <FaPaintBrush className="text-warning fs-5" />,
        description: "Creating clean user interfaces, wireframes, and design systems focused on seamless user experiences.",
        tags: ["Figma", "UI/UX", "Prototyping", "Bootstrap"],
        bgImage: DesignBgImg
    },
    {
        title: "Responsive Design",
        icon: <FaMobileAlt className="text-success fs-5" />,
        description: "Ensuring web interfaces adapt fluidly across desktop, tablet, and mobile displays with clean CSS structures.",
        tags: ["CSS3", "Flexbox/Grid", "Media Queries"],
        overlapImage: ResponsiveMockupImg
    },
    {
        title: "Basic Editing Skills",
        icon: <FaVideo className="text-danger fs-5" />,
        description: "Crafting graphic assets, promotional visuals, and short-form video content for web integration.",
        tags: ["Canva", "CapCut"],
        scatterImages: [
            { src: EditSample1, invertInDarkMode: true },
            { src: EditSample2, invertInDarkMode: false }
        ]
    }
];

export const getToolsUsed = () => [
    { name: "HTML5", icon: <FaHtml5 className="text-danger fs-1" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-primary fs-1" /> },
    { name: "JavaScript", icon: <FaJs className="text-warning fs-1" /> },
    { name: "React", icon: <FaReact className="text-info fs-1" /> },
    { name: "Next.js", icon: <SiNextdotjs className="fs-1 theme-adaptive-icon" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="fs-1 icon-bootstrap" /> },
    { name: "PHP", icon: <FaPhp className="fs-1 icon-php" /> },
    { name: "Laravel", icon: <FaLaravel className="text-danger fs-1" /> },
    { name: "Supabase", icon: <SiSupabase className="text-success fs-1" /> },
    { name: "MySQL", icon: <SiMysql className="text-primary fs-1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-info fs-1" /> },
    { name: "Java", icon: <FaJava className="text-danger fs-1" /> },
    { name: "C", icon: <img src={CIcon} alt="C Icon" className="tool-icon" /> },
    { name: "Figma", icon: <img src={FigmaIcon} alt="Figma Icon" className="tool-icon" /> },
    { name: "Canva", icon: <img src={CanvaIcon} alt="Canva Icon" className="tool-icon" /> },
    { name: "CapCut", icon: <img src={CapcutIcon} alt="CapCut Icon" className="tool-icon theme-adaptive-icon" /> },
    { name: "VS Code", icon: <img src={VSCodeIcon} alt="VS Code Icon" className="tool-icon" /> },
    { name: "Visual Studio", icon: <img src={VisualStudioIcon} alt="Visual Studio Icon" className="tool-icon" /> },
    { name: "Git", icon: <FaGitAlt className="text-danger fs-1" /> },
    { name: "GitHub", icon: <FaGithub className="fs-1 theme-adaptive-icon" /> },
    { name: "GitHub Copilot", icon: <SiGithubcopilot className="fs-1 theme-adaptive-icon" /> },
    { name: "Vercel", icon: <img src={VercelIcon} alt="Vercel Icon" className="tool-icon theme-adaptive-icon" /> },
    { name: "ChatGPT", icon: <img src={GPTIcon} alt="ChatGPT Icon" className="tool-icon theme-adaptive-icon" /> },
    { name: "Gemini", icon: <img src={GeminiIcon} alt="Gemini Icon" className="tool-icon" /> },
    { name: "Webflow", icon: <SiWebflow className="text-primary fs-1" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-warning fs-1" /> },
];