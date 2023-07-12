import { Text3D, shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { bend_frag, bend_vertix } from "../shaders/index.ts";
import { SphereRadius } from "../state/index.ts";

const Shader = shaderMaterial(
  {
    uTime: 0,
    uRadius: 0,
  },
  bend_vertix,
  bend_frag
);

export const TextBended = ({ headUp, text } = { headUp: 0, text: "" }) => {
  const radius = SphereRadius * 1.5;
  const shader = useMemo(() => new Shader(), []);
  const { aNumber } = useControls({ aNumber: { value: radius } });
  const textRef = useRef<THREE.Mesh<any, THREE.ShaderMaterial>>();
  const groupRef = useRef<THREE.Group>();

  useEffect(() => {
    if (textRef.current && groupRef.current) {
      textRef.current.geometry.center();
      groupRef.current.rotation.y = headUp;
    }
  }, [textRef.current === undefined]);

  shader.uniforms.uRadius.value = aNumber;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.01;
      shader.uniforms.uTime.value += 0.01;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Text3D
          position={[0, 0, radius]}
          ref={textRef}
          font={"/fonts/oswald.json"}
          material={shader}
        >
          {text}
        </Text3D>
      </group>
    </>
  );
};
