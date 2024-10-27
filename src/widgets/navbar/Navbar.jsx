import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import './Navbar.module.css'
import Avatar from '../../components/profile/Avatar'
import { getLocalStorage } from '../../utils/localStorage'
import { useSelector } from 'react-redux'

const Navbar = ({ onHover, isHover }) => {
    const navigate = useNavigate()
    const getLogin = () => {
        navigate("/login")
    }
    const basket = useSelector(state => state.products.basket);
    const username = getLocalStorage("username")

    return (
        <nav className={styles.menu} onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}>
            <div className={styles.pianoMenuHover}>
                <div className={`${styles.blackKeys} ${isHover ? styles.blackKeysOpened : styles.blackKeysClosed}`}>
                    <ul className={`${styles.doMi1} ${styles.black}`}>
                        <li className={styles.black5}>
                            <div className={styles.logo} style={{}}>
                                <h1>{isHover ? "MusicStore" : "M"}</h1>
                            </div>
                        </li>
                    </ul>
                    <ul className={`${styles.doMi2} ${styles.black}`}>
                        <li className={styles.black5}>
                            <div className={styles.profileContainer}>
                                {
                                    username ? <Avatar username={username.username} isHover={isHover} />
                                        : <Link to=""><i className="fa-solid fa-right-to-bracket"></i>{isHover ? "Daxil ol" : ""}</Link>
                                        // className={styles.loginBtn} onClick={getLogin}
                                }
                            </div>
                        </li>
                    </ul>
                    <ul className={`${styles.faSi1} ${styles.black}`}>
                        <li className={styles.black1}><Link to="/"><i className="fa-solid fa-house"></i>{isHover && <span className={styles.black1Text}>Əsas Səhifə</span>}</Link></li>
                    </ul>
                    <ul className={`${styles.faSi2} ${styles.black}`}>
                        <li className={styles.black2}><Link to="/products"><i className="fa-solid fa-guitar"></i>{isHover && <span className={styles.black1Text}>Məhsullar</span>}</Link></li>
                    </ul>
                    <ul className={`${styles.faSi3} ${styles.black}`}>
                        <li className={styles.black3}><Link to="/contact"><i className="fa-solid fa-envelope"></i>{isHover && <span className={styles.black1Text}>Əlaqə</span>}</Link></li>
                    </ul>
                    <ul className={`${styles.doMi3} ${styles.black}`}>
                        <li className={styles.black5}><Link to="/favorites"><i class="fa-solid fa-heart"></i></Link></li>
                    </ul>
                    <ul className={`${styles.doMi4} ${styles.black}`}>
                        <li className={styles.black5}>
                            <Link to='/basket'>
                                <div className={styles.basketLi}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {basket.length > 0 && <div className={styles.count}><span className={styles.countCart}>{basket.length}</span></div>}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className={styles.white}>
                    <li className={styles.whiteLi}></li>
                    {/* <li></li> */}
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                    <li className={styles.whiteLi}></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar