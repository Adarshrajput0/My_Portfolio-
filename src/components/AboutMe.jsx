// import { User } from "lucide-react";
// import Section from "./section";

// const AboutMe = () => {
//   return (
//     <Section icon={<User />} sectionTitle="About Me">
//       <p>
//         I am a B.Tech Computer Science and Engineering student with a strong
//         interest in web development and software engineering. I enjoy building
//         user-friendly web applications using modern technologies like HTML, CSS,
//         JavaScript, React, and Tailwind CSS. I am continuously learning and
//         improving my skills in both frontend development and core computer
//         science subjects such as data structures, operating systems, and
//         databases. I believe in writing clean, efficient code and understanding
//         concepts deeply rather than just memorizing them. I am motivated,
//         detail-oriented, and always eager to learn new technologies and work on
//         real-world projects that help me grow as a developer.
//       </p>
//     </Section>
//   );
// };
// export default AboutMe;

import { User } from "lucide-react";
import Section from "./section";

const AboutMe = () => {
  return (
    <Section icon={<User />} sectionTitle="About Me">
      <p className="text-white-700">
        Hi, I am <strong>Adarsh Kumar</strong>, a{" "}
        <strong>B.Tech Computer Science and Engineering student</strong> with a
        deep passion for <strong>web development</strong> and{" "}
        <strong>software engineering</strong>. I love creating{" "}
        <strong>user-friendly web applications</strong> using modern
        technologies like <strong>HTML, CSS, JavaScript, React,</strong> and{" "}
        <strong>Tailwind CSS</strong>.
        <br />
        <br />I am constantly <strong>learning and improving</strong> my skills
        in both frontend development and core computer science concepts such as{" "}
        <strong>Data Structures, Operating Systems,</strong> and{" "}
        <strong>Databases</strong>. My approach is to{" "}
        <strong>understand concepts deeply</strong> rather than just memorize
        them, which helps me write{" "}
        <strong>clean, efficient, and maintainable code</strong>.
        <br />
        <br />I am <strong>motivated, detail-oriented,</strong> and always eager
        to <strong>explore new technologies</strong> and work on{" "}
        <strong>real-world projects</strong> that challenge me and help me grow
        as a developer. Beyond coding, I enjoy{" "}
        <strong>solving problems, learning about emerging tech trends,</strong>{" "}
        and <strong>collaborating with teams</strong> to build impactful
        solutions.
        <br />
        <br />
        In short, I strive to combine <strong>
          creativity, logic,
        </strong> and <strong>technology</strong> to make products that are not
        only functional but also enjoyable for users.
      </p>
    </Section>
  );
};

export default AboutMe;
