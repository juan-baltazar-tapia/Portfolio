import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/assets/Flavor-Fusion2.png";
import img2 from "/src/assets/album-discussion.png";
import img3 from "/src/assets/digg2.png";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section id="projects">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-2 text-center">Projects</h3>
          <h1 className="text-4xl font-bold mb-8 text-center">
            Explore my most recent full stack projects
          </h1>
          <Slider {...settings}>
            {data.map((data) => {
              return (
                <div key={data.id} className="px-4">
                  <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102 cursor-pointer">
                    <div className="h-56 flex justify-center items-center bg-indigo-900">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="h-44 w-44 object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col p-6">
                      <h1 className="text-2xl font-bold mb-2 text-center">
                        {data.name}
                      </h1>
                      <p className="text-gray-400 mb-4 flex-grow text-center">
                        {data.description}
                      </p>
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
      <hr className="border-t border-gray-300 "></hr>
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
