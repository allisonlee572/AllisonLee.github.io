import React, { useState } from "react";
import "./VideoPreview.css";

const VideoPreview = ({ imageSrc, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="preview-container">
      {!isPlaying ? (
        <div
          className="preview-image-wrapper"
          onClick={videoSrc ? handlePlay : undefined}
        >
          <img src={imageSrc} alt="Project preview" className="preview-image" />
          {videoSrc && <button className="preview-play-button">▶</button>}
        </div>
      ) : (
        <video className="preview-video" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPreview;
