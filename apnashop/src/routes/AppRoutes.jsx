import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


function AppRoutes() {
    return (
        <BrowserRouter>
            {/* Navbar */}
            <Navbar />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes
