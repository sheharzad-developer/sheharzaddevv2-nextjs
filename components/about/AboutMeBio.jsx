import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

function AboutMeBio() {
	const { t } = useLanguage();
	return (
		<div className="block sm:flex sm:gap-6 mt-6 sm:mt-12 items-center justify-center">
			<div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex justify-center" role="img" aria-label="Profile Image Container">
				<Image
					src="/images/profile.jpeg"
					width={350}
					height={350}
					className="rounded-lg"
					alt="Sheharzad Salahuddin's Profile"
					priority={true}
					sizes="(max-width: 768px) 100vw, 33vw"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-2/3 text-left" role="region" aria-label="Biography">
				{t('about.bio') && Array.isArray(t('about.bio')) ? t('about.bio').map((bio, index) => (
					<p
						className="mb-3 text-ternary-dark dark:text-ternary-light text-[19px]"
						key={index}
						lang="en"
					>
						{bio}
					</p>
				)) : (
					<p className="mb-3 text-ternary-dark dark:text-ternary-light text-[19px]">
						Loading biography...
					</p>
				)}
			</div>
		</div>
	);
}

export default AboutMeBio;
