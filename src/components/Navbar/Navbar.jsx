import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <nav className='main-menu'>
                <div className="navbar-logo">
                    <h2>Foody</h2>
                </div>
                <ul className='main-nav'>
                    <li className="navbar-link"><a href="#home">Home</a></li>
                    <li className="navbar-link"><a href="#about">About</a></li>
                    <li className="navbar-link"><a href="#menu">Menu</a></li>
                    <li className="navbar-link"><a href="#awards">Awards</a></li>
                    <li className="navbar-link"><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-login">
                    <a href="#login" className='navbar-link'>Log In / Registration</a>
                    <a href="/" className='navbar-link'>Book Table</a>
                </div>
                <div className="navbar-small">
                    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                    {
                        toggleMenu && (
                            <div className='navbar-small-overlay'>
                                <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
                                <ul className='navbar-small-links'>
                                    <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                                    <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                                    <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                                    <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                                    <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                                    <li><a href="#" onClick={() => setToggleMenu(false)}>Log In / Registration</a></li>
                                    <li><a href="#" onClick={() => setToggleMenu(false)}>Book Table</a></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;