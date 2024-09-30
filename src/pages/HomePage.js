import { motion } from "framer-motion";
import Section from "../components/Section";
import Image1 from "../assets/Image1.jpg";
import Navbar from "../components/Navbar";

const nameVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const HomePage = () => {
  const name = "Pratik Kadam";

  return (
    <Section bgColor="bg-light-green">
      <div className="w-screen h-screen bg-[rgb(55,64,95)] p-8 flex flex-col justify-center items-center">
        <div className="flex w-full h-full bg-gradient-to-r from-[rgb(232,214,255)] via-[rgb(217,221,232)] to-[rgb(233,237,248)] shadow-2xl rounded-lg justify-center items-center p-8">
          <div className="flex flex-col items-center w-full">
            <motion.div
              className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-white overflow-hidden shadow-xl z-20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={Image1}
                alt="Pratik Kadam"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <div className="flex flex-wrap justify-center items-center mt-32 relative z-10">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-6xl font-bold text-black font-poppins shadow-2xl"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "-0.03em",
                    marginRight: letter === " " ? "8px" : "0px",
                  }}
                >
                  <span className="block relative shadow-2xl">{letter}</span>
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-gray-600 text-base md:text-xl mt-6 font-poppins font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
            >
              MERN Stack Developer
            </motion.p>

            <div className="flex justify-center space-x-4 mt-8">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:scale-125 transition-transform duration-500"
                whileHover={{ scale: 1.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.39 0-.19-.01-.83-.01-1.5-2.23.48-2.7-1.08-2.7-1.08-.36-.91-.87-1.15-.87-1.15-.71-.48.05-.47.05-.47.78.05 1.25.8 1.25.8.69 1.19 1.8.85 2.24.65.07-.5.27-.85.49-1.05-1.73-.2-3.55-.87-3.55-3.87 0-.85.3-1.54.79-2.08-.08-.2-.34-1.02.07-2.14 0 0 .65-.21 2.14.8A7.56 7.56 0 018 2.8a7.56 7.56 0 012.91.5c1.49-1.01 2.14-.8 2.14-.8.41 1.12.15 1.94.07 2.14.49.54.79 1.23.79 2.08 0 3-1.82 3.67-3.55 3.87.27.23.49.69.49 1.39 0 1-.01 1.81-.01 2.06 0 .22.15.46.55.39C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:scale-125 transition-transform duration-500"
                whileHover={{ scale: 1.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 0A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13A1.5 1.5 0 0016 14.5v-13A1.5 1.5 0 0014.5 0h-13zM4 14H2V6h2v8zm-1-9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 14h-2V9.5c0-1.39-.02-3.18-1.93-3.18C9.02 6.32 9 8.04 9 9.5V14H7V6h2v1.7c.28-.53 1.01-1.7 2.51-1.7C14.58 6 14 8.23 14 9.5V14z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomePage;
