import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                  Let's work together
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a
                  question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-white font-medium">Email</p>
                    <p className="text-slate-600 dark:text-slate-300">vijayyywho@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Phone className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-white font-medium">Phone</p>
                    <p className="text-slate-600 dark:text-slate-300">8208785545</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-800 dark:text-white font-medium">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">Palghar</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  Follow me on
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Vijayyywho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="text-slate-700 dark:text-slate-300" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vijay-singh-rajput-a41b56245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="text-slate-700 dark:text-slate-300" size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/viijayyyy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    {/* You may want to use an Instagram SVG or icon here */}
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-300"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
              <form
                action="https://formspree.io/f/xzzvalqv" // TODO: Replace with your actual Formspree endpoint
                method="POST"
                className="space-y-6"
                onSubmit={() => setSubmitted(true)}
              >
                <div>
                  <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
                >
                  Send
                </button>
              </form>
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-xl text-center font-semibold">
                  Thank you! Your message has been sent.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;