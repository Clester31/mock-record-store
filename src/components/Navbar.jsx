import { useContext, useState } from 'react'
import './Styles/Navbar.css'
import { Context } from '../Context'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { cart } = useContext(Context);

    return (
        <div className="navbar">
            <div className="logo">
                <Link to='/' style={{display: 'flex', textDecoration: 'none', color: '#814900'}}>
                    <i className="fa-solid fa-record-vinyl"></i>
                    <h1>VinlyGeeks</h1>
                </Link>
            </div>
            <div className="links">
                <ul className="store-links">
                    <Link style={{ textDecoration: 'none' }} to='/onsale'><li>On Sale</li></Link>
                    <Link style={{ textDecoration: 'none' }} to='/new'><li>New Arrivals</li></Link>
                    <Link style={{ textDecoration: 'none' }} to='/classics'><li>Classics</li></Link>
                    <Link style={{ textDecoration: 'none' }} to='/popular'><li>Most Popular</li></Link>
                </ul>
            </div>
            <div className="login-cart">
                <Link style={{ textDecoration: 'none' }} to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div style={cart.length > 0 ? { display: 'flex' } : { display: 'none' }} className="cart-icon">
                <p>{cart.length}</p>
            </div>
        </div>
    )
}