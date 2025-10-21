// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
//   FaGithub
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiNextdotjs,
//   SiNuxtdotjs,
//   SiTypescript,
//   SiFirebase,
//   SiExpress,
//   SiFigma,
//   SiElectron,
//   SiPostgresql,
//   SiMongodb,
//   SiPython
// } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skillsData = [
  { name: "AI Integration", level: 95, color: "bg-blue-500" },
  { name: "Chatbot Development", level: 92, color: "bg-purple-500" },
  // { name: "Database Design", level: 88, color: "bg-green-500" },
  { name: "Full Stack Development", level: 90, color: "bg-green-500" },
  // { name: "Cloud Architecture", level: 85, color: "bg-blue-500" }, 
  { name: "UI/UX Design", level: 80, color: "bg-purple-500" },
];

const SkillsProgressBarGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px' });
  const [animatedBars, setAnimatedBars] = useState([]);

  useEffect(() => {
    if (inView) {
      // Auto-animate progress bars one by one
      skillsData.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedBars(prev => [...prev, index]);
        }, index * 300);
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-primary-light dark:bg-ternary-dark p-8 rounded-3xl shadow-lg font-general-medium">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skillsData.map((skill, index) => (
          <div 
            key={skill.name}
            className="transform transition-all duration-500 ease-out"
            style={{
              opacity: animatedBars.includes(index) ? 1 : 0,
              transform: animatedBars.includes(index) ? 'translateX(0)' : 'translateX(-50px)'
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-primary-dark dark:text-ternary-light">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-secondary-dark rounded-full h-3 overflow-hidden relative">
              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-2000 ease-out relative`}
                style={{ 
                  width: animatedBars.includes(index) ? `${skill.level}%` : '0%',
                  transitionDelay: '200ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProgressBarGrid; 
