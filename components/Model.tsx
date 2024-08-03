'use client'

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import { useCurrentSheet } from "@theatre/r3f";


export default function Model(){
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(()=>{
        if (sheet){
            const sequenceLength = val(sheet.sequence.pointer.length);
            sheet.sequence.position = scroll.offset * sequenceLength;
        }
    });

    const bgColor = "#84a4f4";
    return(
        <>
        <color attach="background" args={[bgColor]} />
        </>
    )
}
