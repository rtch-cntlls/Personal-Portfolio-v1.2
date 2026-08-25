import ProjectImg1 from '../assets/project/e-commerce/1.png'; 
import ProjectImg2 from '../assets/project/nces/1.PNG';
import ProjectImg3 from '../assets/project/erent/1.PNG';

export const projects = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    image: ProjectImg1,
    description: 'Motorcycle Parts E-commerce & Services Management System',
    longDescription: 'A full-featured e-commerce platform built for motorcycle parts and services. It handles inventory management, secure checkout flows, service booking appointments, and a dedicated admin dashboard.',
    liveLink: 'https://example.com',
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
  },
  {
    id: 'proj-2',
    title: 'Web App',
    image: ProjectImg2,
    description: 'Student Record Management System',
    longDescription: 'A streamlined web application designed to track and organize student records, grades, and attendance metrics efficiently with role-based access controls.',
    liveLink: '',
    techStack: ['React', 'Firebase', 'Bootstrap', 'Framer Motion'],
  },
  {
    id: 'proj-3',
    title: 'Rental Platform',
    image: ProjectImg3,
    description: 'Property Rental Platform Management System',
    longDescription: 'An end-to-end property rental management tool connecting property owners and tenants with integrated listing filters, scheduling features, and booking status tracking.',
    liveLink: 'https://example.com',
    techStack: ['Vue.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
];