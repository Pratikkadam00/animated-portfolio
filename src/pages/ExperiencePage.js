import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Section from "../components/Section";

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Node.js Developer",
      company: "Custom Travel Solutions",
      duration: "11/2023 - 05/2024",
      location: "Pune, Maharashtra",
      description: [
        "Developed and maintained key modules for hotel, flight, car, activity, and vacation rental bookings in a B2B project.",
        "Integrated Zoho CRM from scratch, improving customer data management accuracy by 20%.",
        "Implemented a calendar invite feature, enhancing user engagement.",
        "Deployed production-ready solutions using Docker and microservices architecture on AWS.",
        "Gained proficiency in SQL and Node.js for managing and optimizing production-level code.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Valueadd Softtech & Systems Pvt",
      duration: "03/2023 - 04/2023",
      location: "Pune, Maharashtra",
      description: [
        "Developed a full-stack Movie Rental web app using React.js for the frontend and Feathers.js for the backend.",
        "Designed and implemented RESTful APIs and database schemas for efficient data handling.",
        "Integrated user authentication and authorization, ensuring secure access to the application.",
        "Collaborated with cross-functional teams to deliver features in an Agile environment.",
      ],
    },
    {
      role: "Project Trainee",
      company: "Yougetplaced",
      duration: "09/2022 - 02/2023",
      location: "Remote, India",
      description: [
        "Received hands-on training in the MERN stack and built a Stack Overflow clone from scratch.",
        "Acquired practical experience with MongoDB, Express.js, React.js, and Node.js.",
        "Developed a deep understanding of full-stack development and web application deployment.",
      ],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectExperience = (experience) => {
    setSelectedExperience(experience);
    setDropdownOpen(false);
  };

  return (
    <Section>
      <div className="flex flex-col h-screen w-full bg-black text-green-400 p-6 md:p-10 lg:p-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Experience
        </h1>

        {/* Dropdown for selecting company */}
        <div className="relative w-full md:w-1/3 mx-auto mb-6">
          <button
            onClick={toggleDropdown}
            className="w-full bg-gray-900 text-green-400 py-3 px-4 rounded-lg shadow-md flex justify-between items-center"
          >
            {selectedExperience
              ? selectedExperience.company
              : "Select a Company"}
            <span className="ml-2">{dropdownOpen ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen && (
            <motion.ul
              className="absolute w-full bg-gray-900 text-green-400 mt-2 rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  onClick={() => selectExperience(experience)}
                  className="py-2 px-4 hover:bg-green-500 hover:text-white cursor-pointer"
                >
                  {experience.company}
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Experience details card */}
        <div className="w-full md:w-2/3 mx-auto">
          <motion.div
            className={`bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg transition-all ease-in-out`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: selectedExperience ? 1 : 0,
              height: selectedExperience ? "auto" : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {selectedExperience && (
              <>
                <h2 className="text-2xl font-bold mb-3 text-green-400">
                  {selectedExperience.role}
                </h2>
                <h3 className="text-lg font-semibold text-green-300 mb-1">
                  {selectedExperience.company}
                </h3>
                <p className="text-gray-400 mb-2">
                  {selectedExperience.duration}
                </p>
                <p className="text-gray-400 mb-4">
                  {selectedExperience.location}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedExperience.description.map((desc, i) => (
                    <li key={i} className="text-gray-300">
                      {desc}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ExperiencePage;
