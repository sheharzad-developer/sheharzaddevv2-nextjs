import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { useLanguage } from '../../context/LanguageContext';

const AboutCounter = () => {
	const { t } = useLanguage();
	
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 3 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<div className="mt-6 sm:mt-12 bg-primary-light dark:bg-ternary-dark shadow-sm w-full">
			<div className="font-general-medium w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-16 xl:px-24 block sm:flex sm:justify-between items-center">
				<CounterItem
					title={t('about.counter.yearsExperience')}
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title={t('about.counter.starsGithub')}
					counter={<span id="githubStarsCounter" />}
					measurement="k+"
				/>

				<CounterItem
					title={t('about.counter.positiveFeedback')}
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title={t('about.counter.projectsCompleted')}
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
