import Section from "../components/Section";

const SkillsPage = () => {
  const skills = [
    "React",
    "SQL",
    "REST API",
    "AWS",
    "Node",
    "MongoDB",
    "Docker",
    "TailwindCSS",
    "JavaScript",
  ];

  return (
    <Section>
      <div className="text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl text-white mb-8">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 py-4 px-6 rounded-xl shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsPage;
