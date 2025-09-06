import React from 'react';
import { ExternalLink, Github, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import heritageRidesImg from '../images/heritagerides.netlify.app_.png';
import shopper69Img from '../images/shopper69.netlify.app_ (5).png';
import coconutvalleyImg from '../images/coconutvalley.in_.png';
import araceliImg from '../images/aracelihospitality.com_ (3).png';
import thergroupImg from '../images/thergroup.in_ (1).png';
import shopphotosImg from '../images/photos.png';
import qrGeneratorImg from '../images/qr.png';
import textToAudioImg from '../images/text.png';
import movieFinderImg from '../images/movie.png';
import vaviworldImg from '../images/vaviworld.in_.png';
const Projects = () => {
  const { ref, inView } = useInView();

  const projects = [
   
    {
      title: 'Heritage Rides',
      description: 'A website for Heritage Rides, showcasing unique travel experiences.',
      image: heritageRidesImg,
      tags: ['React', 'Travel', 'Website'],
      github: '',
      live: 'https://www.heritagerides.in/'
    },
    {
      title: 'Shopper69',
      description: 'An e-commerce platform for a seamless shopping experience.',
      image: shopper69Img,
      tags: ['React', 'E-Commerce', 'Website'],
      github: '',
      live: 'https://shopper69.netlify.app/'
    },
 
    {
      title: 'Shopphotos',
      description: 'An application that allows users to search and download high-quality photos from the Pexels API, providing options to choose image sizes and categories.',
      image: shopphotosImg,
      tags: ['React', 'API', 'Pexels'],
      github: '',
      live: 'https://shopphotos.netlify.app/'
    },
    {
      title: 'QR Generator',
      description: 'A tool to generate QR codes for any text, URL, or custom data input. Users can create, view, and download QR codes instantly.',
      image: qrGeneratorImg,
      tags: ['React', 'Utility', 'QR'],
      github: '',
      live: 'https://yourqr.netlify.app/'
    },
    {
      title: 'TextToAudio',
      description: 'A simple text-to-speech converter that transforms written text into natural-sounding audio. Users can input any text and download the audio output.',
      image: textToAudioImg,
      tags: ['React', 'Text-to-Speech', 'Utility'],
      github: '',
      live: 'https://texudio.netlify.app/'
    },
    {
      title: 'Vaviworld',
      description: 'An engaging website for Vaviworld, showcasing their services and offerings with a modern and user-friendly design.',
      image: vaviworldImg,
      tags: ['React', 'Business', 'Website'],
      github: '',
      live: 'https://vaviworld.in/'
    },
    
    
    {
      title: 'Coconutvalley',
      description: 'A modern website for Coconutvalley, featuring their Property.',
      image: coconutvalleyImg,
      tags: ['React', 'Trends', 'Website'],
      github: '',
      live: 'https://coconutvalley.in/'
    },
    {
      title: 'Araceli Hospitality',
      description: 'Official website for Araceli Hospitality, offering premium hospitality services.',
      image: araceliImg,
      tags: ['React', 'Hospitality', 'Website'],
      github: '',
      live: 'https://aracelihospitality.com/'
    },
    {
      title: 'TheRGroup',
      description: 'Corporate website for The R Group, providing business solutions.',
      image: thergroupImg,
      tags: ['React', 'Business', 'Website'],
      github: '',
      live: 'https://thergroup.in/'
    },
    {
      title: 'MovieFinder',
      description: 'A movie search application that fetches and displays details of movies such as title, release year, rating, and synopsis using an external movies API.',
      image: movieFinderImg,
      tags: ['React', 'API', 'Movies'],
      github: '',
      live: 'https://whymovie.netlify.app/'
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github size={20} className="text-white" />
                      </a>    
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;