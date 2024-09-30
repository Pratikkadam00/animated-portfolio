import Section from "../components/Section";
import { motion } from "framer-motion";

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
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black px-4 py-12 md:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl text-white mb-12 font-extrabold tracking-wide text-center">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-white text-black rounded-xl shadow-lg hover:shadow-2xl p-6 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              onClick={() => {
              }}
            >
              <p className="text-xl font-semibold text-center">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsPage;
