import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavProduct, removeFavProduct, setFavProducts } from '../../../store/productsSlice'

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const favProducts = useSelector(state => state.products.favProducts);

    const isFavorited = (productId) => {
        return favProducts.some((fav) => fav.id === productId);
    }

    const handleAddFav = async (product) => {
        debugger
        const isAlreadyFavorited = isFavorited(product.id);
        if (!isAlreadyFavorited) {
            try {
                const response = await fetch('http://localhost:5000/favouritesProducts', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product)
                })
                const data = await response.json()
                dispatch(addFavProduct(product))
            }
            catch (e) { console.error(e) }
        }
        else {
            try {
                const response = await fetch(`http://localhost:5000/favouritesProducts/${product.id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    dispatch(removeFavProduct(product));
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleGetFavProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/favouritesProducts');
            const data = await response.json();
            dispatch(setFavProducts(data));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleGetFavProducts()
      },[])
    return (
        <div className="product">
            {/* <div className="product-hover"> </div> */}
            <button className="btn-product add-favorite" onClick={() => handleAddFav(product)}><i className={`fa-${isFavorited(product.id) ? "solid" : "regular"} fa-heart`}></i></button>
            <button className="btn-product add-basket" ><i className="fa-solid fa-basket-shopping"></i></button>
            <img src={product.img} alt="" />
            {/* <div className="products-buttons center"> */}

            {/* <button className="btn-product add-favorite" onClick={() => dispatch(toggleFavorites(product))}><i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}></i></button> */}
            {/* <button className="btn-product add-basket" onClick={() => dispatch(addtoCart(product))}><i className="fa-solid fa-basket-shopping"></i></button> */}
            {/* </div> */}
            <div className="name-price">
                <div className='nameContainer'>
                    <h1 className="product-name">{product.name}</h1>
                </div>
                <div className='priceContainer'>
                    <div className='priceContain'>
                        <h1 className="product-price">Qiymet: {product.price}$</h1>
                    </div>
                    <button className="btn-product more"><Link to={`/product/${product.id}`}>Ətraflı</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Product