import React from "react";

const Navbar = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-sky-50 dark:bg-black">
      <header className="flex justify-between items-center py-4 px-6">
        <div>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-black dark:text-white font-bold  transition duration-300"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className=" text-black dark:text-white font-bold  transition duration-300"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black dark:text-white font-bold transition duration-300"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-black dark:text-white hidden sm:block sm:text-2xl md:text-4xl lg:text-5xl font-bold">Juan Baltazar</h1>
        </div>
        <div>
          <button
            onClick={props.toggleDarkMode}
            className="bg-black text-white dark:bg-white dark:text-black text-black-600 font-bold py-2 px-4 rounded-full hover:bg-black-200 transition duration-300"
          >
            Toggle
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;