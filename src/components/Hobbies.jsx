// import Section from "./section";
// import { Sparkles } from "lucide-react";
// const Hobbies = () => {
//   return (
//     <Section icon={<Sparkles />} sectionTitle="Hobbies">
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//         repellat.
//       </p>
//     </Section>
//   );
// };
// export default Hobbies;

import Section from "./section";
import { Sparkles } from "lucide-react";

const Hobbies = () => {
  return (
    <Section icon={<Sparkles />} sectionTitle="Hobbies">
      <p className="text-gray-700">
        I enjoy spending my free time in various activities that keep me active
        and entertained. My hobbies include:
      </p>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li>Cricket 🏏</li>
        <li>Badminton 🏸</li>
        <li>Bike Riding 🏍️</li>
      </ul>
    </Section>
  );
};

export default Hobbies;
