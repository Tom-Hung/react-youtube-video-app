import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelectVideo }) => {
  const { thumbnails, title } = video.snippet;

  return (
    <div className="video-item item" onClick={() => onSelectVideo(video)}>
      <img src={thumbnails.medium.url} alt="thumbnail" className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
