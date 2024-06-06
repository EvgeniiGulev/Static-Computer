/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'Loader' component, which displays a loading animation using HTML elements in a three.js scene.
 * Date/Time: 2024-06-06
 */

import { Html } from "@react-three/drei";
import React from "react";

// Define the Loader component
const Loader = () => {
  // Common classes for circle elements
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  // Render the Loader component
  return (
    <Html>
      {/* HTML div container for the loading animation */}
      <div className="flex">
        <div className="flex">
          {/* Three bouncing circles for loading animation */}
          <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
          <div
            className={`${circleCommonClasses} mr-1 animate-bounce200`}
          ></div>
          <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
      </div>
    </Html>
  );
};

// Export the Loader component
export default Loader;
