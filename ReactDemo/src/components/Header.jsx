import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav className='flex items-center justify-between p-5 bg-gray-800 text-white shadow-lg'>
        <h2 className='text-xl font-bold '>Dhaval Parmar</h2>
        <div className='flex gap-4 '>

          <a href="/" className='hover:text-gray-300 '>Home</a>
          <a href="/about" className='hover:text-gray-300'>About</a>
          <a href="/product" className='hover:text-gray-300'>Product</a>
          <a href="/contact" className='hover:text-gray-300'>Contact</a>
          

          {/* <Link to="/" className='hover:text-gray-300 '>Home</Link>
          <Link to="/about" className='hover:text-gray-300'>About</Link>
          <Link to="/product" className='hover:text-gray-300'>Product</Link>
          <Link to="/contact" className='hover:text-gray-300'>Contact</Link> */}
        </div>
        <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow'>Logout</button>
      </nav>
  )
}

export default Header