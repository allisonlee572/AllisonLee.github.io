import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../assets/data/allprojects_data";
import "./ProjectDetails.css";
import NavBar from "../NavBar/NavBar";
import { FaUserFriends, FaClock } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="container">Project not found!</p>;

  const media = [];
  if (project.images && project.images.length > 0) {
    project.images.forEach((img) =>
      media.push({
        type: "image",
        src: img,
      })
    );
  }

  return (
    <div className="project-details">
      <NavBar />
      <div className="titleWrapper">
        <h1>{project.title}</h1>
      </div>
      <p className="category">Category: {project.type}</p>

      <div className="project-tags">
        <span className="tag">
          <FaUserFriends className="tag-icon" />
          {project.teamSize}
        </span>
        <span className="tag">
          <FaClock className="tag-icon" />
          {project.duration}
        </span>

        {project.techStack?.map((tech, idx) => (
          <span key={idx} className="tech">
            {tech}
          </span>
        ))}
      </div>

      <p className="description">{project.description}</p>

      {/* {project.image && (
        <img className={"image"} src={project.image} alt={project.title} />
      )} */}

      {/* {project.images?.length > 0 && <Carousel images={project.images} />} */}
      {media.length > 0 ? (
        <Carousel media={media} />
      ) : (
        <img src={project.image} alt={project.title} />
      )}

      {project.video && (
        <iframe
          className="video"
          src={project.video}
          title={project.title}
          allowFullScreen
        ></iframe>
      )}

      {project.extraDescription?.map((para, idx) => (
        <p key={idx} className="description">
          {para}
        </p>
      ))}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="buttonLink"
      >
        {project.buttons?.length > 0 && (
          <div className="button-group">
            {project.buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                <button className="button">{btn.label}</button>
              </a>
            ))}
          </div>
        )}
      </a>
    </div>
  );
}

export default ProjectDetails;
