import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export const animateInstrument = (selector, startValues, endValues) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".imgKamancha",
            start: "top 10px",
            scrub: true,
        }
    }).fromTo(selector,
        {
            left: startValues.left,
            top: startValues.top,
            width: startValues.width,
            transform: `rotate(${startValues.rotate})`,
            filter: `blur(${startValues.blur})`,
            zIndex: startValues.zIndex
        },
        {
            left: endValues.left,
            top: endValues.top,
            width: endValues.width,
            transform: `rotate(${endValues.rotate})`,
            filter: `blur(${endValues.blur})`,
            zIndex: endValues.zIndex,
            duration: 1
        }
    )
}