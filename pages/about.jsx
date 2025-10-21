import { useEffect } from 'react';
import { useRouter } from 'next/router';

const About = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to default language route
		router.replace('/en/about');
	}, [router]);

	return null; // This page will redirect immediately
};

export default About;
