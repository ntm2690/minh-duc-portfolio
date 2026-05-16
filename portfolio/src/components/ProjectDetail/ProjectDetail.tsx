import "./ProjectDetail.css";
import avatar from "../../assets/hero.png";
import { motion } from "framer-motion";

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="project-detail-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="detail-header">
        <div className="header-content">
          <div className="back-avatar" onClick={onBack} title="Quay lại trang chính">
            <img src={avatar} alt="Back to home" />
          </div>
          <div className="header-title">
            <span>{project.title}</span>
          </div>
        </div>
      </header>

      <div className="detail-body">
        <motion.div 
          className="detail-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="detail-image-container">
            <img src={project.image} alt={project.title} className="detail-image" />
          </div>
          
          <div className="detail-info">
            <h1>{project.title}</h1>
            
            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="detail-description">
              <p>{project.description}</p>
              {project.detail && (
                <div className="full-detail">
                  <p>{project.detail}</p>
                </div>
              )}
            </div>

            <button className="back-button" onClick={onBack}>
              Quay lại
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
