import React from "react";
import img from '/src/assets/cyberpunk.jpg'

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 py-24 relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl font-bold ml-24 mr-24 mb-12 text-white mt-20">
          Hi, I am Juan Baltazar, a passionate full stack developer searching
          for an opportunity to work full time
        </h1>
        <ul className="flex justify-center space-x-8">
          <li>
            <a
              href="#projects"
              className="text-2xl text-white hover:text-gray-300 transition duration-300"
            >
              View Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-2xl text-white hover:text-gray-300 transition duration-300"
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