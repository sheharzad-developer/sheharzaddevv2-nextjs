import Image from 'next/image';

const AboutSkillsClient = ({ title, image }) => {
  return (
    <div className="skill-single">
      <Image src={image} alt={title} width={100} height={100} />
      <h3>{title}</h3>
    </div>
  );
};

export default AboutSkillsClient;
