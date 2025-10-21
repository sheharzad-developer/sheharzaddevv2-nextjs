import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="relative w-48 h-24 flex items-center justify-center">
			<div className="absolute inset-0 dark:bg-ternary-dark rounded-lg" style={{ width: '100%', height: '100%', margin: 'auto' }}></div>
			<div className="relative z-10 w-24 h-24 flex items-center justify-center">
				<Image
					src={image}
					alt={title}
					width={80}
					height={80}
					className="object-contain"
				/>
			</div>
		</div>
	);
}

export default AboutClientSingle;