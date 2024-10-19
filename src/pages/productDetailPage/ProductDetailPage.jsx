import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'

const ProductDetailPage = () => {
    const [details, setDetails] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
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

    console.log(details.img);

    return (
        <section className="section-more">
            <div className="product-images">
                <div className="big-img-content">
                    <img className="big-img" src={`http://localhost:5174/${details.img}`} alt="" />
                </div>
                <div className="small-images">
                    <div className="small-img-content">
                        <img className="small-img" src={`http://localhost:5174/${details.img}`} alt="" />
                    </div>
                    <div className="small-img-content">
                        <img className="small-img" src={`http://localhost:5174/${details.img}`} alt="" />
                    </div>
                    <div className="small-img-content">
                        <img className="small-img" src={`http://localhost:5174/${details.img}`} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-details">
                <h1 className="product-name">{details.name}</h1>
                <h1 className="product-price ">Qiymet: {details.price}m</h1>
                <div className="product-buttons">
                    <button className="btn-add-basket btn-add"><a href="">Səbətə əlavə et</a></button>
                    <button className="btn-add-favorite btn-add"><a href=""><i className="fa-regular fa-heart"></i></a></button>
                </div>
                <p className="about-product">Məhsul haqqında</p>
                <p className="product-brend txt-product">Brend: {details.brand}</p>
                <p className="product-type txt-product">Məhsulun növü: Royal</p>
                <p className="product-count-key txt-product">Düymələrin sayı: 88</p>
                <p className="product-size txt-product">Ölçülər: {details.size} (HxExD)</p>
                <p className="product-country txt-product">İstehsal ölkəsi: {details.country}</p>
                <p className="product-weight txt-product">Çəki: {details.weight} kq</p>
            </div>

        </section>
    )
}

export default ProductDetailPage