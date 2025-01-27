import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <button className='btn btn-outline-secondary m-3 p-1' onClick={()=>{navigate('/users/')}}>Users</button>
    <button className='btn btn-outline-secondary m-3 p-1' onClick={()=>{navigate('/github/')}}>gitHub</button>
    <button className='btn btn-outline-secondary m-3 p-1' onClick={()=>{navigate('/products/')}}>Products</button>
    </>
  )
}

export default Home