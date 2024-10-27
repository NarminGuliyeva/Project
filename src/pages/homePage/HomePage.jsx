import React from 'react'
import Intro from './intro/Intro'
// import styles from './Home.module.css'
import Slider from './slider/Slider'
import ContactPage from '../contactPage/ContactPage'
import Brands from './brands/Brands'

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Slider />
      <Brands/>
      <ContactPage/>
    </div>
  )
}

export default HomePage