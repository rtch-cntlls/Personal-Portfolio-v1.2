import PhilippinesMapImg from '../assets/images/PH.png';
import HelloWorld from '../assets/images/1.png';
import CTU from '../assets/images/2.png';

export const aboutFiles = {
    bio: {
        id: 'bio',
        fileName: 'bio.md',
        title: 'Hello, World.',
        text: "I'm a passionate developer who bridges the gap between creative visual design and robust software engineering. I like building things that live on the web, combining clean user interfaces with efficient logic.",
        image: HelloWorld,
        imageAlt: 'Bio',
        imageMaxHeight: '250px',
        details: [
            { label: 'File type:', value: 'Markdown Document' },
            { label: 'Role:', value: 'Full-Stack Developer & UI/UX Design' },
            { label: 'Status:', value: '● Available for hire / collaboration', statusClass: 'text-success fw-bold' }
        ]
    },
    education: {
        id: 'education',
        fileName: 'education.md',
        title: 'Academic Background.',
        text: "As an Information Technology graduate, I love building my technical skills through hands-on personal projects. I am always exploring new tools to expand what I can create.",
        image: CTU,
        imageAlt: 'CTU',
        imageMaxHeight: '250px',
        details: [
            { label: 'Degree:', value: 'Bachelor of Science in Information Technology' },
            { label: 'Focus:', value: 'Web Development & IT Infrastructure' },
            { label: 'Status:', value: '● Graduate / Lifelong Learner', statusClass: 'text-success fw-bold' }
        ]
    },
    location: {
        id: 'location',
        fileName: 'location.md',
        title: 'Geographic Node.',
        text: "Operating locally from Philippines, with full availability for remote collaboration globally.",
        image: PhilippinesMapImg,
        imageAlt: 'Location Map',
        imageMaxHeight: '200px',
        details: [
            { label: 'Base:', value: 'Philippines' },
            { label: 'Timezone:', value: 'UTC+8 (Philippine Standard Time)' },
            { label: 'Status:', value: '● Active', statusClass: 'text-success fw-bold' }
        ]
    }
};