import React from 'react'
import Product from './Product'
import { productsData } from '../../../shared/constants/products'
import '../Product.css'

const Products = () => {
    return (
        <div className="products-content">
            {
                productsData.map(item => {
                    return <Product product={item} key={item.id} />
                })
            }
        </div>
    )
}

export default Products