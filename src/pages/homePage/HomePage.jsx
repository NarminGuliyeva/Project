import React from 'react'
import Intro from './intro/Intro'
import styles from './Home.module.css'
import Slider from './slider/Slider'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Intro />
      <Slider />
    </div>
  )
}

export default HomePage