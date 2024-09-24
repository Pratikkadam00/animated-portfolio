"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

const AnimatedCard = ({
  title,
  subtitle,
  buttonText,
  buttonOnClick,
  children,
}) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-6 bg-white rounded-lg shadow-lg"
      >
        <div className="text-3xl md:text-7xl font-bold text-center">
          {title}
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-600 text-center">
          {subtitle}
        </div>
        {children}
        {buttonText && (
          <button
            onClick={buttonOnClick}
            className="bg-black rounded-full w-fit text-white px-4 py-2"
          >
            {buttonText}
          </button>
        )}
      </motion.div>
    </AuroraBackground>
  );
};

export default AnimatedCard;
