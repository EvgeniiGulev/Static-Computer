import React from "react";

const Projects = ({ onClick }) => {
  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll">
      <h1 className="text-2xl highlight-item font-bold">Projects</h1>
      <hr className="line-break my-[7px]" />
      <p>
        Here are some of the open source projects I've had the opportunity to
        work on, alongside my diverse experience with both public and private
        projects throughout the years.
      </p>
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Computer Portfolio
      </p>
      <p className="w-[97.5%] h-max">
        This is my portfolio website which is styled to be like an old school
        computer. Made using javascript, react, tailwindcss & three/fiber.{" "}
        <span className="highlight-item text-sm">
          <a href={"https://github.com/EvgeniiGulev/Discord-Anilist-Bot"}>
            Visit Project!
          </a>
        </span>
      </p>
      <p className="highlight-item text-lg font-semibold mt-[7px]">
        Discord Anime Bot
      </p>
      <p className="w-[97.5%] h-max">
        This is a{" "}
        <span className="text-purple-300">
          <a href="https://discord.com/">Discord</a>
        </span>{" "}
        bot that fetches [anime/character] data using the{" "}
        <span className="highlight-item">
          <a href={"https://anilist.gitbook.io/anilist-apiv2-docs"}>
            Anilist.co
          </a>
        </span>{" "}
        Api then returns it in the set{" "}
        <span className="text-purple-300">
          <a href="https://discord.com/">Discord</a>
        </span>{" "}
        channel. This project was made using javascript{" "}
        <span className="highlight-item text-sm">
          <a href={"https://github.com/EvgeniiGulev/Discord-Anilist-Bot"}>
            Visit Project!
          </a>
        </span>
      </p>
      <p
        class="text-lg font-bold text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => onClick("home")}
      >
        › Return Home
      </p>
    </div>
  );
};

export default Projects;
