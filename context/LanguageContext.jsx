import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

// Available languages
const availableLanguages = ['en', 'es', 'fr', 'de', 'ur', 'jp', 'hin', 'chin', 'aus', 'russ'];	

export const LanguageProvider = ({ children }) => {
	const router = useRouter();
	const [currentLanguage, setCurrentLanguage] = useState('en');
	const [translations, setTranslations] = useState({});

	// Load translations when language changes
	useEffect(() => {
		const loadTranslations = async () => {
			try {
				const response = await import(`../data/translations/${currentLanguage}.js`);
				setTranslations(response.default);
			} catch (error) {
				console.error(`Failed to load translations for ${currentLanguage}:`, error);
				// Fallback to English if translation fails
				if (currentLanguage !== 'en') {
					try {
						const fallback = await import('../data/translations/en.js');
						setTranslations(fallback.default);
					} catch (fallbackError) {
						console.error('Failed to load fallback translations:', fallbackError);
					}
				}
			}
		};

		loadTranslations();
	}, [currentLanguage]);

	// Detect language from URL or localStorage on mount
	useEffect(() => {
		const { lang } = router.query;
		
		// If we have a language from URL, use it
		if (lang && availableLanguages.includes(lang)) {
			setCurrentLanguage(lang);
			return;
		}
		
		// If router query is not ready yet, try to extract from pathname
		if (!lang && router.asPath) {
			const pathLang = router.asPath.split('/')[1];
			if (pathLang && availableLanguages.includes(pathLang)) {
				setCurrentLanguage(pathLang);
				return;
			}
		}
		
		// Fallback to localStorage or default
		if (!lang) {
			const savedLanguage = localStorage.getItem('preferred-language');
			if (savedLanguage && availableLanguages.includes(savedLanguage)) {
				setCurrentLanguage(savedLanguage);
			} else {
				setCurrentLanguage('en');
			}
		}
	}, [router.query, router.asPath]);

	// Save language to localStorage when it changes
	useEffect(() => {
		localStorage.setItem('preferred-language', currentLanguage);
	}, [currentLanguage]);

	// Apply language-specific body classes
	useEffect(() => {
		// Remove all language classes
		const allLanguageClasses = availableLanguages.map(lang => `lang-${lang}`);
		document.body.classList.remove(...allLanguageClasses);
		
		// Add current language class
		document.body.classList.add(`lang-${currentLanguage}`);
	}, [currentLanguage]);

	const changeLanguage = (languageCode) => {
		if (!availableLanguages.includes(languageCode)) {
			console.warn(`Language ${languageCode} is not available`);
			return;
		}
		
		setCurrentLanguage(languageCode);
		
		// Update URL with new language
		const currentPath = router.asPath;
		// Create a regex pattern that matches any of the available languages
		const languagePattern = `^/(${availableLanguages.join('|')})(/|$)`;
		const regex = new RegExp(languagePattern);
		const pathWithoutLang = currentPath.replace(regex, '/');
		const newPath = `/${languageCode}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
		
		router.push(newPath, undefined, { shallow: true });
	};

	const t = (key, fallback = key) => {
		const keys = key.split('.');
		let value = translations;
		
		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				return fallback;
			}
		}
		
		// Return the value if it's a string, array, or other valid translation data
		return (typeof value === 'string' || Array.isArray(value) || typeof value === 'object') ? value : fallback;
	};

	const value = {
		currentLanguage,
		changeLanguage,
		t,
		translations
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContext;