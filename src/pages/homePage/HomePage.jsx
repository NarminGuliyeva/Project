import React from 'react'
import Intro from './intro/Intro'
import styles from './Home.module.css'
import Slider from './slider/Slider'
import ContactPage from '../contactPage/ContactPage'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Intro />
      <Slider />
      <ContactPage/>
    </div>
  )
}

export default HomePage