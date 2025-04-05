import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import MastersProjects from "./pages/MastersProjects";
import NasaProjects from "./pages/NasaProjects";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/masters-projects" element={<MastersProjects />} />
            <Route path="/nasa-projects" element={<NasaProjects />} />
            <Route path="/publications" element={<NasaProjects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

