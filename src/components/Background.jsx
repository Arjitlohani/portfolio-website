import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";
import { useScroll } from "framer-motion";

const colors = {
  darkBlue: "#1a237e",
  radiantBlue: "#0d47a1",
  slate: "#263238",
  black: "#000000",
  darkGreen: "#1b5e20",
};

export function Background() {
  const { scrollYProgress } = useScroll();
  const { scene } = useThree();
  const objects = useRef([]);

  useEffect(() => {
    // Create multiple objects with random positions
    objects.current = Array.from({ length: 10 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: Math.random() * 0.5 + 0.5,
      type: Math.random() > 0.5 ? "box" : "sphere",
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Animate each object
    objects.current.forEach((obj, i) => {
      const mesh = state.scene.children[i];
      if (mesh) {
        mesh.rotation.x += 0.001 * (i + 1);
        mesh.rotation.y += 0.002 * (i + 1);
        mesh.position.y += Math.sin(t + i) * 0.01;
      }
    });

    // Update background color based on scroll
    const colorIndex = Math.floor(
      scrollYProgress.get() * (Object.keys(colors).length - 1)
    );
    const colorKeys = Object.keys(colors);
    const currentColor = colors[colorKeys[colorIndex]];
    const nextColor =
      colors[colorKeys[Math.min(colorIndex + 1, colorKeys.length - 1)]];
    const progress = (scrollYProgress.get() * (colorKeys.length - 1)) % 1;

    scene.background.set(currentColor);
  });

  return (
    <>
      {objects.current.map((obj, i) => (
        <group
          key={i}
          position={obj.position}
          rotation={obj.rotation}
          scale={obj.scale}
        >
          {obj.type === "box" ? (
            <Box>
              <meshStandardMaterial color="#4a90e2" transparent opacity={0.3} />
            </Box>
          ) : (
            <Sphere>
              <meshStandardMaterial color="#4a90e2" transparent opacity={0.3} />
            </Sphere>
          )}
        </group>
      ))}
    </>
  );
}
