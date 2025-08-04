import React from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate frontend developer with a keen eye for design and a love for creating
                seamless user experiences. My journey in web development began with a fascination for
                how code can transform into beautiful, interactive interfaces.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Specializing in{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> and{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>, I focus on
                building scalable, performant applications that not only look great but also provide
                exceptional user experiences.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  What I Do
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Modern React & Next.js Development</li>
                  <li>• Responsive Web Design</li>
                  <li>• Performance Optimization</li>
                  <li>• API Integration</li>
                  <li>• Component Library Development</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  My Approach
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I believe in writing clean, maintainable code that follows best practices. Every project
                  is an opportunity to learn and grow, and I'm always excited about new challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;