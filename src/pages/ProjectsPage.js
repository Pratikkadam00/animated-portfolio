import Section from "../components/Section";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Podcast Management",
      description:
        "Study and Learning Purpose. Secure login and user management. Create and manage multiple podcast projects. Add, edit, and delete files, YouTube links, and RSS feeds.",
      link: "https://gama-frontend-chi.vercel.app/",
      duration: "06/2023 - 10/2023",
    },
    {
      title: "Covid-19 Tracker",
      description:
        "Covid19 Tracker built for educational purposes using React and APIs from disease.sh to fetch live data.",
      link: "https://pratikkadam00.github.io/Covid19-tracker/",
      duration: "01/2022 - 03/2022",
    },
  ];

  return (
    <Section
      
      bgColor="bg-gradient-to-r from-indigo-500 to-purple-600"
    >
      <div>
        <div className="text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl text-white mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <p className="text-gray-600 mb-4">{project.duration}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsPage;
