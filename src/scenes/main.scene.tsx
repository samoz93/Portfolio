import { Float } from "@react-three/drei";
import { AudioVisSphere } from "../objects/audio.vis.sphere.tsx";
import { TextBended } from "../objects/text.bended.tsx";

export const MainScene = () => {
  return (
    <>
      <Float
        args={[]}
        speed={2}
        rotationIntensity={2}
        floatIntensity={5}
        floatingRange={[0.1, 0.3]}
      >
        <AudioVisSphere />
        <TextBended text={"Under Construction"} headUp={0} />
        <TextBended text={"Coming Soon!"} headUp={Math.PI} />
      </Float>
      {/* <Floor /> */}
    </>
  );
};
