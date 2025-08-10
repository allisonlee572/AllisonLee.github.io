import React, { useState } from "react";
import "./Carousel.css";
import VideoPreview from "../VideoPreview/VideoPreview"; // If you want to reuse your existing video preview component

const Carousel = ({ media }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  if (!media || media.length === 0) return null;

  const handlePrev = () => {
    setDirection("left");
    setIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const goToIndex = (i) => {
    setDirection(i > index ? "right" : "left");
    setIndex(i);
  };

  const currentItem = media[index];

  return (
    <div className="carousel">
      <div className={`carousel-image-wrapper slide-${direction}`}>
        {currentItem.type === "video" ? (
          // Use VideoPreview or <video> tag here
          <VideoPreview imageSrc={currentItem.thumbnail} videoSrc={currentItem.src} />
        ) : (
          <img
            src={currentItem.src}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        )}
      </div>
      <button className="carousel-button left" onClick={handlePrev}>
        ‹
      </button>
      <button className="carousel-button right" onClick={handleNext}>
        ›
      </button>
      <div className="carousel-dots">
        {media.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goToIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
