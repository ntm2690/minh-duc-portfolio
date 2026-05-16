import { motion } from "framer-motion";
import "./WorkHighlight.css";

interface WorkHighlightProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const WorkHighlight = ({ title, description, images, reverse = false }: WorkHighlightProps) => {
  return (
    <div className={`highlight-container ${reverse ? "reverse" : ""}`}>
      <motion.div 
        className="highlight-info"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="highlight-title">{title}</h2>
        <div className="title-underline"></div>
        <p className="highlight-desc">{description}</p>
        <div className="highlight-tags">
          <span>High Quality</span>
          <span>Fast Delivery</span>
          <span>Creative Editing</span>
        </div>
      </motion.div>

      <motion.div 
        className="highlight-gallery"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className={`gallery-item item-${index + 1}`}
              whileHover={{ scale: 1.05, zIndex: 1 }}
            >
              <img src={img} alt={`${title} ${index}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkHighlight;
