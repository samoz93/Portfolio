import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { AudioVisualizerController } from "../services/audio.vis.service.ts";
import { audio_frag, audio_vertix } from "../shaders/index.ts";

const Shader = shaderMaterial(
  {
    uTime: 0,
    uFrequency: 0,
  },
  audio_vertix,
  audio_frag
);

extend({ Shader });
export const AudioVisSphere = () => {
  const shader = useMemo(() => new Shader(), []);

  useFrame((state, delta) => {
    shader.uTime += delta * 0.1;
    AudioVisualizerController.updateMaterialUniform(shader);
  });

  return (
    <mesh material={shader}>
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
};
