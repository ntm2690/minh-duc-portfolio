import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../types/project";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectSlider.css";

interface ProjectSliderProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectSlider = ({ projects, onProjectClick }: ProjectSliderProps) => {
  const [index, setIndex] = useState(0);
  // const [width, setWidth] = useState(0);
  // const carousel = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (carousel.current) {
  //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //   }
  // }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-controls">
        <button
          onClick={prevSlide}
          className="control-btn"
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="slider-view">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="active-slide-container"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="card-wrapper main-card">
                <ProjectCard
                  project={projects[index]}
                  onClick={onProjectClick}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="side-cards">
            <div className="card-wrapper prev-card" onClick={prevSlide}>
              <ProjectCard
                project={
                  projects[(index - 1 + projects.length) % projects.length]
                }
                onClick={() => {}}
              />
            </div>
            <div className="card-wrapper next-card" onClick={nextSlide}>
              <ProjectCard
                project={projects[(index + 1) % projects.length]}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        <button onClick={nextSlide} className="control-btn" aria-label="Next">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="pagination">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            animate={{ scale: i === index ? 1.5 : 1 }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
