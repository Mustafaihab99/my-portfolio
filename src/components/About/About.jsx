/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-200 px-6 md:px-20 py-20 transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Title */}
      <motion.div variants={cardVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          I’m a{" "}
          <span className="text-pink-400 font-semibold">Frontend Developer</span>{" "}
          who thrives on crafting modern, responsive, and interactive web apps.  
          My passion lies in transforming ideas into sleek digital experiences with
          clean code and pixel-perfect design.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="p-8 bg-gray-100 dark:bg-[#202020] rounded-3xl shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Who I Am
          </h3>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            A computer science student with strong foundations in programming, 
            problem-solving, and modern frontend technologies.  
            Always pushing to learn & grow.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="p-8 bg-gray-100 dark:bg-[#202020] rounded-3xl shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            What I Do
          </h3>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            I build responsive, interactive, and elegant web interfaces 
            using <span className="text-purple-300">React.js</span>, 
            <span className="text-pink-300">Tailwind CSS</span>, 
            and modern JavaScript/TypeScript.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="p-8 bg-gray-100 dark:bg-[#202020] rounded-3xl shadow-xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
            My Goal
          </h3>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            To create user-friendly digital products that feel fast, modern, 
            and enjoyable to use — while contributing to impactful projects globally.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
