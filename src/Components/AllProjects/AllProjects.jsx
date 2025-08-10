import React, { useState } from "react";
import "./AllProjects.css";
import NavBar from "../NavBar/NavBar";

import projects from "../../assets/data/allprojects_data";
// import VideoPreview from "../VideoPreview/VideoPreview";
// import Carousel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
// import { FaUserFriends, FaClock } from "react-icons/fa";

import ProjectCard from "../ProjectCard/ProjectCard";

const categories = [
  "all",
  "game-dev",
  "web-dev",
  "board-game",
  "hardware",
  "cybersecurity",
  "uiux",
  "cad",
  "art",
];

const artSubcategories = ["pressure", "studies", "pixel art"];

const overrideCategoryLabels = {
  uiux: "UI/UX",
  cad: "CAD",
  pressure: "Pressure - A Themed Portfolio",
};

const AllProjects = () => {
  // Declaring state varluable selectedCategory, that is initialized to "All"
  // setSelectedCategory is the function we call to update it
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const navigate = useNavigate();
  const formatCategory = (cat) => {
    if (!cat) return "all";

    // Check if there's an override label
    if (overrideCategoryLabels[cat]) return overrideCategoryLabels[cat];

    return cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // If selected category is All, return full project list
  // Otherwise, filter the list
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "art"
        ? selectedSubcategory
          ? projects.filter((p) => p.type === selectedSubcategory)
          : projects.filter((p) => artSubcategories.includes(p.type))
        : projects.filter((p) => p.type === selectedCategory);

  return (
    <div className="all-projects">
      <NavBar />
      <div className="parallax-wrapper">
        <div className="sky"></div>
        {/* <div className="stars"></div> */}
        <div className="clouds"></div>
        <div className="reflection"></div>

        <div className="main-content">
          <h1 className="title">All Projects</h1>
          <div style={{ marginBottom: "20px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory(null); // Reset subcategory whenever a main category is clicked
                }}
                className={`category-button ${selectedCategory === cat ? "selected" : ""}`}
              >
                {formatCategory(cat)}
              </button>
            ))}
          </div>

          {/* Show subcategories if art is selected */}
          {/*Another way to read:
          let filteredProjects = [];

            if (selectedCategory === "all") {
              filteredProjects = projects;
            } else if (selectedCategory === "art" && selectedSubcategory) {
              filteredProjects = projects.filter((p) => p.type === selectedSubcategory);
            } else {
              filteredProjects = projects.filter((p) => p.type === selectedCategory);
            }
          */}
          {/* The () mean show the code inside if the selected category is art */}
          {selectedCategory === "art" && (
            <div className="subcategories-wrapper animate-tree">
              <div className="tree-connector" />
              <div className="subcategory-buttons">
                {artSubcategories.map((subcat) => (
                  <button
                    key={subcat}
                    onClick={() => setSelectedSubcategory(subcat)}
                    className={`category-button ${selectedSubcategory === subcat ? "selected" : ""}`}
                  >
                    {formatCategory(subcat)}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            className={`project-grid ${filteredProjects.length === 1 ? "single" : ""}`}
          >
            {filteredProjects.map((project) => (
              // project={project} s how we pass props to the ProjectCard component
              // We're giving the entire project object to ProjectCard
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div class="footer">
          <h5>© 2025 Allison Lee</h5>
          <h5>Designed and coded by yours truly ;)</h5>
        </div>
      </div>
    </div>
  );
};
export default AllProjects;
