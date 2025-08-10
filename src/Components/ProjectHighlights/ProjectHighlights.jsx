import React from "react";
import "./ProjectHighlights.css";
import theme_pattern from "../../assets/template/theme_pattern.svg";
// import Highlights_Data from "../../assets/data/highlights_data";
import projects from "../../assets/data/allprojects_data";

import arrow_icon from "../../assets/template/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectHighlights = () => {
  const navigate = useNavigate();
  return (
    <div id="highlights" className="highlights">
      <div className="parallax-wrapper">
        {/* <div className="sky"></div> */}
        {/* <div className="stars"></div> */}
        {/* <div className="clouds"></div>
        <div className="reflection"></div> */}

        <div className="main-content">
          <div className="highlights-title">
            <h1>Project Highlights</h1>
            {/* <img src={theme_pattern} alt="theme pattern" /> */}
          </div>
          <div className="highlights-hexagon-wrapper">
            <svg
              className="hexagon-outline"
              /*Set coordinate system for SVG */
              viewBox="0 0 600 600"
              width="100%"
              height="100%"
            >
              <polygon
                /*coordinates: (200, 40), (360, 120), etc. */
                points="300,60 540,180 540,420 300,540 60,420 60,180"
                fill="none" /*hexagon is not filled */
                stroke="#e7f3ae" /*sets outline color */
                strokeWidth="4"
                strokeDasharray="8,8" /*makes outline dotted */
              />
            </svg>
            {projects
              .filter((project) => project.highlightID !== undefined)
              .slice(0, 6)
              .map((project, idx) => (
                // hex-card-${idx} is for positioning
                // key helps React efficiently update the list
                <div className={`hex-card hex-card-${idx}`} key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            <div className="button-wrapper">
              <button
                className="button"
                onClick={() => navigate("/allProjects")}
              >
                See all projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
