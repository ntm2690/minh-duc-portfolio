// src/components/ProjectCard/ProjectCard.jsx

import "./ProjectCard.css";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;