import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('light');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			setTheme(savedTheme || 'light');
		}
	}, []);

	useEffect(() => {
		if (!mounted) return;

		if (typeof window !== 'undefined') {
			const root = window.document.documentElement;
			const activeTheme = theme === 'dark' ? 'light' : 'dark';

			root.classList.remove(activeTheme);
			root.classList.add(theme);
			localStorage.setItem('theme', theme);
		}
	}, [theme, mounted]);

	if (!mounted) {
		return ['light', () => {}];
	}

	return [theme === 'dark' ? 'light' : 'dark', setTheme];
};

export default useThemeSwitcher;
