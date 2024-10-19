import React, { useEffect, useState } from 'react'
import Categories from './categories/Categories'
import Products from './products/Products'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsData } from '../../store/productsSlice'

const ProductPage = () => {
  const [filteredData, setFilteredData] = useState([])
  const dispatch = useDispatch()
  const productsData = useSelector(state => state.products.products)
  const choosenId = useSelector(state => state.products.choosenCategory)
  

  useEffect(() => {
      fetch("http://localhost:5000/products")
      .then(response => response.json())   
      .then(data => {
          dispatch(addProductsData(data))
          setFilteredData(data)
          // setProducts(data)
      })
      .catch(error => console.error(error));
      // console.log(response);
      
  }, [])
  
  useEffect(() => {
      if (choosenId !== "All") {
          setFilteredData(productsData.filter(product => product.catId === choosenId))
      }
      else {
          setFilteredData(productsData)
      }
  },[choosenId]) 
  return (
    <>
      <Categories />
      <Products filteredData={filteredData}/>
    </>
  )
}

export default ProductPage