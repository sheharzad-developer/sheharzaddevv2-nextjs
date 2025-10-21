import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to default language route
		router.replace('/en');
	}, [router]);

	return null; // This page will redirect immediately
};

export default Home;
