import React, { useState } from 'react'
import styles from './Basket.module.css'
import { removeBasketProduct, updateBasketCount } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData } from '../../shared/constants/categories';

const ProductForBasket = ({ product }) => {
    const [count, setCount] = useState(product.count || 1);
    const dispatch = useDispatch()
    const basket = useSelector(state => state.products.basket);
    console.log(categoriesData);
    // console.log(product);
    const category = categoriesData.find((cat) =>
        cat.altCat?.some(alt => alt.catId === product.product.catId) || cat.catId === product.product.catId
    ); 
    console.log(category);


    const handleCountChange = async (type) => {
        setCount(prevCount => {
            const newCount = type === 'increase' ? prevCount + 1 : prevCount > 1 ? prevCount - 1 : prevCount;
            changeProductCount(newCount);
            return newCount
        });
    };

    const changeProductCount = async (newCount) => {
        try {
            const response = await fetch(`http://localhost:5000/basket/${product.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    count: newCount,
                })
            });
            dispatch(updateBasketCount({ id: product.id, newCount: newCount }))
            console.log(basket);


        } catch (error) {
            console.error(error);
        }
    }
    const deleteProduct = async () => {
        try {
            const response = await fetch(`http://localhost:5000/basket/${product.id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                dispatch(removeBasketProduct(product));
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.product}>
            <div className={styles.imgBasketProduct}>
                <img src={`http://localhost:5173/${product.product.img}`} alt="" />
            </div>
            <div className={styles.nameContainer}>
                <h1 className={styles.productName}>{product.product.name}</h1>
            </div>
            <div className={styles.catContainer}>
                <h1 className={styles.categoryName}>{category?.name}</h1>
            </div>
            <div className={styles.basketCounter}>
                <button onClick={() => handleCountChange('decrease')} className={styles.counterButton}>
                    -
                </button>
                <span className={styles.counterDisplay}>{count}</span>
                <button onClick={() => handleCountChange('increase')} className={styles.counterButton}>
                    +
                </button>
            </div>
            <div className={styles.priceContainer}>
                <h1 className={styles.productPrice}>{count * product.product.price}$</h1>
                {/* <button className={styles.btnMain more}><Link to={`/product/${product.id}`}>Ətraflı</Link></button> */}
            </div>
            <div className={styles.btnDeleteContainer}>
                <button onClick={deleteProduct} className={styles.btnDelete}><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
    )
}

export default ProductForBasket