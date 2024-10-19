import React from 'react'
import Products from '../productsPage/products/Products'
import styles from './Basket.module.css'

const BasketPage = () => {
  return (
    <div className={styles.basketPage}>
      <Products />
    </div>
  )
}

export default BasketPage