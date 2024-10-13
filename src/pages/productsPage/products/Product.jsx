import React from 'react'
import { Link } from 'react-router-dom'
import '../Product.css'

const Product = ({product}) => {
    return (
        <div className="product">
            <div className="product-hover"> </div>
            <img src={product.img} alt="" />
            <div className="products-buttons center">
                <button className="btn-product add-favorite" ><i className="fa-regular fa-heart"></i></button>

                {/* <button className="btn-product add-favorite" onClick={() => dispatch(toggleFavorites(product))}><i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}></i></button> */}
                <button className="btn-product more center"><Link to={`/product/${product.id}`}>Ətraflı</Link></button>
                <button className="btn-product add-basket" ><i className="fa-solid fa-basket-shopping"></i></button>
                {/* <button className="btn-product add-basket" onClick={() => dispatch(addtoCart(product))}><i className="fa-solid fa-basket-shopping"></i></button> */}
            </div>
            <div className="name-price">
                <h1 className="product-name">{product.name}</h1>
                <h1 className="product-price center">Qiymet: {product.price}$</h1>
            </div>
        </div>
    )
}

export default Product