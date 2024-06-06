/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'ScreenMenu' component, which displays the main menu options.
 * Date/Time: 2024-06-06
 */

import React from "react";

// Define the ScreenMenu component
const ScreenMenu = ({ onClick }) => {
  // Render the ScreenMenu component
  return (
    <div className="absolute py-[10px] w-full h-full text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold w-full highlight-item">Main Menu</h1>
      <ul className="pt-2">
        {/* About */}
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("about")}>
            About
          </span>
        </li>
        {/* Projects */}
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("projects")}>
            Projects
          </span>
        </li>
        {/* Contact */}
        <li className="list-item">
          <span className="hover:underline" onClick={() => onClick("contact")}>
            Contact
          </span>
        </li>
      </ul>
    </div>
  );
};

// Export the ScreenMenu component
export default ScreenMenu;
