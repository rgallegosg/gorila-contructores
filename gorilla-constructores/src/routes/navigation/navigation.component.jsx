import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import GorilaLogo from '../../assets/images/nav-bar/gorila_construcores_titulo.png';
import './navigation.style.css';


const Navigation = () => {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="container-fluid">
                    <NavLink className="logo-link" to='/'>
                        <img src={GorilaLogo} className="logo-container" alt="Gorila Constructores" />
                    </NavLink>
                    <div className="nav-links-container">
                        <NavLink className="button-nav-link-container" to='/'>
                            Inicio
                        </NavLink>
                        <NavLink className="button-nav-link-container" to='servicios'>
                            Servicios
                        </NavLink>
                        <NavLink className="button-nav-link-container" to='/galeria'>
                            Galería
                        </NavLink>
                        <NavLink className="button-nav-link-container" to='/contacto'>
                            Contacto
                        </NavLink>
                    </div>

                </div>
            </div>

            <Outlet />
        </Fragment>
    );
};

export default Navigation;