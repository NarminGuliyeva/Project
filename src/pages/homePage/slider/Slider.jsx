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
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".textSlider",
                start: 'top 10%',
                end: 'bottom 20%',
                scrub: true,
                pin: false,
                onComplete: () => {
                    tl2.play();
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
                start: 'top 75%',
                end: 'bottom 100%',
                scrub: true,
                pin: false,
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
                    <ThreeDModel />
                </div>
                <div className='textSlider txtSlide' ref={textRef}>
                    <h2>Musiqiyə olan həvəsinizə doğru ilk addımı atın!</h2>
                    <p><b>"İstər Başlanğıc, istərsə də Peşəkar..."</b>     Musiqiyə olan həvəsinizi peşəkar səviyyəyə qaldıracaq keyfiyyətli gitaralarla hobbi və ya peşəkar səviyyədə musiqi çalmağa başlamaq indi çox asandır.</p>
                </div>
                <div className='d-flex part2 txtSlide'>
                    <h2>"Keyfiyyətli gitara və alətlərlə sənətə toxunun."</h2>
                    <p>Geniş məhsul çeşidimizdə hər büdcəyə uyğun keyfiyyətli gitara, aksesuarlar və digər musiqi alətləri sizi gözləyir.</p>
                    <button className='btnMain'>Kolleksiyaya Bax</button>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Slider