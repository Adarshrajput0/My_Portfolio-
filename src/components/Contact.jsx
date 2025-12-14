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
      <div className="text-gray-700 space-y-4">
        <p>
          <strong>Phone:</strong> +91 9142368127
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:adarshrajput2931@gmail.com"
            className="text-blue-600 hover:underline"
          >
            adarshrajput2931@gmail.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Waghodia, Vadodara, Gujarat 📍
        </p>

        {/* Icons for clickable links */}
        <div className="flex items-center space-x-6 mt-2">
          <a
            href="https://www.linkedin.com/in/adarsh-rajput-bb5215346"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/adarshrajput0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://adarsh-rajput-portfolio.com" // replace with your portfolio URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-2xl hover:scale-110 transition-transform"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
