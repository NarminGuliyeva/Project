import React from 'react'
import Products from '../productsPage/products/Products'
import styles from './Basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../../utils/localStorage'

const BasketPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const favProducts = useSelector(state => state.products.favProducts);
  const username = getLocalStorage("username")

  useEffect(()=> {
    if (!username) {
      navigate("/login")
    }
  })
  return (
    <div className={styles.basketPage}>
      {/* <Products /> */}
    </div>
  )
}

export default BasketPage