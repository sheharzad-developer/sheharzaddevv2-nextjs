import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProjectSingle = () => {
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (id) {
			// Redirect to default language route with project id
			router.replace(`/en/projects/${id}`);
		}
	}, [router, id]);

	return null; // This page will redirect immediately
};

export default ProjectSingle
