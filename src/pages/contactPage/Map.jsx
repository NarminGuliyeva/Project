import React, { useState } from 'react'
import styles from './Contact.module.css'

const Map = () => {

    return (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13654.820964433049!2d50.11401908605748!3d40.522137315192055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1728843420311!5m2!1saz!2saz"
          width="100%"
          height="650"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allow="geolocation; fullscreen">
        </iframe>
    );
}

export default Map