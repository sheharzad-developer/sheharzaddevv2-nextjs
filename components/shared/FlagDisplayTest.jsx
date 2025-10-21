import { useState, useEffect } from 'react';
import { getFlagDisplayMethod, detectOS, hasEmojiSupportIssues, supportsEmojiFlags } from '../../utils/emojiSupport';

const languages = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
	{ code: 'ur', name: 'اردو', flag: '🇵🇰' },
	{ code: 'jp', name: '日本語', flag: '🇯🇵' },
	{ code: 'hin', name: 'हिन्दी', flag: '🇮🇳' },
	{ code: 'chin', name: '中文', flag: '🇨🇳' },
	{ code: 'aus', name: 'Österreichisches Deutsch', flag: '🇦🇹' },
	{ code: 'russ', name: 'Русский', flag: '🇷🇺' }
];

function FlagDisplayTest() {
	const [flagDisplayMethod, setFlagDisplayMethod] = useState('emoji');
	const [deviceInfo, setDeviceInfo] = useState({});

	useEffect(() => {
		const method = getFlagDisplayMethod();
		setFlagDisplayMethod(method);
		
		setDeviceInfo({
			os: detectOS(),
			hasEmojiIssues: hasEmojiSupportIssues(),
			supportsEmoji: supportsEmojiFlags(),
			userAgent: navigator.userAgent
		});
	}, []);

	const renderFlag = (flag, countryCode) => {
		if (flagDisplayMethod === 'text') {
			return (
				<span className="flag-text-fallback">
					{countryCode}
				</span>
			);
		} else if (flagDisplayMethod === 'image') {
			return (
				<div className="relative">
					<img 
						src={`/images/flags/${countryCode.toLowerCase()}.svg`} 
						alt={`${countryCode} flag`}
						className="flag-image"
						onError={(e) => {
							e.target.style.display = 'none';
							const fallback = e.target.nextElementSibling;
							if (fallback) {
								fallback.style.display = 'inline';
							}
						}}
					/>
					<span className="flag-text-fallback" style={{ display: 'none' }}>
						{countryCode}
					</span>
				</div>
			);
		}
		return (
			<span className="text-xl flag-emoji" role="img" aria-label={countryCode}>
				{flag}
			</span>
		);
	};

	return (
		<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
				Flag Display Test
			</h2>
			
			<div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
				<h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
					Device Information
				</h3>
				<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
					<p><strong>OS:</strong> {deviceInfo.os}</p>
					<p><strong>Display Method:</strong> {flagDisplayMethod}</p>
					<p><strong>Has Emoji Issues:</strong> {deviceInfo.hasEmojiIssues ? 'Yes' : 'No'}</p>
					<p><strong>Supports Emoji:</strong> {deviceInfo.supportsEmoji ? 'Yes' : 'No'}</p>
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{languages.map((language) => (
					<div 
						key={language.code}
						className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div className="mb-2">
							{renderFlag(language.flag, language.code.toUpperCase())}
						</div>
						<span className="text-xs text-center text-gray-600 dark:text-gray-400">
							{language.name}
						</span>
						<span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
							{language.code.toUpperCase()}
						</span>
					</div>
				))}
			</div>

			<div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
				<h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">
					How it works:
				</h3>
				<ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
					<li>• <strong>Emoji:</strong> Uses native emoji flags (best quality)</li>
					<li>• <strong>Image:</strong> Uses SVG flag images (fallback for devices with emoji issues)</li>
					<li>• <strong>Text:</strong> Uses country codes (final fallback)</li>
				</ul>
			</div>
		</div>
	);
}

export default FlagDisplayTest;
