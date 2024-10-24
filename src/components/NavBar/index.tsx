import React, { useState, useContext } from "react";
import "../../assets/styles/navBar.css";
import ArtWallLogo from "../../assets/images/artwall-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/images/shopping-bag-icon.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useContext(CartContext);

  const qtyTotal = cartContext?.qtyTotal || 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={`/`} onClick={closeMenu}>
          <img className="logo-img" src={ArtWallLogo} alt="ArtWall Logo" />
        </Link>
      </div>

      <div
        className={`toggle-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`menu-nav ${isOpen ? "show" : ""}`}>
        <ul className="menu">
          <li>
            <Link className="item-menu" to={`/products`} onClick={closeMenu}>
              Produtos
            </Link>
          </li>
          <li>
            <Link className="item-menu" to={`/about`} onClick={closeMenu}>
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link className="item-menu" to={`/contact`} onClick={closeMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Link className="cart-icon" to={`/cart`} onClick={closeMenu}>
          <CartIcon />
          {qtyTotal > 0 && <span className="cart-quantity">{qtyTotal}</span>}
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
