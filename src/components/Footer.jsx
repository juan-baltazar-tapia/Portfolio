import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="https://github.com/juan-baltazar-tapia" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/juan-baltazar-tapia" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="mailto:juan.baltazartapia@gmail.com">
            <FaEnvelope className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Juan Baltazar Tapia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;