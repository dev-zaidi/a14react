import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home/Home'
import Products from './Screens/Products/Products'
import Product from './Screens/Products/Product'
import Users from './Screens/Users/Users'
import Githubuser from './Screens/Githubuser/Githubuser'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/users" element={<Users/>}/>
        <Route path="github" element={<Githubuser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing