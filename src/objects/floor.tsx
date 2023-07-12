import { shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { AudioVisualizerController } from "../services/audio.vis.service.ts";
import { floor_frag, floor_vertix } from "../shaders/index.ts";

const Shader = shaderMaterial(
  {
    uTime: 0,
    uFrequency: 0,
  },
  floor_vertix,
  floor_frag,
  (material) => {
    material.wireframe = true;
  }
);

export const Floor = () => {
  const shader = useMemo(() => new Shader(), []);

  useFrame(() => {
    shader.uniforms.uTime.value += 0.01;
    AudioVisualizerController.updateMaterialUniform(shader);
  });

  return (
    <mesh
      rotation={[-Math.PI * 0.2, 0, 0]}
      position={[0, -2, -10]}
      material={shader}
    >
      <planeGeometry attach="geometry" args={[100, 100, 100, 100]} />
    </mesh>
  );
};
