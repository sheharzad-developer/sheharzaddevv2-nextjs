import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
	const { t } = useLanguage();

	const getColorClasses = (color) => {
		const colorMap = {
			purple: 'bg-purple-500',
			blue: 'bg-blue-500',
			green: 'bg-green-500',
			orange: 'bg-orange-500',
			red: 'bg-red-500',
			indigo: 'bg-indigo-500',
			pink: 'bg-pink-500',
			teal: 'bg-teal-500'
		};
		return colorMap[color] || 'bg-gray-500';
	};

	return (
		<section className="py-8 sm:py-12 lg:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white text-center mx-auto">
						{t('experience.title', 'Work Experience')}
					</h2>
					<p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 dark:text-white px-4 text-center">
						{t('experience.subtitle', 'My professional journey through the years')}
					</p>
				</div>

				<div className="relative">
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-400 h-full"></div>
					<div className="space-y-6 sm:space-y-8 lg:space-y-12">
						{experienceData.map((item, index) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative flex flex-col md:flex-row items-center ${
									index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
								}`}
							>
								<div className="absolute left-1/2 transform -translate-x-1/2 z-10">
									<div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white dark:border-white ${getColorClasses(item.color)}`}></div>
								</div>

								{/* Content card */}
								<div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} px-4 sm:px-0`}>
									<motion.div
										whileHover={{ scale: 1.02 }}
										className="backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-200"
									>
										<div className="flex items-center mb-3 sm:mb-4">
											<span className="text-xl sm:text-2xl mr-2 sm:mr-3">{item.icon}</span>
											<div>
												<h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
													{t(`experience.items.${item.id}.position`, item.position)}
												</h3>
												<p className="text-xs sm:text-sm text-gray-700 dark:text-white">
													{t(`experience.items.${item.id}.company`, item.company)}
												</p>
												{item.location && (
													<p className="text-xs text-gray-600 dark:text-gray-300">
														📍 {item.location}
													</p>
												)}
											</div>
										</div>
										
										<div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
											<span className="inline-block bg-gray-100 dark:bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-white">
												{t(`experience.items.${item.id}.period`, item.period)}
											</span>
											{item.employmentType && (
												<span className="inline-block bg-blue-100 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
													{item.employmentType}
												</span>
											)}
										</div>
										
										<p className="leading-relaxed text-sm sm:text-base text-gray-600 dark:text-white mb-3">
											{t(`experience.items.${item.id}.description`, item.description)}
										</p>
										
										{item.skills && item.skills.length > 0 && (
											<div className="mt-3">
												<p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
													💎 Skills:
												</p>
												<div className="flex flex-wrap gap-1">
													{item.skills.map((skill, skillIndex) => (
														<span 
															key={skillIndex}
															className="inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-700 dark:text-gray-300"
														>
															{skill}
														</span>
													))}
												</div>
											</div>
										)}
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;