// // import Section from "./section";
// // import { Code } from "lucide-react";
// // const Skills = () => {
// //   return (
// //     <Section icon={<Code />} sectionTitle="Skills">
// //       <p>
// //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
// //         repellat.
// //       </p>
// //     </Section>
// //   );
// // };
// // export default Skills;

// import Section from "./section";
// import { Code } from "lucide-react";

// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import javascript from "../assets/skills/javascript.png";
// import react from "../assets/skills/react.png";
// import node from "../assets/skills/node.png";
// import java from "../assets/skills/java.png";
// import python from "../assets/skills/python.png";
// import c from "../assets/skills/c.png";
// import django from "../assets/skills/django.png";
// import flask from "../assets/skills/flask.png";
// import mongodb from "../assets/skills/mongodb.png";
// import mysql from "../assets/skills/mysql.png";

// const skills = [
//   { name: "HTML", icon: html },
//   { name: "CSS", icon: css },
//   { name: "JavaScript", icon: javascript },
//   { name: "React", icon: react },
//   { name: "Node.js", icon: node },
//   { name: "Java", icon: java },
//   { name: "Python", icon: python },
//   { name: "C", icon: c },
//   { name: "Django", icon: django },
//   { name: "Flask", icon: flask },
//   { name: "MongoDB", icon: mongodb },
//   { name: "MySQL", icon: mysql },
// ];

// const Skills = () => {
//   return (
//     <Section icon={<Code />} sectionTitle="Skills">
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/60 backdrop-blur-md shadow-md hover:scale-110 transition-transform"
//           >
//             <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
//             <span className="text-sm font-semibold">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// export default Skills;

// import Section from "./section";
// import { Code } from "lucide-react";

// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import javascript from "../assets/skills/javascript.png";
// import react from "../assets/skills/react.png";
// import node from "../assets/skills/node.png";
// import java from "../assets/skills/java.png";
// import python from "../assets/skills/python.png";
// import c from "../assets/skills/c.png";
// import django from "../assets/skills/django.png";
// import flask from "../assets/skills/flask.png";
// import mongodb from "../assets/skills/mongodb.png";
// import mysql from "../assets/skills/mysql.png";

// const skills = [
//   { name: "HTML", icon: html, category: "Frontend" },
//   { name: "CSS", icon: css, category: "Frontend" },
//   { name: "JavaScript", icon: javascript, category: "Frontend" },
//   { name: "React", icon: react, category: "Frontend" },
//   { name: "Node.js", icon: node, category: "Backend" },
//   { name: "Django", icon: django, category: "Backend" },
//   { name: "Flask", icon: flask, category: "Backend" },
//   { name: "Java", icon: java, category: "Programming" },
//   { name: "Python", icon: python, category: "Programming" },
//   { name: "C", icon: c, category: "Programming" },
//   { name: "MongoDB", icon: mongodb, category: "Database" },
//   { name: "MySQL", icon: mysql, category: "Database" },
// ];

// const Skills = () => {
//   return (
//     <Section icon={<Code />} sectionTitle="Skills">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="
//                group
//     relative
//     flex
//     flex-col
//     items-center
//     gap-3
//     px-6
//     py-5
//     min-w-[140px]
//     rounded-xl
//     bg-white
//     shadow-md
//     hover:shadow-xl
//     hover:-translate-y-1
//     transition-all
//     duration-300
//             "
//           >
//             {/* Glow Effect */}
//             <div className="absolute inset-0 rounded-2xl bg-indigo-400 opacity-0 group-hover:opacity-10 transition"></div>

//             <img src={skill.icon} alt={skill.name} className="w-12 h-12 z-10" />

//             <span className="text-sm font-semibold text-gray-800 z-10">
//               {skill.name}
//             </span>

//             <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 font-medium z-10">
//               {skill.category}
//             </span>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// export default Skills;

import Section from "./section";
import { Code } from "lucide-react";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import c from "../assets/skills/c.png";
import django from "../assets/skills/django.png";
import flask from "../assets/skills/flask.png";
import mongodb from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";
import express from "../assets/skills/express.png";
import cpp from "../assets/skills/cpp.png";

import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode.png";
import intellij from "../assets/skills/intellij.png";
import chatgpt from "../assets/skills/chatgpt.png";
import gemini from "../assets/skills/gemini.png";

import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";

/* ---------- SKILLS DATA ---------- */
const skills = [
  { name: "HTML", icon: html, category: "Frontend" },
  { name: "CSS", icon: css, category: "Frontend" },
  { name: "JavaScript", icon: javascript, category: "Frontend" },
  { name: "React", icon: react, category: "Frontend" },

  { name: "Node.js", icon: node, category: "Backend" },
  { name: "Express.js", icon: express, category: "Backend" },
  { name: "Django", icon: django, category: "Backend" },
  { name: "Flask", icon: flask, category: "Backend" },

  { name: "Java", icon: java, category: "Programming" },
  { name: "Python", icon: python, category: "Programming" },
  { name: "C", icon: c, category: "Programming" },
  { name: "C++", icon: cpp, category: "Programming" },

  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MySQL", icon: mysql, category: "Database" },
  /* ---------- STYLING ---------- */
  { name: "Tailwind CSS", icon: tailwind, category: "Styling" },
  { name: "Bootstrap", icon: bootstrap, category: "Styling" },

  /* ---------- TOOLS ---------- */
  { name: "Git", icon: git, category: "Tools" },
  { name: "GitHub", icon: github, category: "Tools" },
  { name: "VS Code", icon: vscode, category: "Tools" },
  { name: "IntelliJ IDEA", icon: intellij, category: "Tools" },
  { name: "ChatGPT", icon: chatgpt, category: "Tools" },
  { name: "Gemini", icon: gemini, category: "Tools" },
];

/* ---------- GROUPING LOGIC (THIS WAS MISSING) ---------- */
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

/* ---------- COMPONENT ---------- */
const Skills = () => {
  return (
    <Section icon={<Code />} sectionTitle="Skills">
      <div className="space-y-10 mt-8">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-xl font-bold text-white-800 mb-5">
              {category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="
                    group relative flex flex-col items-center gap-3
                    px-6 py-5 min-w-[150px]
                    rounded-2xl bg-white
                    shadow-md hover:shadow-xl
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-indigo-400 opacity-0 group-hover:opacity-10 transition"></div>

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 z-10"
                  />

                  <span className="text-sm font-semibold text-gray-800 z-10">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
