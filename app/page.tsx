'use client'
import Scene from "@/components/Scene";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Suspense, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    studio.extend(extension);
    studio.initialize();
  }, []);

  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
}
