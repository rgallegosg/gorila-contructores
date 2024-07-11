import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './navigation.style.css';


const Navigation = () => {
    return (
        <Fragment>
                <div className="container">
                    <NavLink className="button-nav-link-container" to='/'>
                        Inicio
                    </NavLink>
                    <NavLink className="button-nav-link-container" to='contacto'>
                        Contacto
                    </NavLink>
                    <NavLink className="button-nav-link-container" to='servicios'>
                        Servicios
                    </NavLink>
                    <NavLink className="button-nav-link-container" to='galeria'>
                        Galería
                    </NavLink>
                </div>
                <Outlet />
        </Fragment>
    );
};

export default Navigation;