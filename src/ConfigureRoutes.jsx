import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ProductPage from './pages/productsPage/ProductPage'
import ContactPage from './pages/contactPage/ContactPage'
import FavoritesPage from './pages/favoritesPage/FavoritesPage'
import BasketPage from './pages/basketPage/BasketPage'
import Layout from './widgets/layouts/Layout'

const ConfigureRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Route>
        </Routes>
    )
}

export default ConfigureRoutes