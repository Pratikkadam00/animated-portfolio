import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Navbar from "../components/Navbar"; // Import your Navbar component

const ProjectsPage = () => {
  const projects = [
    {
      title: "Podcast Management",
      description:
        "A platform to manage podcast projects, secure login, user management, and manage files, YouTube links, and RSS feeds.",
      link: "https://gama-frontend-chi.vercel.app/",
      duration: "06/2023 - 10/2023",
      image: "path/to/podcast-management-image.jpg",
    },
    {
      title: "Covid-19 Tracker",
      description:
        "Track Covid-19 data in real-time using React and APIs for educational purposes.",
      link: "https://pratikkadam00.github.io/Covid19-tracker/",
      duration: "01/2022 - 03/2022",
      image: "path/to/covid-tracker-image.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <Section bgColor="bg-gray-600">
      {/* Background with subtle gradient for modern look */}
      <div className="absolute  inset-0 bg-gradient-to-b from-gray-900 to-gray-700 z-0 "></div>

      {/* Main content wrapper */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4 md:px-8 pt-20">
        {/* Page heading */}
        <h1 className="text-3xl md:text-5xl text-white mb-12 text-center font-extrabold">
          My Projects
        </h1>

        {/* Cards grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-screen-lg">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* Project image with border overlay */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {/* Overlay border */}
                <div className="absolute inset-0 border-4 border-white rounded-md"></div>
              </div>

              {/* Project title */}
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              {/* Project description */}
              <p className="mb-4 text-sm text-gray-300">
                {project.description}
              </p>
              {/* Project duration */}
              <p className="text-gray-400 mb-4 text-sm">{project.duration}</p>
              {/* Project link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-500 transition duration-200"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v9.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L9 13.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute left-0 top-0 bottom-0 flex items-center w-fit md:px-10">
        <Navbar />
      </nav>
    </Section>
  );
};

export default ProjectsPage;
