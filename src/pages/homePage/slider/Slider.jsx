import React, { useRef } from 'react'
import './Slider.css'
import ThreeDModel from './3DModel'
import TwoDModel from './2DModel'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    const textRef = useRef();
    useGSAP(() => {
        // ScrollTrigger ile modeli sabit tut
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".textSlider",
                start: 'top 10%', // Daha yukarıdan başlat
                end: 'bottom 10%',
                scrub: true,
                pin: false, // İsterseniz sabitleyebilirsiniz
                // markers: true, // Kontrol için markerlar açabilirsiniz
                onComplete: () => {
                    tl2.play(); // İlk animasyon bittiğinde ikinci animasyonu başlat
                }
            }
        });

        tl1.to('.textSlider', {
            opacity: 0,
            duration: 1,
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".part2",
                start: 'top 75%', // Ekranın ortalarına doğru başlayabilir
                end: 'bottom 100%',
                scrub: true,
                pin: false,
                markers: true,
            }
        });

        tl2.fromTo('.part2', {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
        });


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <section className='sliderContainer'>
            <div className='d-flex sliderTop'>
                <div className='ThreeDModel'>
                    {/* <TwoDModel/> */}
                    <ThreeDModel />
                </div>
                <div className='textSlider' ref={textRef}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid corrupti vel architecto nobis expedita, facilis quis doloremque impedit! Praesentium voluptate officiis iure asperiores, et omnis facilis mollitia nesciunt atque quos odit excepturi ipsa magnam odio provident animi necessitatibus sed, maiores voluptatum doloremque libero eum dolorum eveniet expedita. Voluptatem vitae quos accusamus est iste eaque quibusdam autem adipisci aliquid dolor?</p>
                </div>
                <div className='d-flex part2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid corrupti vel architecto nobis expedita, facilis quis doloremque impedit! Praesentium voluptate officiis iure asperiores, et omnis facilis mollitia nesciunt atque quos odit excepturi ipsa magnam odio provident animi necessitatibus sed, maiores voluptatum doloremque libero eum dolorum eveniet expedita. Voluptatem vitae quos accusamus est iste eaque quibusdam autem adipisci aliquid dolor?</p>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Slider