import React, { useState, useEffect } from "react";
import vhsVideo from "../assets/videos/vhs-video-2.mp4";
import ContactForm from "./ContactForm";
import ScreenMenu from "./ScreenMenu";
import About from "./About";
import Projects from "./Projects";

const MacScreen = ({ isTurnedOn }) => {
  const [isSelectedChoice, setIsSelectedChoice] = useState("home");
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

  const dynamicBoxStyles = () => {
    const topLeftX = 461;
    const topLeftY = 369;
    const width = 295;
    const height = 175;

    const scaleFactor = windowHeight / 945;

    const dynamicWidth = width * scaleFactor;
    const dynamicHeight = height * scaleFactor;

    const dynamicTop = topLeftY * scaleFactor;
    const dynamicLeft = (windowWidth - dynamicWidth) / 2;

    return {
      width: `${dynamicWidth}px`,
      height: `${dynamicHeight}px`,
      top: `${dynamicTop}px`,
      left: `${dynamicLeft}px`,
    };
  };

  const handleScreenMenuClick = (link) => {
    switch (link) {
      case "home":
        setIsSelectedChoice(link);
        break;
      case "about":
        setIsSelectedChoice(link);
        break;
      case "projects":
        setIsSelectedChoice(link);
        break;
      case "contact":
        setIsSelectedChoice(link);
        break;
      default:
        console.log("Unknown link clicked!");
    }
  };

  return (
    <div style={dynamicBoxStyles()} className="absolute rounded-sm">
      {isTurnedOn ? (
        <div className="font-redditMono silk">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="absolute w-full h-full object-cover"
          >
            <source src={vhsVideo} type="video/mp4" />
          </video>
          {isSelectedChoice === "home" ? (
            <ScreenMenu onClick={handleScreenMenuClick} />
          ) : null}
          {isSelectedChoice === "about" ? (
            <About onClick={handleScreenMenuClick} />
          ) : null}
          {isSelectedChoice === "projects" ? (
            <Projects onClick={handleScreenMenuClick} />
          ) : null}
          {isSelectedChoice === "contact" ? (
            <ContactForm onClick={handleScreenMenuClick} />
          ) : null}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MacScreen;
