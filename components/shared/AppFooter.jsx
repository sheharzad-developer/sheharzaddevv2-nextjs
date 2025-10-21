import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiYoutube,
} from 'react-icons/fi';

const socialLinks = [

	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/sheharzad-developer/',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://twitter.com/sheharzad_sala1',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/sheharzad-salahuddin/',
	},
	{
		id: 4,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/channel/UCTYt7upl1YwBwdxGb8lmQwg',
	},
];

const AppFooter = () => {
	return (
		<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<div className="font-general-regular flex flex-col items-center justify-center gap-6">
				<ul className="flex gap-4">
					{socialLinks.map((link) => (
						<a
							href={link.url}
							target="__blank"
							key={link.id}
							className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
						>
							<i className="text-xl sm:text-2xl md:text-3xl">
								{link.icon}
							</i>
						</a>
					))}
				</ul>
				<div className="text-lg text-ternary-dark dark:text-ternary-light text-center">
					&copy; {new Date().getFullYear()}
					<a
						href="https://stoman.me"
						target="__blank"
						className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					>
						Sheharzad Salahuddin
					</a>
					.
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
