/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'About' component which provides information about the author, including skills, projects, and contact details.
 * Date/Time: 2024-06-06
 */

import React from "react";
import pdfCv from "../assets/pdf/CV.pdf";
import {
  css,
  git,
  github,
  html,
  javascript,
  react,
  tailwindcss,
  typescript,
  python,
} from "../constants";

// Define the About component
const About = ({ onClick }) => {
  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll">
      {/* Display the author's name and age */}
      <h1 className="text-2xl highlight-item font-bold">Evgenii Gulev, 18</h1>
      <hr className="line-break my-[7px]" />
      <p className="w-[97.5%] h-max">
        {/* Brief description of the author */}
        Software Engineer based in
        <span className="highlight-item"> Cyprus</span>, specializing in
        technical education through hands-on learning and building applications.
        View my
        <span className="highlight-item">
          {" "}
          <a href={pdfCv} target="_blank" rel="noopener noreferrer">
            {" "}
            Resume.
          </a>
        </span>
      </p>
      <p className="highlight-item text-lg font-semibold mt-[7px]">My Skills</p>
      <div className="flex flex-wrap justify-center p-2 rounded-md">
        {/* Render skill icons with links */}
        <a
          href="https://www.w3.org/Style/CSS/Overview.en.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={css} alt="CSS icon" className="skills-icon" />
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="Git icon" className="skills-icon" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub icon" className="skills-icon" />
        </a>
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={html} alt="HTML icon" className="skills-icon" />
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascript} alt="JavaScript icon" className="skills-icon" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={react} alt="React icon" className="skills-icon" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={tailwindcss}
            alt="Tailwind CSS icon"
            className="skills-icon"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={typescript} alt="TypeScript icon" className="skills-icon" />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={python} alt="Python icon" className="skills-icon" />
        </a>
      </div>
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Visit My Github
      </p>
      <div>
        {/* Information about the author's GitHub projects */}
        I've worked on all kinds of public/private open-source projects,
        leveling up my skills and teaming up with smart people.{" "}
        <span className="highlight-item">
          <a
            href="https://github.com/EvgeniiGulev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Projects!
          </a>
        </span>
      </div>
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Let's Talk!
      </p>
      <div>
        {/* Contact information */}
        <p>
          Got a project idea or business inquiry you want to discuss?{" "}
          <span className="highlight-item">
            <a href="mailto:egulev.alt@gmail.com">Email me!</a>
          </span>
        </p>
      </div>
      {/* Return home link */}
      <p
        className="text-lg font-bold text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => onClick("home")}
      >
        › Return Home
      </p>
    </div>
  );
};

export default About;
