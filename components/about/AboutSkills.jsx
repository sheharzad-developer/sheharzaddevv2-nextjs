import SkillsGrid from './SkillsGrid';
import SkillsProgressBarGrid from './SkillsProgressBarGrid';

function AboutSkills() {
	return (
		<div className="mt-10 sm:mt-20 space-y-20">
			<SkillsProgressBarGrid />
			<SkillsGrid />
		</div>
	);
}

export default AboutSkills;
