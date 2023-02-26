import React from 'react';
import REVIEWS from '../ReviewData';

const Review = () => {
    return (
        <main>
            <div className='pg-header'>
                <div className='container'>
                    <h1>Customer Review</h1>
                    <small className='text-light'>Titu - (001)-954-707-7751</small>
                </div>
            </div>
            <div className='container content'>
                <div className='row products-row'>
                    {REVIEWS.map((product) => {
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
        </main>
    );
};

export default Review;