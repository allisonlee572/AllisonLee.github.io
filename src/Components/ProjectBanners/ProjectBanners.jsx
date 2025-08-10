import React from "react";
import "./ProjectBanners.css";
import theme_pattern from "../../assets/template/theme_pattern.svg";
// import Banners_Data from "../../assets/data/banners_data";
import projects from "../../assets/data/allprojects_data";

import ProjectBanner from "../ProjectBanner/ProjectBanner";

import arrow_icon from "../../assets/template/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

const ProjectBanners = () => {
  const navigate = useNavigate();
  const bannerColors = ["#f1c0e6", "#d7c7fd", "#c7fdfa", "#d7c7fd", "#f1c0e6"];
  // const bannerColors = ["#210741", "#072041", "#410720", "#072041", "#361361"];

  return (
    <div id="banners" className="banners">
      <div className="parallax-wrapper">
        <div className="sky"></div>
        {/* <div className="stars"></div>
        <div className="clouds"></div>
        <div className="reflection"></div> */}
        <div className="main-content">
          <div className="banners-title">
            <h1>Project Highlights</h1>
            {/* <img src={theme_pattern} alt="theme pattern" /> */}
          </div>

          <div className="banners-container">
            {projects
              .filter((project) => project.highlightID !== undefined)
              .slice(0, 6)
              .map((project, idx) => (
                // hex-card-${idx} is for positioning
                // key helps React efficiently update the list
                <div
                  key={project.id}
                  className={`banner-wrapper banner-${idx}`}
                >
                  <ProjectBanner project={project} color={bannerColors[idx]} />
                  {idx === 2 && (
                    <div className="button-wrapper">
                      <button
                        className="button"
                        onClick={() => navigate("/allProjects")}
                      >
                        See all projects
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanners;
