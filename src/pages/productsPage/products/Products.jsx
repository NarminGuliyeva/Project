import React, { useEffect, useState } from 'react'
import Product from './Product'
import '../Product.css'

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