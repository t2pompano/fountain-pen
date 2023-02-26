import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <nav className='d-flex justify-content-center'>
                    <NavLink to='/'
                        className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>Home
                    </NavLink>
                    <NavLink to='about'
                        className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>About
                    </NavLink>
                    <NavLink to='products'
                        className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>Products
                    </NavLink>
                    <NavLink to='dashboard'
                        className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>Dashboard
                    </NavLink>
                </nav>
                <div className='copyrights'>
                    &copy; 2023<Link to='/'>Titu Florida -All Rights Reserved.</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;