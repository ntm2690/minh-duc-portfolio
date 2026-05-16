// src/constants/projects.ts

// src/constants/projects.ts
import type { Project } from "../types/project";
import project1 from "../assets/hero.png";
import project2 from "../assets/hero.png";
import project3 from "../assets/hero.png";

const projects: Project[] = [
  {
    id: 1,
    title: "TunA Platform",
    image: project1,
    description: "AI-powered analytics platform for enterprise monitoring.",
    tech: ["ReactJS", "NodeJS", "ChartJS"],
    detail:
      "Built dashboard system, optimized performance, handled real-time data visualization and reusable architecture.",
  },

  {
    id: 2,
    title: "E-Commerce Dashboard",
    image: project2,
    description: "Admin dashboard with analytics and management system.",
    tech: ["React", "Redux", "Material UI"],
    detail:
      "Implemented responsive layout, charts, product management and authentication.",
  },

  {
    id: 3,
    title: "Portfolio Website",
    image: project3,
    description: "Modern animated personal portfolio.",
    tech: ["React", "Framer Motion"],
    detail: "Focused on animation, dark UI and smooth user interaction.",
  },
];

export default projects;
