// import passport from "../assets/passport.png";
// const Header = () => {
//   return (
//     <header className="bg-blue-800 text-white p-5 rounded-xl flex justify-between items-center">
//       <div>
//         {/* Stylish Name */}
//         <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//           Adarsh Rajput
//         </h1>

//         {/* Role */}
//         <p className="text-sm mt-1 text-blue-200 font-medium tracking-wider uppercase">
//           Student
//         </p>
//       </div>
//       <img className="rounded-full w-24" src={passport} alt="" />
//     </header>
//   );
// };
// export default Header;

// import passport from "../assets/passport.png";
// import { Github, Linkedin } from "lucide-react";

// const Header = () => {
//   return (
//     <header
//       className="
//         relative
//         p-8
//         rounded-t-2xl
//         flex
//         justify-between
//         items-center
//         overflow-hidden
//         bg-gradient-to-br
//         from-indigo-600 via-purple-600 to-blue-600
//         animate-gradient
//         text-white
//       "
//     >
//       {/* Glow Orbs */}
//       <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

//       {/* Glass Overlay */}
//       <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

//       {/* Left Content */}
//       <div className="relative z-10 max-w-sm">
//         {/* Name */}
//         <h1
//           className="
//             text-5xl
//             font-extrabold
//             tracking-wide
//             bg-gradient-to-r
//             from-white via-cyan-200 to-white
//             bg-clip-text
//             text-transparent
//             drop-shadow-[0_0_18px_rgba(255,255,255,0.7)]
//           "
//         >
//           Adarsh Kumar
//         </h1>

//         {/* Typing Role */}
//         <div className="mt-2 text-sm tracking-[0.3em] uppercase text-cyan-300">
//           <p className="typing text-sm tracking-[0.3em] uppercase text-cyan-300 mt-2">
//             Full Stack Developer
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-5">
//           <a
//             href="https://github.com/Adarshrajput0
// "
//             target="_blank"
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <Github size={20} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/adarsh-rajput-bb5215346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <Linkedin size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Profile Image */}
//       <div className="relative z-10">
//         {/* Glow Ring */}
//         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 blur-xl opacity-80 animate-pulse"></div>

//         {/* Image */}
//         <img
//           src={passport}
//           alt="Profile"
//           className="
//             relative
//             w-36
//             h-36
//             rounded-full
//             border-2 border-white
//             shadow-2xl
//             object-cover
//             transition-all duration-500
//             hover:scale-110 hover:rotate-1
//           "
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import passport from "../assets/passport.png";
// import { Github, Linkedin } from "lucide-react";

// const Header = () => {
//   return (
//     <header
//       className="
//         relative
//         p-10
//         rounded-t-3xl
//         flex
//         justify-between
//         items-center
//         overflow-hidden
//         bg-gradient-to-br
//         from-indigo-700 via-purple-700 to-blue-700
//         text-white
//       "
//     >
//       {/* Background Glow Layers */}
//       <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-fuchsia-500/30 rounded-full blur-[120px]"></div>
//       <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-cyan-500/30 rounded-full blur-[120px]"></div>

//       {/* Subtle Noise / Glass Layer */}
//       <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

//       {/* Left Content */}
//       <div className="relative z-10 max-w-sm">
//         {/* Name */}
//         <h1
//           className="
//             text-4xl md:text-5xl
//             font-extrabold
//             tracking-tight
//             leading-tight
//             bg-gradient-to-r
//             from-white via-cyan-200 to-white
//             bg-clip-text
//             text-transparent
//             drop-shadow-[0_4px_12px_rgba(255,255,255,0.35)]
//           "
//         >
//           Adarsh Kumar
//         </h1>

//         {/* Role */}
//         <p className="mt-3 text-xs tracking-[0.35em] uppercase text-cyan-300">
//           Full Stack Developer
//         </p>

//         {/* Divider */}
//         <div className="mt-4 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>

//         {/* Social Icons (UNCHANGED) */}
//         <div className="flex gap-4 mt-6">
//           <a
//             href="https://github.com/Adarshrajput0"
//             target="_blank"
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <Github size={18} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/adarsh-rajput-bb5215346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//           >
//             <Linkedin size={18} />
//           </a>
//         </div>
//       </div>

//       {/* Profile Image */}
//       <div className="relative z-10">
//         {/* Gradient Ring */}
//         <div className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 blur-xl opacity-70"></div>

//         {/* Image */}
//         <img
//           src={passport}
//           alt="Profile"
//           className="
//             relative
//             w-32
//             h-32
//             rounded-full
//             border-2 border-white/80
//             shadow-2xl
//             object-cover
//             transition-all duration-500
//             hover:scale-110
//           "
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

import passport from "../assets/passport.png";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Software Developer"];

const Header = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500); // changes role every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative p-12 flex flex-col md:flex-row justify-between items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-b-3xl">
      {/* Background Premium Glow Layers */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-yellow-500/20 rounded-full blur-[180px] animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] bg-purple-500/20 rounded-full blur-[180px] animate-pulse-slow"></div>

      {/* Glass/Blur Layer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {/* Left Content */}
      <div className="relative z-10 max-w-lg text-center md:text-left">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          Adarsh Kumar
        </h1>

        {/* Animated Sliding Role */}
        <p className="mt-3 text-2xl md:text-3xl font-semibold text-yellow-300 drop-shadow-lg h-10 overflow-hidden relative">
          <span className="absolute animate-slide">{roles[currentRole]}</span>
        </p>

        {/* Divider */}
        <div className="mt-5 w-20 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 shadow-lg mx-auto md:mx-0"></div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/Adarshrajput0"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-400 shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Github size={20} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-rajput-bb5215346/"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-400 shadow-lg hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 mt-8 md:mt-0">
        <div className="absolute -inset-5 -z-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-400 blur-3xl opacity-80 animate-spin-slow"></div>
        <img
          src={passport}
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/90 shadow-[0_0_60px_rgba(255,255,255,0.6)] object-cover transition-all duration-500 hover:scale-110 hover:shadow-[0_0_70px_rgba(255,255,255,0.8)]"
        />
      </div>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-spin-slow { animation: spin-slow 40s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
          @keyframes slide-role {
            0% { transform: translateY(100%); opacity:0; }
            10% { transform: translateY(0); opacity:1; }
            90% { transform: translateY(0); opacity:1; }
            100% { transform: translateY(-100%); opacity:0; }
          }
          .animate-slide { animation: slide-role 2.5s ease-in-out infinite; }
        `}
      </style>
    </header>
  );
};

export default Header;
