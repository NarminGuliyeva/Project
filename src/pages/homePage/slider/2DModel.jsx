import React from 'react'
import Photo from '../../../assets/images/grade2-guitar.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const TwoDModel = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.sliderContainer', // Animasyon bu bölüm görünür olunca başlayacak
                start: "top 0px", // 60px scroll yapılınca animasyon başlar
                end: "bottom center",
                scrub: true, // Scroll'a bağlı olarak animasyon olur
            }
        });

        tl.to(modelRef.current?.scale, {
            x: 1.5, // Genişleme faktörü
            y: 1.5, // Yükseklik faktörü
            z: 1.5, // Derinlik faktörü
            duration: 2,
            ease: "power1.inOut",
        })
        .to(modelRef.current?.rotation, {

            y: Math.PI / 4, // 45 derece dönüş
            duration: 2,
            ease: "power1.inOut",
        })
        .to(modelRef.current?.position, {
            x: 1, // Sağ kaydırma
            duration: 2,
            ease: "power1.inOut",
        }, "<"); // Önceki animasyon ile aynı zamanda

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
  return (
    <div>
        <img src={Photo} alt="" />
    </div>
  )
}

export default TwoDModel