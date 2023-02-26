import React from 'react';
import { Link } from 'react-router-dom';
import Pen from '../images/1.jpg'
import REVIEWS from '../ReviewData';

const Home = () => {
    return (
        <main>
            <div className='pg-header'>
                <div className='container'>
                    <h1>Welcome to Titu-Florida's web</h1>
                </div>
            </div>
            <div className='container content'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-lg-6'>
                        <h1 style={{ color: 'white' }}>Fountain Pen  &#8594;</h1>
                        <h1 style={{ color: 'blue' }}>Fountain Pen  &#8594;</h1>
                        <p style={{ color: 'white' }}>
                            A fountain pen is a writing instrument which uses a metal nib to apply a water-based ink to paper. It is distinguished from earlier dip pens by using an internal reservoir to hold ink, eliminating the need to repeatedly dip the pen in an inkwell during use. The pen draws ink from the reservoir through a feed to the nib and deposits the ink on paper via a combination of gravity and capillary action. Filling the reservoir with ink may be achieved manually, via the use of an eyedropper or syringe, or via an internal filling mechanism which creates suction (for example, through a piston mechanism) or a vacuum to transfer ink directly through the nib into the reservoir.
                        </p>
                    </div>
                    <div className='col-lg-6 img-wrap' >
                        <img src={Pen} height={500} width={600} alt="" />

                    </div>
                </div>
            </div>
            {/* REVIEWs///////////////////////////////// */}

            <div>
                <h1 style={{ color: "red" }}>Reviews Three Of Our Valued Customer</h1>
            </div>
            <div className='container content'>
                <div className='row products-row'>
                    {REVIEWS.slice(0, 3).map((product) => {
                        return (
                            <div className='col-lg-4' key={product.id}>
                                <div className='card'>
                                    <div className='img-wrap'>
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{product.name}</h5>
                                        <p className='card-text'>{product.review}</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span>Rating:<strong className='price'>{product.point}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className='reviewbutton'>
                <Link to='/reviews' className='btn btn-primary btn-lg align-center'>SEE ALL REVIEWS</Link>
            </div>
        </main>
    );
};

export default Home;