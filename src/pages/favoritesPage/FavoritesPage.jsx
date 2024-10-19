import React, { useEffect } from 'react'
import Products from '../productsPage/products/Products'
import styles from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFavProducts } from '../../store/productsSlice'

const FavoritesPage = () => {
  const favProducts = useSelector(state => state.products.favProducts);
  const dispatch = useDispatch()
  const handleGetFavProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/favouritesProducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setFavProducts(data));
    } catch (error) {
      console.error('Error fetching favorite products:', error);
    }
  };
  useEffect(() => {
    handleGetFavProducts()
  }, [])
  return (
    <div className={styles.favoritesPage}>
      <Products filteredData={favProducts} />
    </div>
  )
}

export default FavoritesPage