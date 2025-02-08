import React, { Children } from "react";
import projects from "../assets/projects.json";
import { motion } from "framer-motion";
import ScrollIndicator from "../../ui/ScrollIndicator";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// card component
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={`/images/${project.image}`}
          alt={project.name}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-102 md:w-[300px] "
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">{project.name}</div>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black/50 p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex relative scroll-target min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 pd:py-24 pb-20"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <ScrollIndicator target="#contact" />
    </section>
  );
};

export default Projects;
