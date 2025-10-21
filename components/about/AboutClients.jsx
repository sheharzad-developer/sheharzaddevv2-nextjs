import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { useLanguage } from '../../context/LanguageContext';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	const { t } = useLanguage();
	const [clients, setClients] = useState(clientsData);

	return (
		<div className="mt-10 sm:mt-20 bg-gray-100 dark:bg-primary-dark py-12 rounded-lg">
			<h2 className="font-general-medium text-2xl sm:text-3xl text-center  dark:text-white mb-12 text-ternary-dark">
				{t('about.clientsTitle') || 'Some of the companies I worked with'}
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center items-center mt-10 sm:mt-14 gap-8">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;