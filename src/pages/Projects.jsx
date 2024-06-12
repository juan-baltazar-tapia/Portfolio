import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/Flavor-Fusion2.png";
import img2 from "/src/assets/album-discussion.png";
import img3 from "/src/assets/digg2.png";

const Projects = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section id="projects">
      <div className="bg-gray-300 dark:bg-gray-900 text-white py-12 md:py-44">
        <div className="container mx-auto">
          <h1 className="pb-5 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-black dark:text-white">
            Projects
          </h1>
          <h1 className="pb-5 text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-black dark:text-white">
            Explore my most recent full stack projects
          </h1>
          <Slider {...settings}>
            {data.map((data) => {
              return (
                <div key={data.id} className="px-20 sm:px-4 md:px-4 lg:px-4">
                  <div className="bg-slate-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 cursor-pointer">
                    <div className=" flex justify-center items-center bg-indigo-800 dark:bg-indigo-900">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="h-44 w-44 md:h-80 md:w-80 object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col p-6">
                      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center text-black dark:text-white">
                        {data.name}
                      </h1>
                      <div className="mb-4 flex-grow overflow-auto">
                        <p className="text-md md:text-xl text-center text-gray-800 dark:text-gray-400">
                          {data.description}
                        </p>
                      </div>
                      <div className="mt-auto text-center">
                        <button
                          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                          onClick={() =>
                            window.open(data.github_link, "_blank")
                          }
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <hr className="border-t border-gray-800 dark:border-gray-300 "></hr>
    </section>
  );
};

const data = [
  {
    id: 1,
    name: "Flavor Fusion Recomendations",
    image: img1,
    description:
      "A web application that recommends restuarants and music events based on user preferences, budget, and location. Sign up, and save restuarants recommended to you.",
    github_link: "https://github.com/juan-baltazar-tapia/Flavor-Fusion",
  },
  {
    id: 2,
    name: "Album Discussion Board",
    image: img2,
    description:
      "A dynamic discussion forum that allows users to search for artists and select any album to discuss by leaving comments and upvoting posts.",
    github_link: "https://github.com/juan-baltazar-tapia/Gas-or-Pass",
  },
  {
    id: 3,
    name: "Digg Website Replicate",
    image: img3,
    description:
      "A digg website replicate developed with four other team members. Worked in a team environment with standup meetings, tickets, and pull request reviews.",
    github_link: "https://github.com/mikewash/tailwind-typescript",
  },

  //   {
  //     id: 4,
  //     name: "Habit Tracker*",
  //     image: "",
  //     description:
  //       "Inspired by github's activity graph, this application allows you to make a habit, track your progress, while allowing you to see a activity graph for every habit.",
  //     github_link: "https://github.com/juan-baltazar-tapia/Habit-Tracker",
  //   },
];

export default Projects;
