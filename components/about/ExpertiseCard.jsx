const ExpertiseCard = ({ icon, title, description, items, iconBgColor = "bg-primary-dark dark:bg-secondary-dark" }) => {
    return (
        <div className="bg-white dark:bg-ternary-dark p-8 rounded-2xl shadow-lg h-full flex flex-col space-y-4">
            <div className={`dark:bg-ternary-dark w-16 h-16 flex items-center justify-center rounded-2xl mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-400 text-base">{description}</p>
            <ul className="space-y-2 pt-2">
                {Array.isArray(items) ? items.map((item, index) => (
                     <li key={index} className="flex items-center space-x-2">
                         <span className="text-blue-600 dark:text-blue-400">&#x2022;</span>
                         <span className="text-gray-700 dark:text-gray-300">{item}</span>
                     </li>
                 )) : null}
            </ul>
        </div>
    );
};

export default ExpertiseCard;