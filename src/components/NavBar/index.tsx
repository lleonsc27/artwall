import React, { useState } from "react";
import "../../assets/styles/navBar.css";
import ArtWallLogo from "../../assets/images/artwall-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/images/shopping-bag-icon.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={ArtWallLogo} alt="ArtWall Logo" />
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
            <a className="item-menu" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="item-menu" href="#produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="item-menu" href="#sobre-nos">
              Sobre Nós
            </a>
          </li>
          <li>
            <a className="item-menu" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <CartIcon className="cart" />
    </header>
  );
};

export default NavBar;
