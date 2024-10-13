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
    // return <primitive object={scene} rotation={[0, Math.PI / 2, 0]} {...props} />
    return <primitive object={scene}  {...props} />
}
const ThreeDModel = () => {
    // gsap.registerPlugin(useGSAP);
    // gsap.registerPlugin(ScrollTrigger);
    const modelRef = useRef();
    const presentationRef = useRef();
    const cameraRef = useRef();

    console.log(cameraRef?.current?.camera);
    console.log(cameraRef?.current);
    
    
    

    // useFrame(() => {
    //     if (cameraRef?.current) {
    //         // Kamera pozisyonunu güncelle
    //         cameraRef?.current?.position.set(-3, 4, 10); // Burada istediğin pozisyonu ayarlayabilirsin
    //     }
    // });

    // useEffect(() => {
    //     cameraRef.current?.position?.set(2, 3, 5); // Set the camera position to (2, 3, 5)
    //   }, []);

    // useFrame(() => {
    //     if (cameraRef.current) {
    //       // Rotate the camera around the y-axis
    //       cameraRef.current?.rotation.y += 0.01;
    //       // Rotate the camera around the x-axis
    //       cameraRef.current?.rotation.x += 0.01;
    //       // Update the camera position
    //       cameraRef.current.position.set(
    //         Math.sin(cameraRef.current?.rotation.y) * 5,
    //         Math.cos(cameraRef.current?.rotation.x) * 2,
    //         Math.cos(cameraRef.current?.rotation.y) * 5
    //       );
    //     }
    //   });

    useGSAP(() => {
        // ScrollTrigger ile modeli sabit tut
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.myCanvas', // Canvas'ı hedef alıyoruz
                start: 'top 10px', // Sayfa üstüne gelince başla
                end: 'bottom 10px', // Sayfa sonuna kadar sürsün
                scrub: true, // Scroll'a bağlı olarak animasyon gerçekleşsin
                pin: true, // Canvas'ı sabitle
                markers: true, // Markerları açarak kontrol edebilirsin
            }
        });

        tl.to('.myCanvas', {
            x: '50vw',
            // height: "900px",
            ease: "power1.inOut",
            // scale: 1.5,
            duration: 3, // Animasyonun süresi
        });
        tl.to('.myCanvas canvas', {
            scale: 1.5,
            duration: 1,
            transformOrigin: 'bottom',
            duration: 3
            // rotate: "45deg",
            // transformRotate: "45deg"
        });
        tl.to(modelRef.current?.rotation, {
            y: Math.PI * 2, // Full 360-degree rotation on Y axis
            ease: 'none', // Linear rotation without easing
            duration: 3, // Optional: Sets a base duration for the rotation
        });

        console.log(cameraRef?.current.position);
        

        return () => {
            // Sayfa değiştiğinde tüm scroll trigger'ları temizle
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        }, []);

        // useFrame(() => {
        //     if (modelRef.current) {
        //         modelRef.current?.rotation.y += 0.01; // Y ekseninde döndür
        //     }
        // });

    return (
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 30, position: [-3, -2, 10]}} ref={cameraRef} style={{ "position": "absolute", "width": "50%", "height": "850px", }} background="transparent" className="myCanvas" >
            {/* <color attach="background"></color> */}
            {/* <color attach="background" args={["#000000"]}></color> */}
            <PresentationControls speed={1.5} global zoom={1.5} polar={[-0.9, Math.PI / 4]} ref={presentationRef}>
                <Stage environment={null}>
                    {/* <Model scale={[0.0005, 0.0005, 0.0005]} position={[0, -1.5, 0]} ref={modelRef} /> */}
                    <Model scale={[0.1, 0.1, 0.1]} position={[0, -2, 0]} ref={modelRef} />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default ThreeDModel