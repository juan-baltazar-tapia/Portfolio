import React from "react";
import img from '/src/assets/cyberpunk.jpg'

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center md:min-h-screen lg:min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-black dark:bg-opacity-50"></div>
      <div className="container mx-auto px-6 py-24 relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ml-24 mr-24 mb-12 text-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] dark:text-white mt-20">
          Hi, I am Juan Baltazar, a passionate full stack developer searching
          for an opportunity to work full time
        </h1>
        <ul className="flex justify-center space-x-8">
          <li>
            <a
              href="#projects"
              className="text-xl md:text-2xl lg:text-2xl text-white hover:text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition duration-300"
            >
              View Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-xl md:text-2xl lg:text-2xl text-white hover:text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition duration-300"
            >
              View Skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
