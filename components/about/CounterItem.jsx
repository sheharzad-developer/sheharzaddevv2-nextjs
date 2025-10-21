const CounterItem = ({ title, counter, measurement }) => {
	return (
		<div className="mb-6 sm:mb-0">
			<h2 className="text-2xl sm:text-3xl text-center text-secondary-dark dark:text-secondary-light mb-1">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-sm sm:text-base text-center text-ternary-dark dark:text-ternary-light">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;
