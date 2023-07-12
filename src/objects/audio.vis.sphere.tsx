import { shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { AudioVisualizerController } from "../services/audio.vis.service.ts";
import { audio_frag, audio_vertix } from "../shaders/index.ts";
import { SphereRadius } from "../state/index.ts";

const Shader = shaderMaterial(
  {
    uTime: 0,
    uFrequency: 0,
  },
  audio_vertix,
  audio_frag
);

const geometry = new THREE.IcosahedronGeometry(SphereRadius, 200);
const geometrySphere = new THREE.SphereGeometry(SphereRadius, 100, 100);
export const AudioVisSphere = () => {
  const shader = useMemo(() => new Shader(), []);
  const ref = useRef<THREE.Mesh<any, any>>();
  useFrame(() => {
    shader.uniforms.uTime.value += 0.01;
    AudioVisualizerController.updateMaterialUniform(shader);
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01 * AudioVisualizerController.getFrequency();
    }
  });

  return (
    <mesh ref={ref} material={shader} geometry={geometry}>
      <lineSegments args={[geometrySphere, shader]} scale={1.03}></lineSegments>
    </mesh>
  );
};
