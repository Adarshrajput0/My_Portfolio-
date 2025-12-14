// import Section from "./section";
// import { Mail } from "lucide-react";
// const Contact = () => {
//   return (
//     <Section icon={<Mail />} sectionTitle="Contact">
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//         repellat.
//       </p>
//     </Section>
//   );
// };
// export default Contact;

import Section from "./section";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; // Portfolio icon

const Contact = () => {
  return (
    <Section icon={<Mail />} sectionTitle="Contact">
      <div className="text-white-900 font-bold space-y-5">
        <p>
          <strong className="text-xl font-bold">Phone:</strong>
          <a className="text-xl font-bold"> +91 9142368127</a>
        </p>
        <p>
          <strong className="text-xl font-bold">Email:</strong>{" "}
          <a
            href="mailto:adarshrajput2931@gmail.com"
            className="text-blue-300 text-xl font-bold hover:underline"
          >
            adarshrajput2931@gmail.com
          </a>
        </p>
        <p>
          <strong className="text-xl font-bold">Location:</strong>
          <a className="text-xl font-bold"> Waghodia, Vadodara, Gujarat 📍</a>
        </p>

        {/* Icons for clickable links */}
        <div className="flex items-center space-x-6 mt-2">
          <a
            href="https://www.linkedin.com/in/adarsh-rajput-bb5215346"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-4xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/adarshrajput0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-4xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://Adarshrajput0.github.io/My_Portfolio-/
" // replace with your portfolio URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-4xl hover:scale-110 transition-transform"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
