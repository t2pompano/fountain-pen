import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import PRODUCTS from '../Data';

const SingleProducts = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const { pathname } = useLocation();

    // get product

    const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId));
    // use == instead of === if the useparam fails to get the id;
    // or just check data type or use parseInt(id);
    // console.log(typeof (productId));
    const { id, image, name, price, details } = singleProduct;
    // console.log(productId)
    // console.log(singleProduct);
    return (
        <main>
            <div className='pg-header'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-7'>
                            <h1>{name}</h1>
                            <p className='text-light'>path: {pathname}</p>
                        </div>
                        <div className='col-lg-5'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb justify-content-end'>
                                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                                    <li className='breadcrumb-item'><Link to='/products'>products</Link></li>
                                    <li className='breadcrumb-item active text-primary' aria-current='page'>{name}</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container content'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src={image} alt="" className='img-fluid' />
                    </div>
                    <div className='col-lg-7 text-light'>
                        <h2>{name}</h2>
                        <p className='price'><strong>price: {price}</strong></p>
                        <p>{details} {details}{details}{details}</p>


                        <br />
                        <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>BACK</button> &nbsp;
                        <button className='btn btn-primary btn-sm' onClick={() => navigate('/products')}>Navigate to products</button> &nbsp;
                        <Link to='/products' className='btn btn-primary btn-sm'>PRODUCTS</Link>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleProducts;