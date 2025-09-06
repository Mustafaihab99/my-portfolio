/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon size={24} />,
      link: "https://www.linkedin.com/in/mustafa-ihab-5b501a2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <GithubIcon size={24} />,
      link: "https://github.com/Mustafaihab99",
      color: "hover:text-gray-300",
    },
    {
      name: "WhatsApp",
      icon: <Phone size={24} />,
      link: "https://wa.me/+2001095921933?text=Hello%20Mustafa,%20I%20found%20your%20portfolio!",
      color: "hover:text-green-400",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:mustafaihab9@gmail.com",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-200 dark:bg-[#121212] text-gray-900 dark:text-gray-400 py-10 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Mustafa Ihab. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-300 ${s.color}`}
              aria-label={s.name}>
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
