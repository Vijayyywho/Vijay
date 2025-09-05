import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Name/Brand */}
          <div className="text-center">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vijay Singh Rajput
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Vijayyywho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-singh-rajput-a41b56245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/viijayyyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 dark:text-slate-400"><rect x="2" y="2" width="16" height="16" rx="5" ry="5"></rect><path d="M15 10.37A4 4 0 1 1 10.37 7 4 4 0 0 1 15 10.37z"></path><line x1="16.5" y1="5.5" x2="16.5" y2="5.5"></line></svg>        
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2024 Vijay Singh Rajput. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;