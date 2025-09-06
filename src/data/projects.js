import byway from "../assets/byway.jpg";
import blog from "../assets/blog.jpg";
import gym from "../assets/gym.jpg";
import safarni from "../assets/safarni.jpg";
import smothie from "../assets/smothie.jpg";
import todo from "../assets/todo.jpg";
import weather from "../assets/weather.jpg";
import doctor from "../assets/doctor.jpg";

export const projects = [
  {
    title: "ByWay for Learning",
    description:
      "Educational web platform designed for learning with interactive courses and progress tracking. It designed for instructors to publish courses and students who can enroll this courses and also an admin to control the website.",
    image: byway,
    tech: ["React", "TypeScript", "TailwindCSS" , "React Query" , "i18next" , "Stripe Js"],
    link: "https://by-way-courses.vercel.app/",
    github: "https://github.com/Mustafaihab99/ByWay-forLearning",
  },
  {
    title: "Safarni",
    description:
      "Travel agency booking website allowing users to explore destinations, book trips, and manage reservations with a clean UI and responsive design.",
    image: safarni,
    tech: ["React", "TailwindCSS", "TypeScript" , "React Query" , "Stripe js"],
    link: "#",
    github: "https://github.com/Mustafaihab99/Safarni",
  },
  {
    title: "Doctor Online Booking",
    description:
      "Healthcare appointment booking system where patients can schedule doctor visits online with ease. Built with authentication and user-friendly design.",
    image: doctor,
    tech: ["React", "TailwindCSS"],
    link: "https://online-booking-with-doctor.vercel.app/",
    github: "https://github.com/Mustafaihab99/online-booking-with-doctor",
  },
  {
    title: "Weather App",
    description:
      "Weather forecast app that fetches real-time weather data by city using OpenWeather API. Features simple, clean, and responsive design.",
    image: weather,
    tech: ["React", "API Integration", "CSS" , "i18next"],
    link: "https://mustafaihab99.github.io/ًWeatherApp/",
    github: "https://github.com/Mustafaihab99/WeatherApp",
},
{
  title: "To-Do App",
  description:
    "Task management application that allows users to add, complete, and delete tasks. Uses localStorage for data persistence.",
  image: todo,
  tech: ["React", "Context API", "CSS"],
  link: "https://mustafaihab99.github.io/ToDoApp/",
  github: "https://github.com/Mustafaihab99/ToDoApp",
},
  {
    title: "Smoothies Restaurant",
    description:
      "Restaurant website with menu browsing, online orders, and a dynamic cart system. Features modern animations and responsive layout.",
    image: smothie,
    tech: ["React", "CSS"],
    link: "https://mustafaihab99.github.io/SmoothiesRestaurant/",
    github: "https://github.com/Mustafaihab99/SmoothiesRestaurant",
  },
  {
    title: "MyGym",
    description:
      "Gym and fitness management website that showcases classes, trainers, and calculate calories. Designed with responsive UI and smooth animations.",
    image: gym,
    tech: ["React", "BootStrap"],
    link: "https://mustafaihab99.github.io/mygym/",
    github: "https://github.com/Mustafaihab99/mygym",
  },
  {
    title: "Blog Website",
    description:
      "Full-featured blog platform where users can read and share articles. Includes rich text editor, categories, and responsive design.",
    image: blog,
    tech: ["React" , "CSS" , "Reducer"],
    link: "https://mustafaihab99.github.io/BlogWebsite/",
    github: "https://github.com/Mustafaihab99/BlogWebsite",
  },
];
