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

export const TextBended = ({ headUp } = { headUp: 0 }) => {
  const radius = SphereRadius * 1.5;
  const shader = useMemo(() => new Shader(), []);
  const { aNumber } = useControls({ aNumber: { value: radius } });
  const textRef = useRef<THREE.Mesh>();
  const groupRef = useRef<THREE.Mesh>();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.center();
      groupRef.current.rotation.y = headUp;
    }
  }, [textRef.current === undefined]);

  shader.uRadius = aNumber;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.01;
      shader.uTime += 0.01;
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
          Under Construction
        </Text3D>
      </group>
    </>
  );
};
