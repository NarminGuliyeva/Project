import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveLocalStorage } from "../utils/localStorage";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        favProducts: [],
        basket: [],
        choosenCategory: getLocalStorage("cat") || 1
    },
    reducers: {
        addProductsData: (state, action) => {
            state.products = action.payload;
        },
        setChooseCategory: (state, action) => {
            state.choosenCategory = action.payload;
            saveLocalStorage("cat", action.payload)
        },
        setFavProducts: (state, action) => {
            state.favProducts = action.payload;
        },
        addFavProduct: (state, action) => {
            state.favProducts = [...state.favProducts, action.payload];
        },
        removeFavProduct: (state, action) => {
            state.favProducts = state.favProducts.filter(product => product.id !== action.payload.id);
        },
        resetAllFav: (state, action) => {
            state.favProducts = [];
        },
        setBasketProducts: (state, action) => {
            state.basket = action.payload;
        },
        addBasketProduct: (state, action) => {
            state.basket = [...state.basket, action.payload];
        },
        removeBasketProduct: (state, action) => {
            state.basket = state.basket.filter(product => product.id !== action.payload.id);
        },
        updateBasketCount: (state, action) => {
            const { id, newCount } = action.payload;
            state.basket = state.basket.map(product =>
                product.id === id
                    ? { ...product, count: newCount }
                    : product
            );
        },
        resetAllBasket: (state, action) => {
            state.basket = [];
        }
    }
})
export const { addProductsData,
    setChooseCategory, addFavProduct,
    removeFavProduct, setFavProducts,
    resetAllFav, addBasketProduct,
    removeBasketProduct, setBasketProducts,
    updateBasketCount,
    resetAllBasket
} = productsSlice.actions;

export default productsSlice.reducer    