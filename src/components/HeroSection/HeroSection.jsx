import myphoto from "../../assets/myphoto.jpg";
import cvFile from "../../assets/Mustafa-Ihab-CVResume.pdf";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center mt-12 px-6 lg:px-20 py-16 
                 bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-200 transition-colors duration-500"
    >
      {/* left */}
      <div className="flex flex-col gap-6 text-center md:text-left">
        {/* me */}
        <div>
          <h4 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Hi 👋, I'm</h4>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md">
            Mustafa Ihab
          </h1>
        </div>

        {/* description */}
        <p className="max-w-md leading-relaxed text-gray-700 dark:text-gray-400 md:text-base lg:text-lg">
          A <span className="text-pink-400 font-semibold">Frontend Developer </span>
          who loves crafting elegant, responsive, and interactive user interfaces.  
          With strong knowledge in <span className="text-purple-400 font-semibold">React.js</span>,  
          modern JavaScript, TypeScript, Tailwind CSS, and clean UI/UX design principles,  
          I specialize in building sleek digital experiences that feel fast, modern, and user-friendly.
        </p>

        {/* actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          {/* Download CV */}
          <a
            href={cvFile}
            download="Mustafa_Ihab_CV.pdf"
            className="px-6 py-3 rounded-md font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg 
                       hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300"
          >
            Download CV
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-md font-medium border border-purple-500 text-purple-400 
                       hover:bg-purple-600 hover:text-white hover:shadow-md transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* right */}
      <div className="mb-10 md:mb-0">
        <img
          src={myphoto}
          alt="my photo"
          loading="lazy"
          className="w-48 h-48 md:w-80 lg:h-80 md:h-72 object-cover rounded-full border-4 border-gray-300 dark:border-gray-700 
                     shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500"
        />
      </div>
    </section>
  );
}
