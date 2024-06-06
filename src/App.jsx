/**
 * Author: Evgenii Gulev
 * Description: This file contains the main App component for a React application that renders a 3D Macintosh model
 *              with sound effects and interactive elements using @react-three/fiber and other custom components.
 * Date/Time: 2024-06-06
 */

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import Macintosh from "./models/Macintosh";
import MacScreen from "./components/MacScreen";
import mouseClickSound from "./assets/mp3/mouse-click.mp3";
import keyPressSound from "./assets/mp3/key-press.mp3";
import iconSoundOn from "./assets/icons/soundon.png";
import iconSoundOff from "./assets/icons/soundoff.png";
import PowerBtn from "./components/PowerBtn";

function App() {
  // State for tracking whether the computer is turned on
  const [isTurnedOn, setIsTurnedOn] = useState(false);

  // State for tracking whether the sound is enabled
  const [isSoundOn, setIsSoundOn] = useState(true);

  // Ref for mouse click audio
  const mouseClickAudioRef = useRef(new Audio(mouseClickSound));
  mouseClickAudioRef.current.volume = 0.6;
  mouseClickAudioRef.current.playbackRate = 2;

  // Ref for key press audio
  const keyPressAudioRef = useRef(new Audio(keyPressSound));
  keyPressAudioRef.current.volume = 0.4;
  keyPressAudioRef.current.playbackRate = 5;

  // Function to handle mouse clicks
  const handleMouseClick = () => {
    if (isSoundOn) {
      mouseClickAudioRef.current.play();
    }
  };

  // Function to handle key presses
  const handleKeyPressed = () => {
    if (isSoundOn) {
      keyPressAudioRef.current.play();
    }
  };

  // useEffect hook to add and remove event listeners for mouse clicks and key presses
  useEffect(() => {
    if (isSoundOn) {
      document.addEventListener("pointerdown", handleMouseClick);
      document.addEventListener("keydown", handleKeyPressed);
    } else {
      document.removeEventListener("pointerdown", handleMouseClick);
      document.removeEventListener("keydown", handleKeyPressed);
    }
    return () => {
      document.removeEventListener("pointerdown", handleMouseClick);
      document.removeEventListener("keydown", handleKeyPressed);
    };
  }, [isSoundOn]);

  // Function to adjust the computer model based on the screen size
  const adjustComputerForScreen = () => {
    let computerScale = [0.05, 0.05, 0.05];
    let computerPosition = [0, -0.25, 0];
    let cameraPosition = [0, 0, 3.5];

    if (window.innerWidth < 768) {
      cameraPosition = [0, 0, 3];
    } else {
      cameraPosition = [0, 0, 2.8];
    }
    return [computerScale, computerPosition, cameraPosition];
  };

  // Destructuring the values from adjustComputerForScreen function
  const [computerScale, computerPosition, cameraPosition] =
    adjustComputerForScreen();

  return (
    <section className=" h-[100vh] w-[100vw] overflow-hidden">
      <Canvas
        className="w-full h-full bg-transparent"
        camera={{ fov: 80, position: cameraPosition }}
      >
        <Suspense fallback={<Loader />}>
          <Macintosh position={computerPosition} scale={computerScale} />
        </Suspense>
      </Canvas>
      <div className="bottom-1 left-1 absolute flex w-[40px] h-[40px] justify-center items-center text-center border-black border-radius-20px">
        <img
          src={isSoundOn ? iconSoundOn : iconSoundOff}
          alt="soundIcon"
          className="cursor-pointer"
          onClick={() => setIsSoundOn(!isSoundOn)}
        />
      </div>
      <PowerBtn onClick={() => setIsTurnedOn(!isTurnedOn)} />
      <MacScreen isTurnedOn={isTurnedOn} />
      <Intro />
    </section>
  );
}

export default App;
