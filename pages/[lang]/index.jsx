import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AppBanner from '../../components/shared/AppBanner';
import FeaturedProjects from '../../components/projects/FeaturedProjects';
import PagesMetaHead from '../../components/PagesMetaHead';

function Home() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ', 'ar'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en');
		}
	}, [lang, router]);

	return (
			<>
				<PagesMetaHead title="Sheharzad Salahuddin - Full Stack Developer & AI Enthusiast" />

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
					className="container mx-auto px-4 sm:px-6 lg:px-8"
				>
					<AppBanner />
				</motion.div>

				<FeaturedProjects />
			</>
		);
}

export default Home;

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