import { useState } from "react";
import "./App.css";
import Information from "./components/Information/Information";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Footer from "./components/Footer/Footer";
import type { Project } from "./types/project";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <Information onProjectClick={setSelectedProject} />
      )}
      <Footer />
    </>
  );
}

export default App;
