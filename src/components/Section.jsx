// const Section = ({ icon, children, sectionTitle }) => {
//   return (
//     <div className="my-8 mx-5 ">
//       <div className="flex my-3 items-center">
//         {icon}
//         <h1 className="font-bold text-xl mx-2">{sectionTitle}</h1>
//       </div>
//       {children}
//     </div>
//   );
// };
// export default Section;

//

//

const Section = ({ icon, children, sectionTitle }) => {
  return (
    <div className="my-14 mx-6">
      <div
        className="
          relative overflow-hidden
          rounded-3xl
          bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80
          backdrop-blur-xl
          p-8
          shadow-2xl
          transition-all duration-500 ease-out
          hover:shadow-3xl hover:-translate-y-2
        "
      >
        {/* Top Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />

        {/* Glow Effects */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-400/20 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center gap-5 mb-6">
          <div
            className="
              p-4 rounded-2xl
              bg-gradient-to-br from-yellow-100 to-red-100
              text-yellow-600
              shadow-inner
            "
          >
            {icon}
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {sectionTitle}
            </h2>
            <div className="w-14 h-[3px] mt-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-gray-300 leading-relaxed text-[15.5px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
