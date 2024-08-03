'use client'
import Scene from "@/components/Scene";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

export default function Home() {
  studio.extend(extension);
  studio.initialize();
  return (
  <div>
    <Scene/>
  </div>
  );
}
