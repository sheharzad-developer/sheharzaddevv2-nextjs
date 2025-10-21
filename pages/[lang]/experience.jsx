import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Experience from '../../components/experience/Experience';

function ExperiencePage() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ', 'ar'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en/experience');
		}
	}, [lang, router]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		>
			<Experience />
		</motion.div>
	);
}

export default ExperiencePage;

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