'use client'

import { useScroll, Gltf } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import theatreState from ".file through.theatre-project-state.json";

export default function Model() { 
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        if (sheet) {
            const sequenceLength = val(sheet.sequence.pointer.length);
            sheet.sequence.position = scroll.offset * sequenceLength;
        }
    });

    const bgColor = "#84a4f4";

    return (
        <>
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" color={bgColor} near={-4} far={10} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        <Gltf src="/environment.glb" castShadow receiveShadow />
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[0, 0, 0]}
          fov={90}
          near={0.1}
          far={70}
        />
      </>
    );
}
