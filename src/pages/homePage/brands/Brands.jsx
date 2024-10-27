import React from 'react'
import '../Home.css'
import { brands } from '../../../shared/constants/brands'
import Marquee from "react-fast-marquee";



const Brands = () => {
    return (
        <section className="brands">
            <h1>Brendlər</h1>
            <Marquee direction="right" speed={50} gradient={false}>
                <div className="brandsPhoto">
                    {
                        brands.map(brand => (
                            <div className={brand.name}>
                                <img src={`http://localhost:5173/${brand.img}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </Marquee>
            <Marquee direction="left" speed={50} gradient={false}>
                <div className="brandsPhoto">
                    {
                        brands.map(brand => (
                            <div className={brand.name}>
                                <img src={`http://localhost:5173/${brand.img}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </section>
    )
}

export default Brands