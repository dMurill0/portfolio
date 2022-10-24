import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={"/images/face.jpg"} alt="face" />
                <h3>Daniel Murillo Garzón</h3>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="Inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
                    <li><NavLink to="About" className={({ isActive }) => isActive ? "active" : ""}>Sobre mí</NavLink></li>
                    <li><NavLink to="Portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio</NavLink></li>
                    <li><NavLink to="Servicios" className={({ isActive }) => isActive ? "active" : ""}>Servicios</NavLink></li>
                    <li><NavLink to="Contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink></li>


                </ul>

            </nav>
        </header>
    )
}
