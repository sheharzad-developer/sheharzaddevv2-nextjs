import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import AboutClients from '../../components/about/AboutClients';
import Expertise from '../../components/about/Expertise';
import AboutSkills from '../../components/about/AboutSkills';
import PagesMetaHead from '../../components/PagesMetaHead';

function About() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en/about');
		}
	}, [lang, router]);

	return (
		<>
			<PagesMetaHead title={t('about.title', 'About Me')} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto px-4 sm:px-6 lg:px-8"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full"
			>
				<AboutCounter />
			</motion.div>

			{/** Clients */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto px-4 sm:px-6 lg:px-8"
			>
				<AboutClients />
			</motion.div>

			{/** Expertise */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto px-4 sm:px-6 lg:px-8"
			>
				<Expertise />
			</motion.div>

			{/** Skills */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto px-4 sm:px-6 lg:px-8"
			>
				<AboutSkills />
			</motion.div>
		</>
	);
}

export default About;

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