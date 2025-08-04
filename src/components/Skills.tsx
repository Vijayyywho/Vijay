import React from 'react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const { ref, inView } = useInView();

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Figma', level: 75 }
  ];

  const tools = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS3', 'HTML5',
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'VS Code',
    'Figma', 'Adobe XD', 'Webpack', 'Vite', 'Jest', 'React Testing Library'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;