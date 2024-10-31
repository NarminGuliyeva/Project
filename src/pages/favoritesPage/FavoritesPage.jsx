import React, { useEffect } from 'react'
import Products from '../productsPage/products/Products'
import styles from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFavProducts } from '../../store/productsSlice'
import { getLocalStorage } from '../../utils/localStorage'
import Product from '../productsPage/products/Product'
import { useNavigate } from 'react-router-dom'

const FavoritesPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const favProducts = useSelector(state => state.products.favProducts);
  const username = getLocalStorage("username")

  useEffect(() => {
      window.scrollTo(0, 0);
    if (username) {
      handleGetFavProducts()
    }
    else {
      navigate("/login")
    }
  }, [])

  const handleGetFavProducts = async () => {
    if (username) {
      try {
        const response = await fetch('http://localhost:5000/favouritesProducts');
        const data = await response.json();
        const filteredData = data.filter((d) => d.userId === username.id)
        dispatch(setFavProducts(filteredData));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.favoritesPage}>
      <div className={styles.productsContent}>
      <h1>Favorilər</h1>
        {favProducts.length === 0 && <p>Favorilərdə məhsul yoxdur</p>}
        <div className={styles.productsContainer}>
          {
            favProducts.map(item => {
              return <Product product={item.product} key={item.product.id} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage