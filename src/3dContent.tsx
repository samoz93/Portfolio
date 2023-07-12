import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Lights } from "./environment/lights.tsx";
import { MainScene } from "./scenes/main.scene.tsx";

export const ThreeComponent = () => {
  // @ts-ignore
  const isDebug = process.env.NODE_ENV === "development";

  return (
    <Canvas
      camera={{
        fov: 75,
        // zoom: 0.1,
        position: [0, 5, 15],
        rotation: [Math.PI * 0.6, 0, 0],
      }}
      gl={{
        antialias: false,
        preserveDrawingBuffer: true,
      }}
    >
      <Lights />
      <OrbitControls enableZoom={isDebug} enablePan={isDebug} />
      <MainScene />
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};
