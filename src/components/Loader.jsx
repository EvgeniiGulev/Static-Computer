import { Html } from "@react-three/drei";
const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <Html>
      <div className="flex">
        <div className="flex">
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

export default Loader;
