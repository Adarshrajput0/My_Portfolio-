import { User } from "lucide-react";
import Section from "./section";

const AboutMe = () => {
  return (
    <Section icon={<User />} sectionTitle="About Me">
      <p>
        I am a B.Tech Computer Science and Engineering student with a strong
        interest in web development and software engineering. I enjoy building
        user-friendly web applications using modern technologies like HTML, CSS,
        JavaScript, React, and Tailwind CSS. I am continuously learning and
        improving my skills in both frontend development and core computer
        science subjects such as data structures, operating systems, and
        databases. I believe in writing clean, efficient code and understanding
        concepts deeply rather than just memorizing them. I am motivated,
        detail-oriented, and always eager to learn new technologies and work on
        real-world projects that help me grow as a developer.
      </p>
    </Section>
  );
};
export default AboutMe;
