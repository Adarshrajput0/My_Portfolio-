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
