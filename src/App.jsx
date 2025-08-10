import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AllProjects from "./Components/AllProjects/AllProjects";
import ProjectDetails from "./Components/AllProjects/ProjectDetails";

import "./icons/fontawesome";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProjects" element={<AllProjects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
