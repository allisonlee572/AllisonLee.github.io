import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const group = useRef(); // for directly accessing the model
  const gltf = useGLTF("/assets/3D/fish_hologram.glb");

  // auto-rotate every frame
  // state is scene state info (ex: camera, clock) but is rarely used for simple rotation
  // delta is time in seconds since last frame
  // makes animation smooth and frame rate-independent
  useFrame((state, delta) => {
    // check if the model is loaded
    if (group.current) {
      group.current.rotation.y += delta * 0.5; // adjust speed here
    }
  });

  // we use a group so we can center the object
  // instead of using the original pivot
  return <group ref={group} object={gltf.scene} scale={0.5} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
