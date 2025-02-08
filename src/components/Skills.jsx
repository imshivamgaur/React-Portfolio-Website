import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import ScrollIndicator from "../../ui/ScrollIndicator"; // Assuming this is the scroll indicator component

const Skills = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="px-16 scroll-target relative text-white flex flex-col min-h-[80vh] w-full gap-16 md:gap-32 items-center mt-15 md:mt-20"
    >
      <div className="w-full md:w-12/12 lg:w-12/12 xl:w-8/12 flex flex-col items-center justify-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          Technologies
        </motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-8">
          {/* html */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoHtml5 className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-orange-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* css */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoCss3 className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-blue-800 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* javascript */}

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoJavascript className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-yellow-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* tailwind */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoTailwindCss className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-cyan-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* React */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoReact className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-cyan-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* nodejs */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoNodejs className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-green-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* typescript */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoTypescript className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-blue-800 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* MongoDb */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoMongodb className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-green-800 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* Git */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <FaGitAlt className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-red-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
          {/* Github */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <BiLogoGithub className="cursor-pointer text-[60px] sm:text-[80px] md:text-[100px] text-white-500 transition-all duration-300 hover:-translate-y-5" />
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <ScrollIndicator target="#projects" />
    </section>
  );
};

export default Skills;
