import React from 'react'
import styles from './Avatar.module.css'
import { saveLocalStorage } from '../../utils/localStorage'
import { useDispatch } from 'react-redux'
import { resetAllFav } from '../../store/productsSlice'

const Avatar = ({ username, isHover }) => {
  const text = username?.charAt(0)?.toUpperCase()
  const dispatch = useDispatch()
  const signOut = () => {
    saveLocalStorage("username", "")
    dispatch(resetAllFav())
  }
  return (
    <div className={styles.avatar}>
      <div className={styles.userIcon}>
        <p>{text}</p>
        {/* <i className="fa-regular fa-user"></i> */}
      </div>
      {
        isHover && (
          <div className={styles.userNameContainer}>
            <p>{username}</p>
            <div onClick={signOut} className={styles.signOutBtn}><i className="fa-solid fa-right-from-bracket"></i></div>
          </div>
        )
      }

    </div>
  )
}

export default Avatar