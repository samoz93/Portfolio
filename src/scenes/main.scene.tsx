import { Float } from "@react-three/drei";
import { AudioVisSphere } from "../objects/audio.vis.sphere.tsx";
import { Floor } from "../objects/floor.tsx";
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
        <TextBended headUp={0} />
        <TextBended headUp={Math.PI} />
      </Float>
      <Floor />
    </>
  );
};
