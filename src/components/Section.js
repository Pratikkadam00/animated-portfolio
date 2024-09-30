import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ children, bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className={`min-h-screen w-full ${bgColor} flex justify-center items-center overflow-auto`}
    >
      {children}
    </motion.div>
  );
};

export default Section;
