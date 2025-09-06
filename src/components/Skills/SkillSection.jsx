/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { skills } from "../../data/skillsData";

export default function SkillSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-200 px-6 md:px-20 py-20 transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.div variants={skillVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Skills 
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Technologies and tools I use to craft modern, responsive, and scalable
          applications.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={skillVariants}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-[#202020] rounded-2xl shadow-md 
                         hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300"
            >
              <Icon className={`text-5xl mb-3 ${skill.color}`} />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
