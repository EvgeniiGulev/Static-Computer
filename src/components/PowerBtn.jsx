/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'PowerBtn' component, which represents the power button of the Macintosh computer.
 * Date/Time: 2024-06-06
 */

import React, { useState, useEffect } from "react";
import iconPowerBtn from "../assets/icons/power-button.png";

// Define the PowerBtn component
const PowerBtn = ({ onClick }) => {
  // State variables to track window dimensions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Effect to update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to calculate dynamic styles for the power button position
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

  // Render the PowerBtn component
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

// Export the PowerBtn component
export default PowerBtn;
