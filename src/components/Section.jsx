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

const Section = ({ icon, children, sectionTitle }) => {
  return (
    <div className="my-12 mx-6">
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          bg-white
          p-7
          shadow-md
          transition-all duration-500
          hover:shadow-xl hover:-translate-y-1
        "
      >
        {/* Gradient Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

        {/* Soft Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center gap-4 mb-5">
          <div
            className="
            p-3 rounded-full
            bg-indigo-100
            text-indigo-600
            shadow-inner
          "
          >
            {icon}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{sectionTitle}</h2>
            <div className="w-12 h-[3px] mt-1 rounded-full bg-indigo-500" />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-gray-600 leading-relaxed text-[15.5px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
