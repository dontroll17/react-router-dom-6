import React from "react";
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/product">Product</NavLink>
            </header>

            <Outlet /> 
            <footer>
                Placeholder
            </footer>
        </>
    )
}

export default Layout;