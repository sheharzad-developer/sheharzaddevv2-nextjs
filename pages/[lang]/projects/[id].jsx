import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../../context/LanguageContext';
import PagesMetaHead from '../../../components/PagesMetaHead';

// Import project data from the existing projects file
const projects = [
  {
    id: 1,
    title: "Apartment Design Tool",
    subtitle: "Interactive Floor Plan & 3D Visualization Platform",
    img: "/images/Apartment-Planner.png",
    link: "https://apartment-design-tool.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/apartment-design-tool",
    description: "A comprehensive apartment design platform that allows users to create stunning floor plans, visualize designs in 3D, and bring apartment ideas to life. Features an intuitive planning tool with AI-powered auto-generation capabilities for efficient space planning and design visualization.",
    technologies: [
      "React.js",
      "Three.js",
      "WebGL",
      "Canvas API",
      "AI/ML",
      "3D Rendering",
      "Floor Plan Editor",
      "Real-time Visualization",
      "Auto Generation",
      "Responsive Design"
    ],
    features: [
      "Interactive floor plan editor with drag-and-drop functionality",
      "Real-time 3D visualization with walk-through views",
      "AI-powered auto-generation of floor plans based on requirements",
      "Intuitive user interface for easy design creation",
      "Professional-grade rendering engine for realistic visualizations",
      "Export capabilities for floor plans and 3D models",
      "Collaborative design features for team projects",
      "Mobile-responsive design for on-the-go planning"
    ],
    category: "Design Tools",
    status: "completed",
    year: "2024"
  },
  {
    id: 2,
    title: "ChatSmart AI",
    img: "/images/ChatSmart-AI.png",
    link: "https://github.com/sheharzad-developer/chatsmart-ai",
    description: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5. The platform features a modern, responsive design with smooth animations and interactive elements.",
    technologies: ["Python", "Streamlit", "Google AI", "LangChain", "Machine Learning", "RAG", "FAISS", "HuggingFace", "Google Gemini 1.5"],
    category: "AI/ML",
    status: "completed",
    year: "2024"
  },
  {
    id: 3,
    title: "Card Click and Play",
    img: "/images/Card-and-Click:Play.png",
    link: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
    description: "Interactive superhero card game with dynamic gameplay and engaging user interface. The game features a modern, responsive design with smooth animations and interactive elements.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Development", "DOM Manipulation", "Responsive Design", "Game Mechanics"],
    category: "Game Development",
    status: "completed",
    year: "2024"
  },
  {
    id: 4,
    title: "Exploding Text on Scroll",
    img: "/images/WebPage.png",
    link: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    description: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions",
    technologies: ["JavaScript", "Matter.js", "CSS3", "Animation", "Physics Engine", "Scroll Effects"],
    category: "Animation",
    status: "completed",
    year: "2024"
  },
  {
    id: 5,
    title: "Netsol Website",
    img: "/images/Netsoltech.png",
    link: "https://netsoltech.com/",
    description: "Professional corporate website with modern design and optimized user experience",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX", "NuxtJS"],
    category: "Corporate",
    status: "completed",
    year: "2024"
  },
  {
    id: 6,
    title: "Dental Syndicate",
    subtitle: "Family Dental Care Website",
    description: "A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications.",
    img: "/projects/developer-dark.png",
    technologies: [
      "Python Flask",
      "HTML5",
      "CSS3 (Glassmorphism)",
      "JavaScript",
      "SVG Design",
      "Vercel",
      "SMS API",
      "WhatsApp API",
      "NuxtJS"
    ],
    features: [
      "Revolutionary glassmorphism contact page with floating particles",
      "Family-centered custom SVG logo design",
      "Real-time appointment booking system",
      "SMS/WhatsApp notification integration",
      "Advanced CSS animations and backdrop blur effects",
      "Responsive mobile-first design"
    ],
    link: "https://dental-syndicate.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/dental-syndicate",
    category: "Healthcare",
    status: "completed",
    year: "2025"
  },
  {
    id: 7,
    title: "Daggys Cafe",
    subtitle: "Macro-Counted Meal Delivery",
    description: "A modern food delivery platform specializing in delicious, macro-counted meals delivered right to your doorstep.",
    img: "/projects/daggys-cafe.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
      "Supabase",
      "Stripe",
      "Socket.io",
      "Google Genkit",
      "Turbopack",
      "Class Variance Authority",
      "Next Auth"
    ],
    features: [
      "Comprehensive menu with detailed macro nutritional information",
      "Modern responsive UI optimized for food delivery experience",
      "Health-conscious meal options for all dietary preferences",
      "User-friendly interface for easy navigation and ordering",
      "Secure payment gateway integration for safe transactions",
      "Real-time order tracking and notification system",
      "Customer feedback system for continuous improvement",
      "Responsive design for seamless experience on all devices",
      "Macro-counted meal delivery for healthier choices"
    ],
    link: "https://daggys-cafe.vercel.app/",
    githubUrl: "https://github.com/sheharzad-developer/daggys-cafe",
    category: "Healthcare",
    status: "completed",
    year: "2025"
  },
  {
    id: 8,
    title: "AI Chatbot Platform",
    subtitle: "Multi-Tenant Tool-Aware Chatbot",
    description: "A sophisticated AI chatbot platform with multi-agent support, featuring Google Gemini, Groq, DeepSeek, and Google AI integration.",
    img: "/projects/chatbot2025.png",
    technologies: [
      "FastAPI",
      "Python",
      "JavaScript",
      "HTML/CSS",
      "Google Generative AI",
      "Groq API",
      "DeepSeek API",
      "LangChain",
      "MongoDB",
      "Vercel",
      "Docker",
      "Pydantic",
      "Uvicorn",
      "HTTPX",
      "Langfuse"
    ],
    features: [
      "Multi-agent AI support (Google Gemini, Groq, DeepSeek, Google AI)",
      "Tool-aware agents with MCP (Model Context Protocol) integration",
      "Multi-tenant architecture with secure tenant isolation",
      "Real-time chat interface with markdown support",
      "RAG (Retrieval-Augmented Generation) document system",
      "Comprehensive chat history and session management",
      "RESTful API with FastAPI and automatic documentation",
      "Responsive web interface optimized for all devices",
      "Environment-aware deployment (local and cloud)",
      "Advanced error handling and monitoring with Langfuse",
      "Serverless deployment optimized for Vercel",
      "Security features with API key encryption and tenant separation"
    ],
    link: "https://github.com/sheharzad-developer/Chatbot_Internship",
    githubUrl: "https://github.com/sheharzad-developer/Chatbot_Internship",
    category: "AI/Machine Learning",
    status: "completed",
    year: "2025"
  }
];

function ProjectSingle() {
	const router = useRouter();
	const { lang, id } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Find the project by ID
	const project = projects.find(p => p.id === parseInt(id));

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace(`/en/projects/${id}`);
		}
	}, [lang, id, router]);

	// Redirect if project not found
	useEffect(() => {
		if (id && !project) {
			router.replace(`/${lang}/projects`);
		}
	}, [id, project, lang, router]);

	if (!project) {
		return null;
	}

	return (
		<>
			<PagesMetaHead title={project.title} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
			>
				{/* Back Button */}
				<div className="mb-8">
					<Link
						href={`/${lang}/projects`}
						className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						{t('common.back', 'Back to Projects')}
					</Link>
				</div>

				{/* Project Header */}
				<div className="mb-12">
					<h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
						{project.title}
					</h1>
					{project.subtitle && (
						<h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
							{project.subtitle}
						</h2>
					)}
					<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
						{project.description}
					</p>
				</div>

				{/* Project Image */}
				<div className="mb-12">
					<div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
						<Image
							src={project.img}
							alt={project.title}
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Project Details Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
					{/* Technologies */}
					<div>
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
							{t('projects.technologies', 'Technologies Used')}
						</h3>
						<div className="flex flex-wrap gap-3">
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Project Info */}
					<div>
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
							{t('projects.projectInfo', 'Project Information')}
						</h3>
						<div className="space-y-4">
							<div>
								<span className="font-semibold text-gray-700 dark:text-gray-300">
									{t('projects.category', 'Category')}: 
								</span>
								<span className="text-gray-600 dark:text-gray-400">{project.category}</span>
							</div>
							<div>
								<span className="font-semibold text-gray-700 dark:text-gray-300">
									{t('projects.year', 'Year')}: 
								</span>
								<span className="text-gray-600 dark:text-gray-400">{project.year}</span>
							</div>
							<div>
								<span className="font-semibold text-gray-700 dark:text-gray-300">
									{t('projects.status', 'Status')}: 
								</span>
								<span className="text-green-600 dark:text-green-400 capitalize">{project.status}</span>
							</div>
						</div>
					</div>
				</div>

				{/* Features */}
				{project.features && (
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
							{t('projects.features', 'Key Features')}
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{project.features.map((feature, index) => (
								<div key={index} className="flex items-start space-x-3">
									<div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
									<p className="text-gray-600 dark:text-gray-300">{feature}</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Action Buttons */}
				<div className="flex flex-wrap gap-4">
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
							{t('projects.liveDemo', 'Live Demo')}
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200 font-medium"
						>
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
							</svg>
							{t('projects.viewCode', 'View Code')}
						</a>
					)}
				</div>
			</motion.div>
		</>
	);
}

export default ProjectSingle;

// Generate static paths for all supported languages and projects
export async function getStaticPaths() {
	const languages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus'];
	const paths = [];

	// Generate paths for each language and project combination
	languages.forEach(lang => {
		projects.forEach(project => {
			paths.push({
				params: { 
					lang, 
					id: project.id.toString() 
				}
			});
		});
	});

	return {
		paths,
		fallback: false
	};
}

// Generate static props
export async function getStaticProps({ params }) {
	return {
		props: {
			lang: params.lang,
			id: params.id
		}
	};
}