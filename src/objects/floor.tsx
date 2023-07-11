export const Floor = () => {
  return (
    <mesh rotation={[-Math.PI * 0.2, 0, 0]} position={[0, -2, -10]}>
      <planeGeometry attach="geometry" args={[100, 100, 100, 100]} />
      <meshBasicMaterial wireframe attach="material" color="gray" />
    </mesh>
  );
};
