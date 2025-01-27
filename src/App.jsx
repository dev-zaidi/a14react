import React from 'react'
import Nav from './Components/Navbar/Nav'
import Home from './Components/Screens/Home/Home'
import Products from './Components/Screens/Products/Products'
import Product from './Components/Screens/Products/Product'
import Users from './Components/Screens/Users/Users'
import Githubuser from './Components/Screens/Githubuser/Githubuser'
import { Route, Routes } from 'react-router-dom'
import User from './Components/Screens/Users/User'
// import DashboardLayoutBasic from './Components/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
    {/* <DashboardLayoutBasic/> */}
    <Nav/>   
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/users" element={<Users/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path="/github" element={<Githubuser />} />
    </Routes>
    </>
  )
}

export default App