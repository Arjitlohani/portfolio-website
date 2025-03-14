import { Canvas } from "@react-three/fiber";
import { Background } from "./Background";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

export function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </div>
  );
}
