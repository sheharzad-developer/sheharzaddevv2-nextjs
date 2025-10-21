import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Projects = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect to default language route
		router.replace('/en/projects');
	}, [router]);

	return null; // This page will redirect immediately
};

function Index() {
  return null; // This will be handled by the redirect above
}

export default Projects;
