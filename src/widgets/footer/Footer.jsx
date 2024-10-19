import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <hr />
        <hr />
      </div>
      <div className={styles.logoFooter}>
        Music Gallery
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerMenu}>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.footerIcons}>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <hr />
        </div>
        <div className={styles.footerMenu}>
          <ul>
            <li>Ana sehife</li>
            <li>Haqqimizda</li>
            <li>Mehsullar</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 MusicGallery. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer