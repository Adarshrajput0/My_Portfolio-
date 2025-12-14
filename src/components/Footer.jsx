// import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative mt-20 bg-gray-900 text-gray-300 rounded-b-3xl">
//       {/* Gradient Line */}
//       <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>

//       <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Brand Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-white">
//             Adarsh <span className="text-indigo-400">Rajput</span>
//           </h2>
//           <p className="mt-3 text-sm leading-relaxed text-gray-400">
//             B.Tech CSE Student passionate about Web Development, Backend
//             Engineering, and building clean, scalable applications.
//           </p>
//         </div>

//         {/* Social & Contact */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Connect With Me
//           </h3>

//           <div className="flex items-center gap-4">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
//             >
//               <Github size={18} />
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
//             >
//               <Linkedin size={18} />
//             </a>

//             <a
//               href="mailto:example@gmail.com"
//               className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
//             >
//               <Mail size={18} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10 px-8 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
//         <span>
//           © {new Date().getFullYear()} Adarsh Rajput. All rights reserved.
//         </span>

//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="mt-3 md:mt-0 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
//         >
//           Back to top <ArrowUp size={16} />
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gray-900 text-gray-300 rounded-b-3xl">
      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>

      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          {/* Brand Name */}
          <h2 className="text-2xl font-bold text-white">
            Adarsh <span className="text-indigo-400">Rajput</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            B.Tech CSE Student passionate about Web Development, Backend
            Engineering, and building clean, scalable applications.
          </p>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h3>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500 hover:text-white transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-8 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <span>
          © {new Date().getFullYear()} Adarsh Rajput. All rights reserved.
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-3 md:mt-0 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
