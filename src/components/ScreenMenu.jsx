import React from "react";

const ScreenMenu = ({ onClick }) => {
  return (
    <div className="absolute py-[10px] w-full h-full text-center">
      <h1 className="text-4xl font-bold w-full highlight-item">Main Menu</h1>
      <ul className="pt-2">
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("about")}>
            About
          </span>
        </li>
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("projects")}>
            Projects
          </span>
        </li>
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("contact")}>
            Contact
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ScreenMenu;
