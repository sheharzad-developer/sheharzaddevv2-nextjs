import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import ParticlesBackground from '../shared/ParticlesBackground';
import CustomCursor from '../shared/CustomCursor';

import { useLanguage } from '../../context/LanguageContext';

const DefaultLayout = ({ children }) => {
	const { currentLanguage } = useLanguage();

	return (
		<div data-lang={currentLanguage}>
			<ParticlesBackground />
			<CustomCursor />

			<PagesMetaHead />
			<AppHeader />
			<main className="relative z-10 flex-grow">{children}</main>
			<AppFooter />
		</div>
	);
};

export default DefaultLayout;
