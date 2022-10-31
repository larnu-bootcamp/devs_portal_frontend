import React from 'react'
import Logo from "../../assets/Logo-Morado.svg"
import "./navbar.css"
import NavbarMobile from './NavbarMobile';


const Navbar = () => {
  
  return (
    <>
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={Logo} alt="Logo LarnU" />
      </div>
      <div className='navbar__links'>
        <a href="#">Bootcamp</a>
        <a href="#">Blog</a>
        <a href="#">Egresados</a>
        <a href="#">Mision</a>
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