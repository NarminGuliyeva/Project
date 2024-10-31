import React, { useEffect } from 'react'
import Map from './Map'
import styles from './Contact.module.css'
import ContactForm from './ContactForm'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className={styles.contactPage}>
      <div className={styles.mapContainer}>
        <Map/>
        <div className={styles.textContactContainer}>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage