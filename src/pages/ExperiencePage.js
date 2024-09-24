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

  return (
    <Section bgColor="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl text-white mb-8">My Experience</h1>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold mb-2">{experience.role}</h2>
              <h3 className="text-xl text-gray-600">{experience.company}</h3>
              <p className="text-gray-600">{experience.duration}</p>
              <p className="text-gray-600 mb-4">{experience.location}</p>
              <ul className="list-disc list-inside">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperiencePage;
