import React, { useState } from "react";
import "./BackgroundChanger.css";

const images = [
  "https://plus.unsplash.com/premium_photo-1708999261123-7650a53b2daf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719957936033-62a506c1af6d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695128782705-e8a6a49ea5ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const BackgroundImageChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const changeBackground = () => {
    const nextImage =
      images[(images.indexOf(backgroundImage) + 1) % images.length];
    setBackgroundImage(nextImage);
  };

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <button className="change-button" onClick={changeBackground}>
        Change Background
      </button>
    </div>
  );
};

export default BackgroundImageChanger;
