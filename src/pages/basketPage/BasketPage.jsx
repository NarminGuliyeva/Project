import React, { useEffect } from 'react'
import Products from '../productsPage/products/Products'
import styles from './Basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../../utils/localStorage'
import ProductForBasket from './ProductForBasket'
import { setBasketProducts } from '../../store/productsSlice'

const BasketPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const basket = useSelector(state => state.products.basket);
  console.log(basket);

  const username = getLocalStorage("username")


  useEffect(() => {
    if (username) {
      handleGetBasketProducts()
    }
    else {
      navigate("/login")
    }
  }, [])

  const handleGetBasketProducts = async () => {
    if (username) {
      try {
        const response = await fetch('http://localhost:5000/basket');
        const data = await response.json();
        const filteredData = data.filter((d) => d.userId === username.id)
        console.log(filteredData);

        dispatch(setBasketProducts(filteredData));
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className={styles.basketPage}>
      <div className={styles.productsContent}>
        <h1>Səbət</h1>
        {basket.length === 0 && <p>Səbətdə məhsul yoxdur</p>}
        <div className={styles.basketContainer}>
          <div className={styles.productsContainer}>
          <div className={styles.imgBasketProduct} style={{textAlign: "center"}}>
                <span>Məhsul</span>
            </div>
            <div className={styles.nameContainer} style={{textAlign: "center"}}>
              {/* <span>sssd</span> */}
                {/* <h1 className={styles.productName}>{product.product.name}</h1> */}
            </div>
            <div className={styles.catContainer} style={{textAlign: "center"}}>
                <span>Kateqoriya</span>
            </div>
            <div className={styles.basketCounter} style={{textAlign: "center"}}>
              <span>Sayı</span>
            </div>
            <div className={styles.priceContainer} style={{textAlign: "center"}}>
              <span>Qiyməti</span>
            </div>
            <div className={styles.btnDeleteContainer}>
              {/* <span>sdsd</span> */}
                {/* <button className={styles.btnDelete}><i className='fa-solid fa-trash'></i></button> */}
            </div>
            <hr className={styles.hrBasket} />
            {
              basket.map(item => {
                return <ProductForBasket product={item} key={item.product.id} />
              })
            }
          </div>
          <div className={styles.totalPriceContainer}>
            <p>Total qiymet: {basket.reduce((acc, item) => acc + item.product.price * item.count, 0)}$</p>
            <button className='btnMain'>Sifarisi tamamla</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage