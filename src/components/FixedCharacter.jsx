import { Canvas } from "@react-three/fiber";
import { Character3D } from "./Character3D";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

export function FixedCharacter() {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <color attach="background" args={["#1a1a1a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Character3D />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
