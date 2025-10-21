import { FaBrain, FaRobot, FaCode, FaServer } from 'react-icons/fa';

export const expertiseData = [
    // {
    //     icon: <FaBrain className="text-4xl text-blue-400" />,
    //     title: 'AI Engineering',
    //     description: 'Building intelligent systems that understand, learn, and adapt to user needs.',
    //     items: ['LLM Integration', 'RAG Systems', 'Fine-tuning', 'Vector Databases'],
    // },
    {
        icon: <FaRobot className="text-4xl text-green-400" />,
        title: 'Chatbot Development',
        description: 'Creating conversational interfaces that provide natural, helpful interactions.',
        items: ['LLM', 'Web Chat', 'Multi-modal', 'Context Management'],
    },
    {
        icon: <FaCode className="text-4xl text-violet-400" />,
        title: 'Full Stack Development',
        description: 'Crafting end-to-end web applications with modern frameworks and tools.',
        items: ['React/Next.js', 'Node.js', 'Python', 'Django', 'Typescript'],
        iconBgColor: "bg-primary-dark dark:bg-secondary-dark"
    },
    // {
    //     icon: <FaServer className="text-4xl text-blue-400" />,
    //     title: 'Cloud Architecture',
    //     description: 'Designing scalable, resilient systems on modern cloud platforms.',
    //     items: ['AWS', 'Docker', 'CI/CD', 'Microservices'],
    // },
];