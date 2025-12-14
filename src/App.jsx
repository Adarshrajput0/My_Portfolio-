import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-slate-100 px-3 py-8">
        <div className="bg-white max-w-xl mx-auto rounded-xl shadow-lg">
          <Header />
          <AboutMe />
          <Projects />
          <Skills />
          <Education />
          <Hobbies />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

// import AboutMe from "./components/AboutMe";
// import Header from "./components/Header";

// function App() {
//   return (
//     <div className="min-h-screen relative overflow-hidden bg-slate-950 px-3 py-8">
//       {/* Animated gradient layer */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r
//                       from-indigo-500 via-purple-500 to-pink-500
//                       opacity-20 animate-gradient"
//       ></div>

//       {/* Floating circles */}
//       <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-40 animate-float"></div>
//       <div className="absolute bottom-20 right-20 w-52 h-52 bg-pink-500 rounded-full blur-3xl opacity-40 animate-float-slow"></div>

//       {/* Main card */}
//       <div className="relative bg-white max-w-xl mx-auto rounded-xl shadow-2xl">
//         <Header />
//         <AboutMe />
//       </div>
//     </div>
//   );
// }

// export default App;
