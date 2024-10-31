import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Intro.css'
import { instruments } from '../../../shared/constants/instruments'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
    console.log(instruments);
    const [text, setText] = useState(false);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    // useGSAP(() => {
    //     animateInstrument(".imgKamancha",
    //         {
    //             left: '39%',
    //             top: '-10%',
    //             width: '25%',
    //         },
    //         {
    //             left: '24%',
    //             top: '-90%',
    //             width: '37%',
    //         },
    //     );
    //     animateInstrument(".imgViolin",
    //         {
    //             left: '55%',
    //             top: '1%',
    //             width: '14%',
    //             rotate: '27deg'
    //         },
    //         {
    //             left: '86%',
    //             top: '-40%',
    //             width: '28%',
    //             rotate: '10deg'
    //         },
    //     );
    //     animateInstrument(".imgTar",
    //         {
    //             left: '29%',
    //             top: '6%',
    //             width: '21%',
    //             blur: '0px'
    //         },
    //         {
    //             left: '-5%',
    //             top: '-39%',
    //             width: '34%',
    //             blur: '1px'
    //         },
    //     );
    //     animateInstrument(".imgGuitar",
    //         {
    //             left: '14%',
    //             top: '35%',
    //             width: '31%',
    //         },
    //         {
    //             left: '-37%',
    //             top: '23%',
    //             width: '65%',
    //         },
    //     );
    //     animateInstrument(".imgSaxophone",
    //         {
    //             left: '51%',
    //             top: '20%',
    //             width: '24%',
    //             blur: '0px',
    //             rotate: '64deg'
    //         },
    //         {
    //             left: '60%',
    //             top: '-20%',
    //             width: '30%',
    //             blur: '1.6px',
    //             rotate: '34deg'
    //         },
    //     );
    //     animateInstrument(".imgPiano",
    //         {
    //             left: '53%',
    //             top: '46%',
    //             width: '24%',
    //             rotate: '35deg'
    //         },
    //         {
    //             left: '83%',
    //             top: '49%',
    //             width: '37%',
    //             rotate: '10deg'
    //         },
    //     );
    //     animateInstrument(".imgDrum",
    //         {
    //             left: '33%',
    //             top: '38%',
    //             width: '37%',
    //         },
    //         {
    //             left: '38%',
    //             top: '100%',
    //             width: '50%',
    //             rotate: '10deg'
    //         },
    //     );
    //     animateInstrument(".imgCornet",
    //         {
    //             left: '34%',
    //             top: '60%',
    //             width: '12%',
    //             blur: '0px',
    //             zIndex: '11'
    //         },
    //         {
    //             left: '-6%',
    //             top: '75%',
    //             width: '20%',
    //             blur: '1.5px',
    //             zIndex: '2'
    //         },
    //     );
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);


    // useGSAP(
    //     () => {

    //         return () => {
    //             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //         };
    //     }, []);

    
    useEffect(() => {
        console.log(window.scrollY);
        const scrollMenu = () => {
                instruments.forEach(instrument => {
                    const element = document.querySelector(`.${instrument.clsName}`);
                    const word = document.querySelector(`.word`);
                    const wordText = document.querySelector(`.word h1`);                    
                    if (element) {
                        if (window.scrollY > 10) {
                            element.style.animationName = instrument.clsName;
                            setText(true)
                            word.style.animationName = "word";
                            wordText.style.animationName = "wordH1";
                          }
                        }
                      });
                    };
                    window.addEventListener("scroll", scrollMenu);
                    return () => window.removeEventListener("scroll", scrollMenu);
        }, []);
                

    return (
        <div className="sectionFirst">
            <div className="word" >
                <h1>{text && "“Musiqi – gözəl səslərə çevrilən düşüncədir”."}</h1>
            </div>
            {
                instruments.map(instrument =>
                (
                    <img key={instrument.id} className={instrument.clsName} src={instrument.img}></img>
                )
                )}
        </div >
    )
}

export default Intro
