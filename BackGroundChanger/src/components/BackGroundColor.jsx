import React, { useState } from "react";

const BackGroundColor = () => {
  const [color, setColor] = useState("");

  
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  }

  const containerChanger = {
    BackGroundColor: 'color', 
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
  return (
    <div style={containerChanger}>
      <h1>Background Color Changer</h1>
      <input
        type="color"
        value={color}
        onChange={handleChangeColor} // Correct attribute name
        style={{ marginBottom: "20px" }}
      />
      <input
        type="text"
        value={color}
        onChange={handleChangeColor}
        placeholder="Enter a color"
      />
    </div>
  );
};

export default BackGroundColor;
