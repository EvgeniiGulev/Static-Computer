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
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const mouseClickAudioRef = useRef(new Audio(mouseClickSound));
  mouseClickAudioRef.current.volume = 0.6;
  mouseClickAudioRef.current.playbackRate = 2;

  const keyPressAudioRef = useRef(new Audio(keyPressSound));
  keyPressAudioRef.current.volume = 0.4;
  keyPressAudioRef.current.playbackRate = 5;

  const handleMouseClick = () => {
    if (isSoundOn) {
      mouseClickAudioRef.current.play();
    }
  };

  const handleKeyPressed = () => {
    if (isSoundOn) {
      keyPressAudioRef.current.play();
    }
  };

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
  const [computerScale, computerPosition, cameraPosition] =
    adjustComputerForScreen();

  return (
    <section className=" h-[100vh] w-[100vw] overflow-hidden">
      <Canvas
        className="w-full h-full bg-transparent"
        camera={{ fov: 80, position: cameraPosition }}
      >
        <ambientLight intensity={0.2} />
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

//onClick={() => setIsTurnedOn(!isTurnedOn)}
