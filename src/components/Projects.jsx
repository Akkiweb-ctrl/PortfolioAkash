import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <Project project={project} ></Project>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
