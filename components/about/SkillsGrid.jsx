import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../context/LanguageContext';

const techStack = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", category: "Backend", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "OpenAI", category: "AI", icon: <SiOpenai className="text-green-400" /> },
  { name: "LLM", category: "AI", icon: <TbBrain className="text-purple-500" /> },
  { name: "Chatbot Development", category: "AI", icon: <TbMessageChatbot className="text-blue-400" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "GitHub", category: "DevOps", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Django", category: "Backend", icon: <SiDjango className="text-black dark:text-white" /> },
  { name: "Firebase", category: "Database", icon: <SiFirebase className="text-orange-500" /> },
];

const SkillsGrid = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    rootMargin: '-50px 0px' 
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), 200);
    }
  }, [inView]);

  return (
    <div 
      ref={ref}
      className={`bg-primary-light dark:bg-secondary-dark p-8 rounded-3xl shadow-lg font-general-medium transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      <h3 className={`text-2xl font-bold text-center text-primary-dark dark:text-ternary-light mb-8 transition-all duration-500 delay-300 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        {t('about.skillsTitle') || 'I Work With'}
      </h3>
      
      {/* Skills Slider Container */}
      <div className={`skills-slider-container transition-all duration-700 delay-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="skills-slider">
          {/* First set of skills */}
          {techStack.map((tech, index) => (
            <div 
              key={`${tech.name}-1`}
              className="skill-item"
            >
              <div className="bg-secondary-light dark:bg-secondary-dark w-20 h-20 flex items-center justify-center rounded-2xl text-4xl mb-2 shadow-lg transition-all duration-400">
                {tech.icon}
              </div>
              <h4 className="font-bold text-primary-dark dark:text-ternary-light text-center text-sm">
                {tech.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {tech.category}
              </p>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {techStack.map((tech, index) => (
            <div 
              key={`${tech.name}-2`}
              className="skill-item"
            >
              <div className="bg-secondary-light dark:bg-secondary-dark w-20 h-20 flex items-center justify-center rounded-2xl text-4xl mb-2 shadow-lg transition-all duration-400">
                {tech.icon}
              </div>
              <h4 className="font-bold text-primary-dark dark:text-ternary-light text-center text-sm">
                {tech.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;