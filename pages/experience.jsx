import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Experience() {
	const router = useRouter();

	useEffect(() => {
		router.replace('/en/experience');
	}, [router]);

	return null;
}

export default Experience;