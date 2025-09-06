import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[rgb(23,23,20)] text-black dark:text-gray-300 shadow-md z-50 transition-colors duration-300">
      <div className="px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative cursor-pointer transition-colors duration-300 
                           hover:text-black dark:hover:text-white before:absolute before:bottom-0 before:left-0 
                           before:w-0 before:h-[2px] before:bg-gradient-to-r from-pink-500 to-purple-500 
                           before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-gray-800" size={20} />
            )}
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 dark:bg-gray-950 transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[430px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6 font-medium w-full">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="relative transition-all duration-500 hover:text-transparent hover:bg-clip-text 
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 w-full text-center px-2 py-3 rounded-md"
            >
              {item}
            </a>
          ))}

          {/* Dark/Light Toggle inside mobile menu */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={22} />
            ) : (
              <Moon className="text-gray-800" size={22} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
