import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to default language route
		router.replace('/en/contact');
	}, [router]);

	return null; // This page will redirect immediately
};

export default Contact;
