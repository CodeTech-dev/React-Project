import { Link, useLocation } from 'react-router-dom';
import "../styles/components/Header.css"

import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    }

    // function to close menu when link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className="navSection">
            <header className="nav-bar">
                <div className="nav-logo">
                    <Link to ="/"><h1 className = "logo-h2">TechCare</h1></Link>   
                </div>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to = "/"
                        className={isActive('/') ? 'active' : ''}
                        onClick = {closeMenu}
                        >Home</Link></li>

                         <li><Link to = "/services" 
                        className={isActive('/services') ? 'active' : ''}
                        onClick = {closeMenu}
                        >Services</Link></li>

                        <li><Link to = "/pricing"
                        className={isActive('/pricing') ? 'active' : ''}
                        onClick = {closeMenu}
                        >Pricing</Link></li>

                        <li><Link to = "/about"
                        className={isActive('/about') ? 'active' : ''}
                        onClick = {closeMenu}
                        >About</Link></li>
 
                        <li><Link to = "/contact"
                        className={isActive('/contact') ? 'active' : ''}
                        onClick = {closeMenu}
                        >Contact</Link></li>
                    </ul>
                </nav>
                
                <div className={`hamburger ${isMenuOpen ? 'active': ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
        </div>
    );
}

export default Header;