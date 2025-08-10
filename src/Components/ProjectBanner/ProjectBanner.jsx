import React from "react";
import "./ProjectBanner.css";
import VideoPreview from "../VideoPreview/VideoPreview";
import Carousel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaClock } from "react-icons/fa";

const ProjectBanner = ({ project, color }) => {
  const navigate = useNavigate();

  return (
    <div className="banner-wrapper">
      <div
        className="holo-container"
        style={{ "--theme-color": color || "#ccc" }}
      >
        <div className="project-banner" style={{ background: color }}>
          <h3>{project.title}</h3>
          <div className="project-tags">
            <span className="tag">
              <FaUserFriends className="tag-icon" />
              {project.teamSize}
            </span>
            <span className="tag">
              <FaClock className="tag-icon" />
              {project.duration}
            </span>
          </div>
          <VideoPreview imageSrc={project.image} videoSrc={project.video} />
          {project.images && project.images.length > 0 && (
            <Carousel images={project.images} />
          )}
          <p>{project.description}</p>
          <button onClick={() => navigate(`/projects/${project.slug}`)}>
            See More
          </button>
        </div>
        <div className="banner-triangle" />
      </div>
    </div>
  );
};

export default ProjectBanner;
