/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'Projects' component, which displays information about the user's projects.
 * Date/Time: 2024-06-06
 */

import React from "react";

// Define the Projects component
const Projects = ({ onClick }) => {
  // Render the Projects component
  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll">
      {/* Title */}
      <h1 className="text-2xl highlight-item font-bold">Projects</h1>
      <hr className="line-break my-[7px]" />
      {/* Description */}
      <p>
        Here are some of the open source projects I've had the opportunity to
        work on, alongside my diverse experience with both public and private
        projects throughout the years.
      </p>
      {/* Project 1: Computer Portfolio */}
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Computer Portfolio
      </p>
      <p className="w-[97.5%] h-max">
        This is my portfolio website which is styled to be like an old school
        computer. Made using javascript, react, tailwindcss & three/fiber.{" "}
        <span className="highlight-item text-sm">
          <a
            href={"https://github.com/EvgeniiGulev/Static-Computer"}
            target="_blank"
          >
            Visit Project!
          </a>
        </span>
      </p>
      {/* Project 2: Discord Anime Bot */}
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Discord Anime Bot
      </p>
      <p className="w-[97.5%] h-max">
        This is a{" "}
        <span className="text-purple-300">
          <a href="https://discord.com/" target="_blank">
            Discord
          </a>
        </span>{" "}
        bot that fetches [anime/character] data using the{" "}
        <span className="highlight-item">
          <a
            href="https://anilist.gitbook.io/anilist-apiv2-docs"
            target="_blank"
          >
            Anilist.co
          </a>
        </span>{" "}
        Api then returns it in the set{" "}
        <span className="text-purple-300">
          <a href="https://discord.com/" target="_blank">
            Discord
          </a>
        </span>{" "}
        channel. This project was made using javascript{" "}
        <span className="highlight-item text-sm">
          <a
            href="https://github.com/EvgeniiGulev/Discord-Anilist-Bot"
            target="_blank"
          >
            Visit Project!
          </a>
        </span>
      </p>
      {/* Return Home link */}
      <p
        className="text-lg font-bold text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => onClick("home")}
      >
        › Return Home
      </p>
    </div>
  );
};

// Export the Projects component
export default Projects;
