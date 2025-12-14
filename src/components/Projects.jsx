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

import bharatClock from "../assets/projects/bharat-clock.png";
import weatherApp from "../assets/projects/weather-app.png";
import todoList from "../assets/projects/todo-list.png";

const Projects = () => {
  return (
    <Section icon={<FolderGit2 />} sectionTitle="Projects">
      <div className="grid gap-6 mt-4">
        {/* Project 1 */}
        <div className="bg-slate-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src={bharatClock}
            alt="Bharat Clock"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Bharat Clock</h3>
            <p className="text-sm text-gray-600 mt-1">
              A real-time digital clock built using JavaScript showing Indian
              time.
            </p>

            <a
              href="https://github.com/Adarshrajput0/Bharat-Clock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-indigo-600 font-medium hover:underline"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-slate-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src={weatherApp}
            alt="Weather App"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Weather App</h3>
            <p className="text-sm text-gray-600 mt-1">
              A weather forecasting app using API to show real-time weather
              data.
            </p>

            <a
              href="https://github.com/Adarshrajput0/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-indigo-600 font-medium hover:underline"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-slate-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src={todoList}
            alt="To-Do List"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">To-Do List</h3>
            <p className="text-sm text-gray-600 mt-1">
              A task management app built with JavaScript for daily
              productivity.
            </p>

            <a
              href="https://github.com/Adarshrajput0/To-do-list"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-indigo-600 font-medium hover:underline"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
