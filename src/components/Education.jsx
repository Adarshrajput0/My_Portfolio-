// import Section from "./section";
// import { GraduationCap } from "lucide-react";
// const Education = () => {
//   return (
//     <Section icon={<GraduationCap />} sectionTitle="Education">
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//         repellat.
//       </p>
//     </Section>
//   );
// };
// export default Education;

import Section from "./section";
import { GraduationCap } from "lucide-react";
import schoolImage from "../assets/school.png"; // Add your school image
import universityImage from "../assets/university.png"; // Add your university image

const Education = () => {
  return (
    <Section icon={<GraduationCap />} sectionTitle="Education">
      {/* 10th & 12th School Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">
          High School & Senior Secondary
        </h3>
        <p className="text-sm text-gray-700">
          Completed 10th and 12th from CBSE Board, East Champaran, Bihar with
          70% in both.
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
          <li>School: Ms Memorial Public School</li>
          <li>Location: East Champaran, Bihar</li>
          <li>Board: CBSE</li>
          <li>Percentage: 70% in both 10th and 12th</li>
          <li>
            Subjects: Science, Mathematics, English, Computer Science, etc.
          </li>
          <li>
            Achievements: Participated in science fairs, school-level
            competitions
          </li>
        </ul>
        <img
          src={schoolImage}
          alt="School"
          className="w-32 h-32 mt-3 rounded shadow-md"
        />
      </div>

      {/* B.Tech CSE Info */}
      <div>
        <h3 className="text-lg font-semibold">
          Bachelor of Technology (B.Tech) - CSE
        </h3>
        <p className="text-sm text-gray-700">
          Currently pursuing 3rd year B.Tech in Computer Science & Engineering
          at Parul University, Vadodara, Gujarat.
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
          <li>University: Parul University</li>
          <li>Location: Vadodara, Gujarat</li>
          <li>Current Year: 3rd Year</li>
          <li>
            Major Subjects: Data Structures, Algorithms, DBMS, Operating
            Systems, Web Development
          </li>
          <li>
            Projects: Portfolio Website, Simple Flask App, Java Console Projects
          </li>
          <li>Skills Learned: Python, Java, HTML, CSS, JavaScript, SQL, Git</li>
          <li>
            Achievements: Participated in coding competitions and hackathons
          </li>
        </ul>
        <img
          src={universityImage}
          alt="University"
          className="w-32 h-32 mt-3 rounded shadow-md"
        />
      </div>
    </Section>
  );
};

export default Education;
