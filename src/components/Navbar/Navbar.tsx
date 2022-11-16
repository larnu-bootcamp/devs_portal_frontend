import React from 'react'
import Logo from "../../assets/Logo-Morado.svg"
import "./navbar.css"
import NavbarMobile from './NavbarMobile';


const Navbar = () => {
  
  return (
    <>
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href="https://es.larnu.com/">
          <img src={Logo} alt="Logo LarnU" />
        </a>
      </div>
      <div className='navbar__links'>
        <a href="https://es.larnu.com/bootcamp">Bootcamp</a>
        <a href="https://es.larnu.com/blog">Blog</a>
        <a href="/">Egresados</a>
        <a href="https://es.larnu.com/copia-de-home">Misión</a>
      </div>
      <div className='navbar__button'>
        <button>
          Registrate
        </button>
      </div>
    </div>
    <NavbarMobile/>
    </>
  );
};

export default Navbar;