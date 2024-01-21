"use client";
import { gsap } from "gsap";
import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useScrollytelling } from "~/lib/scrollytelling-client";

type GLTFResult = GLTF & {
  nodes: {
    Cube009: THREE.Mesh;
    Cube009_1: THREE.Mesh;
  };
  materials: {
    m_Mac128k: THREE.MeshStandardMaterial;
    m_Outline: THREE.MeshStandardMaterial;
  };
};

useGLTF.preload("/models/64.glb");

const MacModel2 = () => {
  const { timeline } = useScrollytelling();

  const model = useGLTF(
    "/models/64.glb"
  );

  const innerRef = useRef<THREE.Group>(null);
  const width = useThree((state) => state.viewport.width);

  useFrame(() => {
    if (!innerRef.current || !timeline?.scrollTrigger) return;

    innerRef.current.rotation.y = Math.PI * 2 * timeline.scrollTrigger.progress;
  });

  return (
    <Float>
      <group dispose={null} scale={width * 0.6} ref={innerRef}>
        <group
          position={[0, 0, 0]}
          rotation={[0.45, -0.51, -0.03]}
        >
          <mesh>
            {/* <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
            />
            <pointLight intensity={0} /> */}
            <primitive
              object={model.scene}
              scale={0.003}
            // position={[0, -3.25, -1.5]}
            />
          </mesh>
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.m_Mac128k}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.m_Outline}
          /> */}
        </group>
      </group>
    </Float>
  );
};

export const CanvasWithMacModel2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      onCreated={() => {
        gsap.set(canvasRef.current, {
          width: "100%",
          height: "100%",
        });
        gsap.to(
          canvasRef.current?.closest('[data-mac-canvas-container="true"]') ||
          null,
          { opacity: 1, scale: 1, duration: 0.15 }
        );
      }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ opacity: 0, scale: 1.2 }}
      ref={canvasRef}
      data-mac-canvas-container
    >
      <MacModel2 />
    </Canvas>
  );
};
