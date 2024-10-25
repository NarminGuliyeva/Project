import React, { useEffect } from 'react'
import Products from '../productsPage/products/Products'
import styles from './Favorites.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFavProducts } from '../../store/productsSlice'
import { getLocalStorage } from '../../utils/localStorage'
import Product from '../productsPage/products/Product'

const FavoritesPage = () => {
  const favProducts = useSelector(state => state.products.favProducts);

  const dispatch = useDispatch()
  const username = getLocalStorage("username")

  const handleGetFavProducts = async () => {
    if (username) {
      try {
        const response = await fetch('http://localhost:5000/favouritesProducts');
        const data = await response.json();
        const filteredData = data.filter((d) => d.userId === username.id)
        console.log(filteredData);
        dispatch(setFavProducts(filteredData));
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    handleGetFavProducts()
  }, [])
  return (
    <div className={styles.favoritesPage}>
      <div className="products-content">
        {
          favProducts.map(item => {
            return <Product product={item.product} key={item.product.id} />
          })
        }
      </div>
    </div>
  )
}

export default FavoritesPage