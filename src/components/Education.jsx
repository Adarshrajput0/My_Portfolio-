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

//

import Section from "./section";
import { GraduationCap, School, University } from "lucide-react";
import schoolImage from "../assets/school.png";
import universityImage from "../assets/university.png";

const Education = () => {
  return (
    <Section icon={<GraduationCap />} sectionTitle="Education">
      <div className="space-y-8 mt-6">
        {/* School Card */}
        <div className="bg-slate-50 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col md:flex-row gap-6">
          <img
            src={schoolImage}
            alt="School"
            className="w-32 h-32 object-cover rounded-xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <School className="text-indigo-600" />
              <h3 className="text-lg font-semibold">
                High School & Senior Secondary (CBSE)
              </h3>
            </div>

            <p className="text-sm text-gray-700 mb-3">
              Completed 10th and 12th from CBSE Board, East Champaran, Bihar
              with
              <span className="font-medium"> 70% in both</span>.
            </p>

            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>School: Ms Memorial Public School</li>
              <li>Location: East Champaran, Bihar</li>
              <li>Subjects: Science, Mathematics, English, Computer Science</li>
              <li>Activities: Science fairs & school-level competitions</li>
            </ul>
          </div>
        </div>

        {/* University Card */}
        <div className="bg-slate-50 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col md:flex-row gap-6">
          <img
            src={universityImage}
            alt="University"
            className="w-32 h-32 object-cover rounded-xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <University className="text-indigo-600" />
              <h3 className="text-lg font-semibold">
                Bachelor of Technology (B.Tech) – CSE
              </h3>
            </div>

            <p className="text-sm text-gray-700 mb-3">
              Currently pursuing <span className="font-medium">3rd year</span>{" "}
              B.Tech in Computer Science & Engineering at Parul University,
              Vadodara, Gujarat.
            </p>

            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>University: Parul University</li>
              <li>Core Subjects: DSA, DBMS, OS, Web Development</li>
              <li>Projects: Portfolio Website, Flask App, Java Projects</li>
              <li>Skills: Python, Java, HTML, CSS, JavaScript, SQL, Git</li>
              <li>Achievements: Coding competitions & hackathons</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
