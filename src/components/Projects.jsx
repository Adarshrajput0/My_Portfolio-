// import Section from "./section";
// import { FolderGit2 } from "lucide-react";
// const Projects = () => {
//   return (
//     <Section icon={<FolderGit2 />} sectionTitle="Projects">
//       <p>
//         Bharat Clock dolor sit amet consectetur adipisicing elit. Officiis,
//         repellat.
//       </p>
//     </Section>
//   );
// };
// export default Projects;

import Section from "./section";
import { FolderGit2, ExternalLink } from "lucide-react";
import airbnbClone from "../assets/projects/airbnb.png";
import bharatClock from "../assets/projects/bharat-clock.png";
import weatherApp from "../assets/projects/weather-app.png";
import todoList from "../assets/projects/todo-list.png";
import iceCream from "../assets/projects/ice-cream.png";
import squareGame from "../assets/projects/square-game.png";

const projectsData = [
  {
    title: "Airbnb Clone",
    image: airbnbClone,
    description:
      "Experience comfort, style, and convenience in this beautifully designed home, perfect for families, couples, or solo travelers. Located in a peaceful and prime area, this property offers a relaxing atmosphere while keeping you close to popular attractions, restaurants, and local markets.",
    github: "https://github.com/Adarshrajput0/Airbnb",
    live: "https://airbnb-powi.onrender.com/",
  },
  {
    title: "Bharat Clock",
    image: bharatClock,
    description:
      "A real-time digital clock built using JavaScript that displays Indian Standard Time.",
    github: "https://github.com/Adarshrajput0/Bharat-Clock",
    live: "https://adarshrajput0.github.io/Bharat-Clock/",
  },
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "A weather forecasting application using APIs to show real-time weather information.",
    github: "https://github.com/Adarshrajput0/Weather-App",
    live: "https://adarshrajput0.github.io/Weather-App/",
  },
  {
    title: "To-Do List",
    image: todoList,
    description:
      "A task management application built with JavaScript to organize daily activities efficiently.",
    github: "https://github.com/Adarshrajput0/To-do-list",
  },
  {
    title: "Ice-Creme",
    image: iceCream,
    description:
      "A creative ice-cream themed web project developed using HTML, CSS, and JavaScript.",
    github: "https://github.com/Adarshrajput0/Hello",
  },
  {
    title: "Square Game",
    image: squareGame,
    description:
      "An interactive square game built using JavaScript, focusing on logic building and user interaction.",
    github: "https://github.com/Adarshrajput0/Square-Game",
  },
];

const Projects = () => {
  return (
    <Section icon={<FolderGit2 />} sectionTitle="Projects">
      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                >
                  GitHub <ExternalLink size={16} />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
