import { expertiseData } from '../../data/expertiseData';
import ExpertiseCard from './ExpertiseCard';
import { useLanguage } from '../../context/LanguageContext';

const Expertise = () => {
    const { t } = useLanguage();
    
    // Get translated expertise data
    const translatedExpertiseData = [
        {
            ...expertiseData[0],
            title: t('about.expertiseData.chatbot.title'),
            description: t('about.expertiseData.chatbot.description'),
            items: t('about.expertiseData.chatbot.items')
        },
        {
            ...expertiseData[1],
            title: t('about.expertiseData.fullstack.title'),
            description: t('about.expertiseData.fullstack.description'),
            items: t('about.expertiseData.fullstack.items')
        }
    ];
    
    return (
        <section className="mt-10 sm:mt-20 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {translatedExpertiseData.map((service, index) => (
                    <ExpertiseCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        items={service.items}
                        iconBgColor={service.iconBgColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default Expertise;