import React from 'react'

const IntroPhoto = ({ instrument }) => {
    return (
        <img key={instrument.id} className={styles[instrument.clsName]} src={instrument.img}></img>

    )
}

export default IntroPhoto