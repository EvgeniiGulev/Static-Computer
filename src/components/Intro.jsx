/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'Intro' component, which displays an introductory message using the Typewriter effect.
 * Date/Time: 2024-06-06
 */

import React from "react";
import Typewriter from "typewriter-effect";

// Define the Intro component
const Intro = () => {
  // Get the element with id 'app'
  const app = document.getElementById("app");

  // Render the Intro component
  return (
    <section className="text-4xl font-bold absolute flex top-[15%] left-0 right-0 justify-center items-center text-center">
      {/* Display the typewriter effect */}
      <h1 className="font-redditMono dark-gray">
        <Typewriter
          loop={true}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome To My Computer!")
              .pauseFor(3000)
              .deleteAll()
              .typeString("My name is Evgenii")
              .pauseFor(3000)
              .deleteAll()
              .typeString("I'm an 18 year-old developer")
              .pauseFor(3000)
              .deleteAll()
              .typeString("Turn on the computer to Start...")
              .start();
          }}
        />
      </h1>
    </section>
  );
};

// Export the Intro component
export default Intro;
