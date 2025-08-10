import React, { useState } from "react";
import "./ProjectCard.css";
import VideoPreview from "../VideoPreview/VideoPreview";
import Carousel from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaClock } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const media = [];
  if (project.video) {
    media.push({
      type: "video",
      src: project.video,
      thumbnail: project.image,
    });
  }

  if (project.images && project.images.length > 0) {
    project.images.forEach((img) =>
      media.push({
        type: "image",
        src: img,
      })
    );
  }
  const onlyVideo = media.length === 1 && media[0].type === "video";

  return (
    <div key={project.id} className="project-card">
      <h3>{project.title}</h3>
      <div className="project-tags">
        {project.teamSize && (
          <span className="tag">
            <FaUserFriends className="tag-icon" />
            {project.teamSize}
          </span>
        )}
        {project.duration && (
          <span className="tag">
            <FaClock className="tag-icon" />
            {project.duration}
          </span>
        )}
        {project.techStack &&
          project.techStack.map((tech, idx) => (
            <span key={idx} className="tech">
              {tech}
            </span>
          ))}
      </div>
      {/* {project.video ? (
        <VideoPreview imageSrc={project.image} videoSrc={project.video} />
      ) : (
        <img src={project.image} alt={project.title} />
      )}

      {project.images && project.images.length > 0 && (
        <Carousel images={project.images} />
      )} */}

      {onlyVideo ? (
        <VideoPreview imageSrc={media[0].thumbnail} videoSrc={media[0].src} />
      ) : media.length > 0 ? (
        <Carousel media={media} />
      ) : (
        <img src={project.image} alt={project.title} />
      )}

      {project.description?.map((para, idx) => (
        <p key={idx} className="description">
          {para}
        </p>
      ))}
      <button onClick={() => navigate(`/projects/${project.slug}`)}>
        See More
      </button>
    </div>
  );
};

export default ProjectCard;
