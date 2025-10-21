import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', level: 98 },
  { name: 'CSS', level: 98 },
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'NuxtJS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Firebase', level: 70 },
  { name: 'ExpressJS', level: 70 },
  { name: 'Figma', level: 70 },
  { name: 'ElectronJS', level: 70 },
  { name: 'Git', level: 70 },
  { name: 'GitHub', level: 70 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'MongoDB', level: 70 },
];

const SkillsProgressBar = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px' });

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div ref={ref} className="mt-8 p-8 rounded-xl shadow-lg relative text-white">
      {/* <h2 className="text-xl font-bold mb-4 text-white">My Skills</h2> */}
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div 
            key={skill.name}
            data-aos="fade-right"
            data-aos-delay={idx * 100}
            data-aos-duration="600"
          >
            <div className="flex justify-between mb-1 text-white">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: inView ? `${skill.level}%` : '0%',
                  transitionDelay: `${idx * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProgressBar; 