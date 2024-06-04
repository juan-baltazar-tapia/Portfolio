import React from "react";
import img from "/src/assets/me.png";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap bg-black " id="about">
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="About"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-24 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About</h1>
          <p className="text-xl text-gray-300">
            I graduated from Eastern Connecticut University with a Bachelor's of
            Science in Mathematics. I have always loved building things, and
            when I started messing around and building websites, small games, or
            projects for friends, I fell in love.
          </p>
        </div>
      </div>
      <hr  className=" border-t border-gray-300 "></hr>
    </>
  );
};

export default About;
