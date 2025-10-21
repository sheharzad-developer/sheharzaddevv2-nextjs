import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import PagesMetaHead from '../../components/PagesMetaHead';

function Certifications() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ', 'ar'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en/certifications');
		}
	}, [lang, router]);

	return (
		<>
			<PagesMetaHead title={t('certifications.title', 'Certifications')} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
			>
				<div className="text-center mb-12">
					<h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
						{t('certifications.title', 'Certifications')}
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{t('certifications.subtitle', 'My Professional Certifications')}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Computer Programming Certificate */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="100"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64">
							<Image
								src="/images/certifications/one.jpg"
								alt="Programming Certificate"
								fill
								className="object-cover"
							/>
						</div>
						{/* <div className="p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							{t('certifications.computerProgramming', 'Programming Certificate')}
						</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{t('certifications.computerProgrammingDesc', 'Professional certification in programming fundamentals')}
							</p>
						</div> */}
					</motion.div>

					{/* DC Comics Certificate */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="200"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64">
							<Image
								src="/images/certifications/two.jpg"
								alt="Design Certificate"
								fill
								className="object-cover"
							/>
						</div>
						
					</motion.div>

					{/* Python Certificate PDF */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="300"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
							<div className="text-white text-center">
								<div className="text-6xl mb-4">📜</div>
								<h3 className="text-2xl font-bold">Programming</h3>
								<p className="text-lg opacity-90">Certificate</p>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
							{t('certifications.python', 'Python Certificate')}
						</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">
								{t('certifications.pythonDesc', 'Advanced programming certification')}
							</p>
							<a
								href="/images/certifications/Python-Certificate.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
							>
								<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								{t('certifications.downloadPdf', 'Download PDF')}
							</a>
						</div>
					</motion.div>

					{/* Additional Certificate 1 */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="400"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64">
							<Image
								src="/images/certifications/three.jpg"
								alt="Professional Certificate"
								fill
								className="object-cover"
							/>
						</div>
						
					</motion.div>

					{/* Additional Certificate 2 */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="500"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64">
							<Image
								src="/images/certifications/four.jpg"
								alt="Technical Certificate"
								fill
								className="object-cover"
							/>
						</div>
						
					</motion.div>

					{/* Additional Certificate 3 */}
					<motion.div
						data-aos="fade-up"
						data-aos-delay="600"
						className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<div className="relative h-64">
							<Image
								src="/images/certifications/five.jpg"
								alt="Achievement Certificate"
								fill
								className="object-cover"
							/>
						</div>
						
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}

export default Certifications;

// Generate static paths for all supported languages
export async function getStaticPaths() {
	const languages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ', 'ar'];
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