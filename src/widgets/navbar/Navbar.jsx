import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import './Navbar.module.css'

const Navbar = ({ onHover, isHover }) => {
    return (
        <nav className={styles.menu} onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            <div className={styles.logo} style={{}}>
                <h1>{isHover ? "MusicStore" : "M"}</h1>
            </div>
            <div className={styles.pianoMenuHover}>
                <div className={styles.iconBar}>
                    <div className={`${styles.lineBar} ${styles.topBar}`}></div>
                    <div className={`${styles.lineBar} ${styles.centerBar}`}></div>
                    <div className={`${styles.lineBar} ${styles.bottomBar}`}></div>
                </div>
                <div className={`${styles.blackKeys} ${isHover ? styles.blackKeysOpened : styles.blackKeysClosed}`}>
                    <ul className={styles.faSi}>
                        <li className={styles.black1}><Link to=""><i className="fa-solid fa-house"></i>{isHover && <span className={styles.black1Text}>Əsas Səhifə</span>}</Link></li>

                        <li className={styles.black2}><Link to="/products"><i className="fa-solid fa-guitar"></i>{isHover && <span className={styles.black1Text}>Məhsullar</span>}</Link></li>

                        <li className={styles.black3}><Link to=""><i className="fa-solid fa-envelope"></i>{isHover && <span className={styles.black1Text}>Əlaqə</span>}</Link></li>
                    </ul>
                    <ul className={styles.doMi}>
                        <li className={styles.black5}><Link to="/favorites"><i class="fa-solid fa-heart"></i></Link></li>
                        {/* <li className="black5"><a href=""><i className="fa-solid fa-right-to-bracket"></i></a></li> */}
                        <li className={styles.black5}>
                            <Link to='/basket'>
                                <div>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {/* <span className="count-cart">{cartItems.length}</span> */}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className={styles.white}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar