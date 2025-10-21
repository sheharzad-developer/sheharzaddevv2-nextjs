import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Certifications = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to default language route
		router.replace('/en/certifications');
	}, [router]);

	return null; // This page will redirect immediately
};

export default Certifications;
