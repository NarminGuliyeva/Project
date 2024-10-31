import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import './Slider.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



function Model(props) {

    const { scene } = useGLTF("/acoustic_guitar.glb")
    return <primitive object={scene}  {...props} />
}
const ThreeDModel = () => {
    const modelRef = useRef();
    const presentationRef = useRef();
    const cameraRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.myCanvas',
                start: 'top 10px',
                end: 'bottom 10px',
                scrub: true, 
                pin: true,
            }
        });

        tl.to('.myCanvas', {
            x: '45vw',
            ease: "power1.inOut",
            duration: 3,
        });
        tl.to('.myCanvas canvas', {
            scale: 1.5,
            duration: 1,
            transformOrigin: 'bottom',
            duration: 3
        });
        tl.to(modelRef.current?.rotation, {
            y: Math.PI * 2, 
            ease: 'none',
            duration: 3,
        });        

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        }, []);

    return (
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 30, position: [-3, -2, 10]}} ref={cameraRef} style={{ "position": "absolute", "width": "50%", "height": "850px", }} background="transparent" className="myCanvas" >
            <PresentationControls speed={1.5} global zoom={1.5} polar={[-0.9, Math.PI / 4]} ref={presentationRef}>
                <Stage environment={null}>
                    <Model scale={[0.1, 0.1, 0.1]} position={[0, -2, 0]} ref={modelRef} />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default ThreeDModel