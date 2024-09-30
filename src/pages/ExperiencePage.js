import React, { useState } from "react";
import Section from "../components/Section";
import Navbar from "../components/Navbar";

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

  return (
    <Section>
      <div className="text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl text-gray-800 mb-8">Experience</h1>
        <div className="flex flex-col md:flex-row">
      
          <div className="w-full md:w-1/3">
            <div className="flex flex-wrap md:justify-start space-x-6 space-y-2 md:space-y-0 md:space-x-0">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(experience)}
                  className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  {experience.company}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
            {selectedExperience && (
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold mb-2">
                  {selectedExperience.role}
                </h2>
                <h3 className="text-lg font-medium text-gray-600 mb-1">
                  {selectedExperience.company}
                </h3>
                <p className="text-gray-500 mb-2">
                  {selectedExperience.duration}
                </p>
                <p className="text-gray-500 mb-4">
                  {selectedExperience.location}
                </p>
                <ul className="list-disc list-inside">
                  {selectedExperience.description.map((desc, i) => (
                    <li key={i} className="text-gray-700">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperiencePage;
