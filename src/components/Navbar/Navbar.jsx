import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState(" ")

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
                <a href='#app-download' onClick={() => setMenu('mobile')} className={menu === 'mobile' ? 'active' : ''}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>contact us</a>
            </ul>
            <div className="navbar-right">
                <FaSearch />
                <div className="navbar-search-icon">
                    <Link to='/cart'><FaShoppingBasket /></Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar