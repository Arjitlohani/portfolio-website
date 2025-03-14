import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

export function Character3D() {
  const group = useRef();
  const scale = useRef(0);

  useEffect(() => {
    // Reset scale on mount
    scale.current = 0;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Smooth entrance animation
    if (scale.current < 1) {
      scale.current += 0.05;
      group.current.scale.set(scale.current, scale.current, scale.current);
    }

    // Gentle floating animation
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="#4a90e2" />
      </Box>
    </group>
  );
}
