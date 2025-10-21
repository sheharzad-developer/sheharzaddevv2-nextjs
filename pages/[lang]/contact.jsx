import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import ContactForm from '../../components/contact/ContactForm';
import ContactDetails from '../../components/contact/ContactDetails';
import PagesMetaHead from '../../components/PagesMetaHead';

function Contact() {
	const router = useRouter();
	const { lang } = router.query;
	const { t, currentLanguage } = useLanguage();

	// Redirect if language is not supported
	useEffect(() => {
		const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ', 'ar'];
		if (lang && !availableLanguages.includes(lang)) {
			router.replace('/en/contact');
		}
	}, [lang, router]);

	return (
		<>
			<PagesMetaHead title={t('contact.title', 'Contact')} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="container mx-auto py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
			>
				<div className="lg:grid lg:grid-cols-2 lg:gap-12">
					<div className="mb-10 lg:mb-0">
						<ContactDetails />
					</div>
					<div>
						<ContactForm />
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default Contact;

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