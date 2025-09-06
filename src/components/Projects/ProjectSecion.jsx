/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      className="bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-200 px-6 md:px-20 py-20 transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      {/* Title */}
      <motion.div variants={cardVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A collection of projects I’ve built — blending clean code, modern UI,
          and smooth user experiences.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-gray-100 dark:bg-[#202020] rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 transition-transform hover:-translate-y-2 duration-300 flex flex-col">
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain bg-black/40 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-auto">
                <a
                  href={project.github}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-400 transition">
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-pink-400 transition">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
