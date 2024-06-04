import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Skills = () => {
  const skills = {
    Languages: [
      { name: "Python", experience: 3, proficiency: "intermediate" },
      { name: "JavaScript", experience: 2, proficiency: "intermediate" },
      { name: "TypeScript", experience: 1, proficiency: "beginner" },
      { name: "Java", experience: 2, proficiency: "beginner" },
    ],
    FrameworksDatabases: [
      { name: "MySQL", experience: 1, proficiency: "beginner" },
      { name: "MongoDB", experience: 1, proficiency: "beginner" },
      { name: "Supabase", experience: 1, proficiency: "beginner" },
      { name: "Tailwind CSS", experience: 2, proficiency: "intermediate" },
      { name: "Next.js", experience: 1, proficiency: "beginner" },
      { name: "Node.js", experience: 2, proficiency: "intermediate" },
      { name: "React", experience: 2, proficiency: "intermediate" },
    ],
    Tools: [
      { name: "VS Code", experience: 4 },
      { name: "Postman", experience: 2 },
      { name: "Jupyter Notebook", experience: 2 },
      { name: "Git", experience: 3 },
    ],
  };

  const [flipStates, setFlipStates] = useState({});

  const handleFlip = (index) => {
    setFlipStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.Languages.map((skill, index) => {
              return (
                <ReactCardFlip
                  key={index}
                  isFlipped={flipStates[index] || false}
                  flipDirection="vertical"
                >
                  <div
                    className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer "
                    onClick={() => handleFlip(index)}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                  </div>

                  <div
                    className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer"
                    onClick={() => handleFlip(index)}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        {skill.experience} y.o.e
                      </h3>
                    </div>
                  </div>
                </ReactCardFlip>
              );
            })}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Databases/Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.FrameworksDatabases.map((skill, index) => {
                return (
                  <ReactCardFlip
                    key={index}
                    isFlipped={flipStates[index + 4] || false}
                    flipDirection="vertical"
                  >
                    <div
                      className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer"
                      onClick={() => handleFlip(index + 4)}
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                      </div>
                    </div>

                    <div
                      className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer"
                      onClick={() => handleFlip(index + 4)}
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">
                          {skill.experience} y.o.e
                        </h3>
                      </div>
                    </div>
                  </ReactCardFlip>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.Tools.map((skill, index) => {
                return (
                  <ReactCardFlip
                    key={index}
                    isFlipped={flipStates[index + 16] || false}
                    flipDirection="vertical"
                  >
                    <div
                      className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer"
                      onClick={() => handleFlip(index + 16)}
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                      </div>
                    </div>

                    <div
                      className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center space-x-4 cursor-pointer"
                      onClick={() => handleFlip(index + 16)}
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">
                          {skill.experience} y.o.e
                        </h3>
                      </div>
                    </div>
                  </ReactCardFlip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className=" my-10 border-t border-gray-300 "></hr>
    </section>
  );
};

export default Skills;
