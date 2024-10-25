import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveLocalStorage } from "../utils/localStorage";

const productsSlice = createSlice({
    name : "products",
    initialState: {
        products: [],
        favProducts: [],
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
            state.favProducts =  [...state.favProducts, action.payload];
        },
        removeFavProduct: (state, action) => {
            debugger
            state.favProducts = state.favProducts.filter(product => product.id !== action.payload.id);
            // state.favProducts.find(product => product.id  !== action.payload.id);
        },
        resetAllFav: (state, action) => {
            state.favProducts = [];
        }
    }
})
export const {addProductsData, 
    setChooseCategory, addFavProduct,  
    removeFavProduct, setFavProducts,
    resetAllFav
} = productsSlice.actions;

export default productsSlice.reducer    