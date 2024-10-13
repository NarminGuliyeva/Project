import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <main>
                <Navbar onHover={setIsHovered} isHover={isHovered} />
                <div className={`${styles.common} ${isHovered ? styles.narrow : styles.wide}`}>
                    <Outlet />
                    <Footer />
                </div>
            </main>
        </>

    )
}

export default Layout