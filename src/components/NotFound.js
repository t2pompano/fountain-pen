import React from 'react';
import { Link } from 'react-router-dom';
import error from '../images/404.jpg';

const NotFound = () => {
    return (
        <main>
            <div className='pg-header'>
                <div className='container'>
                    <h1>404 ERROR</h1>
                </div>
            </div>
            <div className='container content'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-lg-5'>
                        <h1>Page not Found..........</h1>
                        <Link to='/' className='btn btn-primary'>Go Back to Home</Link>
                    </div>
                    <div className='col-lg-7'>
                        <img src={error} height={500} width={600} alt="" />
                    </div>
                </div>
            </div>

        </main>
    );
};

export default NotFound;