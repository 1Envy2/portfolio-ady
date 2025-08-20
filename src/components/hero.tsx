// File: hero.tsx
"use client";
import { FlipWords } from "./ui/flip-words";
import React, { useRef, useEffect } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"; // Anda tetap bisa mengimpor useGLTF di sini
import dynamic from "next/dynamic"; // <-- Import dynamic
import { Canvas } from "@react-three/fiber";

// Ubah cara impor komponen Space
const DynamicSpace = dynamic(
  () => import("@/components/robot.jsx").then((mod) => mod.Robot),
  {
    ssr: false, // <-- Ini adalah kunci untuk mencegah SSR
  }
);

const Hero = () => {
  return (
    <div  >
      
        <h1 className="text-[#E2E8F0] text-5xl font-bold mb-4">
          Hi, I&apos;m Ady
        </h1>

        <FlipWords
          words={[
            "Fullstack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
          duration={2000}
          className="text-[#E2E8F0] text-5xl mb-4"
        />

        <p className="text-lg text-[#E2E8F0] ">
          Saya adalah mahasiswa dari universitas lampung.
        </p>


      <figure className="h-[100vw] absolute inset-0">
        <Canvas>
          {/* Tambahkan kamera */}
          <PerspectiveCamera makeDefault position={[10, 5, 10]} />

          {/* Tambahkan lampu */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 50, 0]} intensity={1} />

          {/* Tambahkan kontrol */}
          <OrbitControls enableZoom={false} enablePan={false} enabled={false} />

          {/* Render model 3D di sini */}
          <DynamicSpace />
        </Canvas>
      </figure>
    </div>
  );
};

export default Hero;
