import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import { useState } from 'react';

const TopbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="topbar">
      <div className="topbar-content bg-color">
        <img src="https://carminamiron04.github.io/final-project/C.png" alt="Logo" className="logo"/>
        <nav className={`topbar-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/aboutInfo" className="nav-link">About</Link>
        <Link to="/favorites-page" className="nav-link">Favorites</Link>
        <Link to="/contacts" className="nav-link">Contact</Link>
        </nav>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default TopbarContainer;