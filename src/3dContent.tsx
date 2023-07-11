import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lights } from "./environment/lights.tsx";
import { MainScene } from "./scenes/main.scene.tsx";

export const ThreeComponent = () => {
  return (
    <Canvas gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}>
      <Lights />
      <OrbitControls />
      <MainScene />
    </Canvas>
  );
};
