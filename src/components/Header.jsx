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

import passport from "../assets/passport.png";
import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
        relative
        p-8
        rounded-t-2xl
        flex
        justify-between
        items-center
        overflow-hidden
        bg-gradient-to-br
        from-indigo-600 via-purple-600 to-blue-600
        animate-gradient
        text-white
      "
    >
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {/* Left Content */}
      <div className="relative z-10 max-w-sm">
        {/* Name */}
        <h1
          className="
            text-4xl
            font-extrabold
            tracking-wide
            bg-gradient-to-r
            from-white via-cyan-200 to-white
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_18px_rgba(255,255,255,0.7)]
          "
        >
          Adarsh Rajput
        </h1>

        {/* Typing Role */}
        <div className="mt-2 text-sm tracking-[0.3em] uppercase text-cyan-300">
          <p className="typing text-sm tracking-[0.3em] uppercase text-cyan-300 mt-2">
            Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-5">
          <a
            href="https://github.com/Adarshrajput0
"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-rajput-bb5215346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10">
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 blur-xl opacity-80 animate-pulse"></div>

        {/* Image */}
        <img
          src={passport}
          alt="Profile"
          className="
            relative
            w-28
            h-28
            rounded-full
            border-2 border-white
            shadow-2xl
            object-cover
            transition-all duration-500
            hover:scale-110 hover:rotate-1
          "
        />
      </div>
    </header>
  );
};

export default Header;
