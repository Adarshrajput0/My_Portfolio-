// import Section from "./section";
// import { Code } from "lucide-react";
// const Skills = () => {
//   return (
//     <Section icon={<Code />} sectionTitle="Skills">
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//         repellat.
//       </p>
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

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "C", icon: c },
  { name: "Django", icon: django },
  { name: "Flask", icon: flask },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
];

const Skills = () => {
  return (
    <Section icon={<Code />} sectionTitle="Skills">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/60 backdrop-blur-md shadow-md hover:scale-110 transition-transform"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
