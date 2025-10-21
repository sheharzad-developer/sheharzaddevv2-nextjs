import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const FeaturedProjects = () => {
	const { t, currentLanguage } = useLanguage();

	// Get first 3 projects as featured
	const featuredProjects = projectsData.slice(0, 3);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			viewport={{ once: true }}
			className="relative py-16 sm:py-20 overflow-hidden"
		>
			{/* Glassmorphism Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/40 dark:from-blue-900/20 dark:via-purple-900/15 dark:to-pink-900/20"></div>
			
			{/* Floating Glass Elements */}
			<div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>

			<div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4"
					>
						{t('projects.featuredProjects', 'Featured Projects')}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-lg text-ternary-dark dark:text-ternary-light max-w-2xl mx-auto"
					>
						{t('projects.subtitle', 'Some of my recent work')}
					</motion.p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ ease: 'easeInOut', duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -8 }}
							className="group relative rounded-2xl overflow-hidden"
						>
							{/* Glassmorphism Card Background */}
							<div className="absolute inset-0 bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent rounded-2xl"></div>
							
							{/* Hover Glass Effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
							
							{/* Card Content Container */}
							<div className="glass-card-project">
							
							{/* Project Image */}
							<div className="relative h-56 overflow-hidden">
								<Image
									src={project.img}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								
								{/* Overlay Actions */}
								<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
									{project.link && (
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="glass-button p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-500/80 hover:text-white hover:border-blue-500/50 transition-colors duration-300"
										>
											<FiExternalLink size={20} />
										</a>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="glass-button p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-800/80 hover:text-white hover:border-gray-600/50 transition-colors duration-300"
										>
											<FiGithub size={20} />
										</a>
									)}
								</div>

								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className="glass-button px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 rounded-full transform-none hover:transform-none">
										{project.category || 'Web Development'}
									</span>
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								{project.subtitle && (
									<p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
										{project.subtitle}
									</p>
								)}
								<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.slice(0, 3).map((tech, techIndex) => (
										<span
											key={techIndex}
											className="glass-button px-3 py-1 text-gray-700 dark:text-gray-300 text-xs rounded-full transform-none hover:transform-none"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="glass-button px-3 py-1 text-gray-700 dark:text-gray-300 text-xs rounded-full transform-none hover:transform-none">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>

								{/* View Project Button */}
								<Link
									href={`/${currentLanguage}/projects/${project.id}`}
									className="inline-flex items-center gap-2 w-full justify-center bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-sm border border-blue-400/30 hover:border-blue-500/50 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
								>
									{t('projects.viewProject', 'View Project')}
									<FiArrowRight size={16} />
								</Link>
							</div>

							</div>

						</motion.div>
					))}
				</div>

				{/* View All Projects Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<Link
						href={`/${currentLanguage}/projects`}
						className="glass-button inline-flex items-center gap-2 px-8 py-3 text-gray-800 dark:text-gray-200 rounded-xl font-medium"
					>
						{t('projects.viewAllProjects', 'View All Projects')}
						<FiArrowRight size={18} />
					</Link>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default FeaturedProjects;
