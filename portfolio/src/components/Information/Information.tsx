// src/components/Information/Information.jsx

import "./Information.css";

import avatar from "../../assets/hero.png";
import { motion } from "framer-motion";

import projects from "../../constants/projects";

import type { Project } from "../../types/project";
import ProjectCard from "../ProjectCard/ProjectCard";

interface InformationProps {
  onProjectClick: (project: Project) => void;
}

const Information = ({ onProjectClick }: InformationProps) => {
  return (
    <div className="information-wrapper">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="hero-content">
          <h1>Minh Duc</h1>

          <h2>Video Editor</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="contact">
            <span>Email: yourmail@gmail.com</span>
            <span>Phone: 0123456789</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="experience-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Experience</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </motion.div>

      <div className="project-section">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
