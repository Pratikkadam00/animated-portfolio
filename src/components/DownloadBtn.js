import { motion } from "framer-motion"; // Ensure you have framer-motion imported

const DownloadButton = () => {
  return (
    <motion.button
      className="bg-[rgb(46,46,46)] text-white rounded-2xl px-6 py-3 font-bold shadow-2xl hover:bg-[rgb(8,7,8)]"
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }} 
      transition={{ type: "spring", stiffness: 200, damping: 10 }} 
      onClick={() => {
        const link = document.createElement("a");
        link.href =
          "https://drive.google.com/uc?export=download&id=1yvFJyoAR7Uu4DvYbq5PKK0HXNNq9Jo6Z"; 
        link.download = "Resume_Pratik_Kadam.pdf"; 
        link.click();
      }}
    >
      Get Resume
    </motion.button>
  );
};

export default DownloadButton;
