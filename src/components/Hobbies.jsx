import Section from "./section";
import { Sparkles } from "lucide-react";

const Hobbies = () => {
  return (
    <Section icon={<Sparkles />} sectionTitle="Hobbies">
      <p className="text-gray-1700 text-xl font-bold">
        I enjoy spending my free time in various activities that keep me active
        and entertained. My hobbies include:
      </p>
      <ul className="list-disc list-inside text-xl font-bold text-gray-1700 mt-2">
        <li>Cricket 🏏</li>
        <li>Badminton 🏸</li>
        <li>Bike Riding 🏍️</li>
      </ul>
    </Section>
  );
};

export default Hobbies;
