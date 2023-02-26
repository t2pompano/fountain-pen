import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex justify-content-between align-item-center'>

                    <div className='logo'>
                        <Link to='/' className='brand'>t2fl</Link>
                    </div>
                    <nav className='nav nav-pills'>
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
                        <NavLink to='reviews'
                            className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>Reviews
                        </NavLink>
                        <NavLink to='blogs'
                            className={(navData => navData.isActive ? 'nav-link active' : 'nav-link')}>Blogs
                        </NavLink>
                    </nav>

                </div>

            </div>
        </header>
    );
};

export default Header;