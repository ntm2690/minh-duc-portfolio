import { useState } from "react";
import "./App.css";
import Information from "./components/Information/Information";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
