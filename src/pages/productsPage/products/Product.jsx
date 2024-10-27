import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketProduct, addFavProduct, removeFavProduct, setBasketProducts, setFavProducts } from '../../../store/productsSlice'
import { getLocalStorage } from '../../../utils/localStorage'

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const username = getLocalStorage("username")
    const favProducts = useSelector(state => state.products.favProducts);
    const basket = useSelector(state => state.products.basket);
    console.log(basket);

    const isFavorited = (productId) => {
        return favProducts.some((fav) => fav.product.id === productId);
    }
    const isBasket = (productId) => {
        return basket.some((b) => b.product.id === productId);
    }
    const handleAddBasket = async (product) => {
        debugger
        if (username) {
            const chosenProduct = basket.find(b => b.product.id === product.id)
            if (!chosenProduct) {
                try {
                    const response = await fetch('http://localhost:5000/basket', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ product, count: 1, userId: username.id })
                    })
                    const data = await response.json()
                    console.log(data);

                    dispatch(addBasketProduct(data))
                }
                catch (e) { console.error(e) }
            }
            else {
                try {
                    const updatedCount = chosenProduct.count + 1;
                    const response = await fetch(`http://localhost:5000/basket/${chosenProduct.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ 
                            product: chosenProduct.product,
                            count: updatedCount, 
                            userId: chosenProduct.userId
                        })
                    });

                } catch (error) {
                    console.error(error);
                }
            }
        }
        else {
            navigate("/login")
        }
    }

    const handleAddFav = async (product) => {
        if (username) {
            const isAlreadyFavorited = isFavorited(product.id);
            if (!isAlreadyFavorited) {
                try {
                    const response = await fetch('http://localhost:5000/favouritesProducts', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ product, userId: username.id })
                    })
                    const data = await response.json()
                    console.log(data);

                    dispatch(addFavProduct(data))
                }
                catch (e) { console.error(e) }
            }
            else {
                const chosenProduct = favProducts.find(p => p.product.id === product.id)
                try {
                    const response = await fetch(`http://localhost:5000/favouritesProducts/${chosenProduct.id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        dispatch(removeFavProduct(chosenProduct));
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        else {
            navigate("/login")
        }
    }

    const handleGetBasketProducts = async () => {
        if (username) {
            try {
                const response = await fetch('http://localhost:5000/basket');
                const data = await response.json();
                const filteredData = data.filter((d) => d.userId === username.id)
                dispatch(setBasketProducts(filteredData));
            } catch (error) {
                console.error(error);
            }
        }
    };

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

    useEffect(() => {
        handleGetFavProducts(),
            handleGetBasketProducts()
    }, [])
    console.log(product.img);
    
    
    return (
        <div className="product">
            {/* <div className="product-hover"> </div> */}
            <button className="btn-product add-favorite" onClick={() => handleAddFav(product)}><i className={`fa-${isFavorited(product.id) ? "solid" : "regular"} fa-heart`}></i></button>
            <button className="btn-product add-basket" onClick={() => handleAddBasket(product)}><i className="fa-solid fa-basket-shopping"></i></button>
            <img src={`http://localhost:5173/${product.img}`} alt="" />

            <div className="name-price">
                <div className='nameContainer'>
                    <h1 className="product-name">{product.name}</h1>
                </div>
                <div className='priceContainer'>
                    <div className='priceContain'>
                        <h1 className="product-price">Qiymet: {product.price}$</h1>
                    </div>
                    <button className="btnMain more"><Link to={`/product/${product.id}`}>Ətraflı</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Product