import React from "react";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const app = document.getElementById("app");
  return (
    <section className="text-4xl font-bold absolute flex top-[15%] left-0 right-0 justify-center items-center text-center">
      <h1 className="font-redditMono dark-gray">
        <Typewriter
          loop:true
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome To My Computer!")
              .pauseFor(3000)
              .deleteAll()
              .typeString("My name is Evgenii")
              .pauseFor(3000)
              .deleteAll()
              .typeString("I'm a 18 year-old developer")
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

export default Intro;
