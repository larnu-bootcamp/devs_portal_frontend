import React from 'react'
import Logo from "../../assets/Logo-Morado.svg"
import IconMenu from "../../assets/menu.png"
import IconClose from "../../assets/x.png" 
import "./navbarMobile.css"
import { useState } from "react"


const NavbarMobile = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

return (
  <div className='navbar--mobile'>
    <div className='navbar--mobile__menu'>
      <div className='navbar--mobile__logo'>
        <img src= {Logo} alt="Logo LarnU" />
      </div>
      <div className='navbar--mobile__iconMenu'data-testid="iconMobile">
        <button onClick={handleToggle}>{navbarOpen ? (<img src={IconClose}></img>):(<img src={IconMenu}></img>)}</button>
      </div>
    </div>
    <div className={`menuNav ${navbarOpen ? "navbar--mobile__links" : "hidden"}`}>
      <a href="#">Bootcamp</a>
      <a href="#">Blog</a>
      <a href="#">Egresados</a>
      <a href="#">Mision</a>
      <button>Registrarse</button>
    </div>
  </div>
)
}

export default NavbarMobile;