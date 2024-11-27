import { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import GorilaLogo from '../../assets/images/nav-bar/gorila_construcores_titulo.png';
import './navigation.style.css';


const Navigation = () => {
    const [openMenu, setOpenMenu] = useState();
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
        <nav className={`navbar ${openMenu ? 'open' : ''}`}>
            <NavLink className="logo-link" to='/'>
                <img src={GorilaLogo} className="logo-container" alt="Gorila Constructores" />
            </NavLink>

            {/* Mobile Version */}
            <div className="burger-menu-icon" onClick={toggleMenu}>
                <div className="burger-bar"/>
                <div className="burger-bar"/>
                <div className="burger-bar"/>
            </div>
            {/* Web Version */}
            <ul className={`nav-links ${openMenu ? 'visible' : ''}`}>
                <li>
                    <NavLink className="button-nav-link-container" to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink className="button-nav-link-container" to='/servicios'>Servicios</NavLink>
                </li>
                <li>
                    <NavLink className="button-nav-link-container" to='/galeria'>Galería</NavLink>
                </li>
                <li>
                    <NavLink className="button-nav-link-container" to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
};

export default Navigation;