import React from 'react'
//import Navbar from '../../components/Layout/Navbar';
import logo from '../images/logo.jpg';
import '../Layout/Layout.css'
const Layout = () => {
  return (
    <>
        
        
        <div className= "fullscreen-image">
      
        <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar-container">
        <input type="text" placeholder="Search" className="search-bar-input" />
        <button className="search-bar-button">Search Your Favourite Food here</button>
      </div>
    </>
  )
}

export default Layout