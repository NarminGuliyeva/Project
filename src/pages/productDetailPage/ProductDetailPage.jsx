import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetail.css'
import ProductSlide from './ProductSlide';
import { getLocalStorage } from '../../utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { addBasketProduct, addFavProduct, removeFavProduct } from '../../store/productsSlice';

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const username = getLocalStorage("username")
    const favProducts = useSelector(state => state.products.favProducts);
    const basket = useSelector(state => state.products.basket);

    useEffect(() => {
        window.scrollTo(0, 0);
        const getProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products/${id}`);
                const data = await response.json();
                console.log(data);
                setDetails(data)
            }
            catch (e) {
                console.error(e)
            }
        }
        getProductDetail()
    }, [])

    const handleAddBasket = async (product) => {
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

    const isFavorited = (productId) => {
        return favProducts.some((fav) => fav.product.id === productId);
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
    return (
        <>
            <section className="section-more">
                <div className="product-images">

                    <div className="small-images">
                        <div className="small-img-content">
                            <img className="small-img" src={`http://localhost:5173/${details.img}`} alt="" />
                        </div>
                        <div className="small-img-content">
                            <img className="small-img" src={`http://localhost:5173/${details.img}`} alt="" />
                        </div>
                        <div className="small-img-content">
                            <img className="small-img" src={`http://localhost:5173/${details.img}`} alt="" />
                        </div>
                    </div>
                    <div className="big-img-content">
                        {/* <img className="big-img" src={`http://localhost:5174/${details.img}`} alt="" /> */}
                        <img className="big-img" src={`http://localhost:5173/${details.img}`} alt="" />
                    </div>
                </div>
                <div className="product-details">
                    <h1 className="product-name">{details.name}</h1>
                    <h1 className="product-price ">Qiymet: {details.price}m</h1>

                    <p className="about-product">Məhsul haqqında</p>
                    <p className="product-brend txt-product">Brend: {details.brand}</p>
                    <p className="product-type txt-product">Məhsulun növü: Royal</p>
                    <p className="product-count-key txt-product">Düymələrin sayı: 88</p>
                    <p className="product-size txt-product">Ölçülər: {details.size} (HxExD)</p>
                    <p className="product-country txt-product">İstehsal ölkəsi: {details.country}</p>
                    <p className="product-weight txt-product">Çəki: {details.weight} kq</p>

                    <div className="product-buttons">
                        <button className="btnMain" onClick={() => handleAddBasket(details)}>Səbətə əlavə et</button>
                        <button className="btnMain" onClick={() => handleAddFav(details)}><i className={`fa-${isFavorited(details.id) ? "solid" : "regular"} fa-heart`}></i></button>
                    </div>
                </div>

            </section>
            <ProductSlide />
        </>
    )
}

export default ProductDetailPage