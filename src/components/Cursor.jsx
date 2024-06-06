/**
 * Author: Evgenii Gulev
 * Description: This file defines a custom hook to track the mouse position on the screen.
 * Date/Time: 2024-06-06
 */

import { useEffect, useState } from "react";

// Define the custom cursor hook
const customCursor = () => {
  // State variable to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  // Effect to update mouse position on mouse move
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    // Add event listener for mouse move
    document.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []); // Empty dependency array ensures effect runs only once

  // Return mouse position
  return mousePosition;
};

// Export the custom cursor hook
export default customCursor;
