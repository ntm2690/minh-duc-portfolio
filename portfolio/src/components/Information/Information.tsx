// src/components/Information/Information.jsx

import "./Information.css";

import avatar from "../../assets/hero.png";
import { motion } from "framer-motion";

import projects from "../../constants/projects";

import type { Project } from "../../types/project";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import WorkHighlight from "../WorkHighlight/WorkHighlight";

interface InformationProps {
  onProjectClick: (project: Project) => void;
}

const Information = ({ onProjectClick }: InformationProps) => {
  const placeholderImages = [avatar, avatar, avatar, avatar];
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

          <h2>Professional Video Editor</h2>

          <p>
            Specializing in high-impact storytelling through video. Experienced
            in creative post-production, short-form social content, and
            enterprise video solutions. Bringing ideas to life with precision
            and rhythm.
          </p>

          <div className="contact">
            <span>Email: minhduc.editor@gmail.com</span>
            <span>Phone: 0123 456 789</span>
          </div>
        </div>
      </motion.div>

      <WorkHighlight
        title="Short Video"
        description="Captivating short-form content tailored for TikTok, Reels, and Shorts. Optimized for high engagement, trending rhythms, and visual storytelling that hooks viewers in the first seconds."
        images={placeholderImages}
      />

      <WorkHighlight
        title="Post Production"
        description="Comprehensive video post-production including color grading, sound design, and advanced visual effects. Transforming raw footage into polished, professional masterpieces."
        images={placeholderImages}
        reverse={true}
      />

      <motion.div
        className="experience-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Experience</h2>

        <p>
          5+ years in the creative industry, working with top brands and
          creators to deliver visually stunning content. Expert in Adobe
          Premiere Pro, After Effects, and Davinci Resolve.
        </p>
      </motion.div>

      <div className="project-section">
        <h2>Projects</h2>

        <ProjectSlider projects={projects} onProjectClick={onProjectClick} />
      </div>
    </div>
  );
};

export default Information;
