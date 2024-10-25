import React, { useEffect, useState } from 'react'
import Product from './Product'
// import { productsData } from '../../../shared/constants/products'
import '../Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsData } from '../../../store/productsSlice'

const Products = ({...props}) => {
    const {filteredData} = props;   
    
    return (
        <div className="products-content">
            {
                filteredData.map(item => {
                    return <Product product={item} key={item.id} />
                })
            }
        </div>
    )
}

export default Products