import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import PagesMetaHead from '../../../components/PagesMetaHead';
import Image from 'next/image';
import Link from 'next/link';

// Import project data
import { projectsData } from '../../../data/projectsData';

function Projects() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en/projects');
		}
	}, [lang, router]);

	return (
		<>
			<PagesMetaHead title={t('projects.title', 'Projects')} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
			>
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
						{t('projects.title', 'Projects')}
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{t('projects.subtitle', 'My Recent Work')}
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="glass-card overflow-hidden"
						>
							{/* Project Image */}
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.img}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-300 hover:scale-110"
								/>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech, techIndex) => (
										<span key={techIndex} className="tech-badge">
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="tech-badge">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>

								{/* View Project Button */}
								<Link
									href={`/${lang}/projects/${project.id}`}
									className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
								>
									{t('projects.viewProject', 'View Project')}
									<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</>
	);
}

export default Projects;

// Generate static paths for all supported languages
export async function getStaticPaths() {
	const languages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ'];
	const paths = languages.map((lang) => ({
		params: { lang }
	}));

	return {
		paths,
		fallback: false
	};
}

// Generate static props
export async function getStaticProps({ params }) {
	return {
		props: {
			lang: params.lang
		}
	};
}