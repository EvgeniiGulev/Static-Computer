import React, { useEffect } from "react";
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

const About = ({ onClick }) => {
  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll">
      <h1 className="text-2xl highlight-item font-bold">Evgenii Gulev, 18</h1>
      <hr className="line-break my-[7px]" />
      <p className="w-[97.5%] h-max">
        Software Engineer based in
        <span className="highlight-item"> Cyprus</span>, specializing in
        technical education through hands on learning and building applications.
        View my
        <span className="highlight-item">
          {" "}
          <a href={pdfCv} target="_blank">
            {" "}
            Resume.
          </a>
        </span>
      </p>
      <p className="highlight-item text-lg font-semibold mt-[7px]">My Skills</p>
      <div className="flex flex-wrap justify-center p-2 rounded-md">
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
        I've worked on all kinds of public/private open source projects,
        leveling up my skills and teaming up with smart people.{" "}
        <span className="highlight-item">
          <a href="https://github.com/EvgeniiGulev" target="_blank">
            My Projects!
          </a>
        </span>
      </div>
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Let's Talk!
      </p>
      <div>
        <p>
          Got a project idea or business inquiry you want to discuss?{" "}
          <span className="highlight-item">
            <a href="mailto:egulev.alt@gmail.com">Email me!</a>
          </span>
        </p>
      </div>
      <p
        class="text-lg font-bold text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => onClick("home")}
      >
        › Return Home
      </p>
    </div>
  );
};

export default About;
