import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import Model from "./Model";

export default function Scene(){
    const sheet = getProject("file through").sheet("scene");
    return (
        <Canvas gl={{preserveDrawingBuffer: true}}>
            <ScrollControls pages={5}>
                <SheetProvider sheet={sheet}>
                    <Model/>
                </SheetProvider>
            </ScrollControls>
        </Canvas>
    )
}