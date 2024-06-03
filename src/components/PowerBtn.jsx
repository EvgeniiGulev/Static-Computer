import React, { useState, useEffect } from "react";
import iconPowerBtn from "../assets/icons/power-button.png";

const PowerBtn = ({ onClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dynamicPositionStyles = () => {
    const topLeftX = 610;
    const topLeftY = 620;
    const width = 40;
    const height = 40;

    const scaleFactor = windowHeight / 945;

    const dynamicWidth = width * scaleFactor;
    const dynamicHeight = height * scaleFactor;

    const dynamicTop = topLeftY * scaleFactor;
    const dynamicLeft = (windowWidth - dynamicWidth - 200) / 2; // adjusted dynamicLeft

    return {
      position: "absolute",
      width: `${dynamicWidth}px`,
      height: `${dynamicHeight}px`,
      top: `${dynamicTop}px`,
      left: `${dynamicLeft}px`,
    };
  };

  return (
    <div
      style={dynamicPositionStyles()}
      className="flex justify-center items-center text-center"
      onClick={onClick}
    >
      <img src={iconPowerBtn} alt="powerBtn" className="cursor-pointer" />
    </div>
  );
};

export default PowerBtn;
