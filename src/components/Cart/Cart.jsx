import React from 'react';

const Cart = ({ food }) => {
    // console.log(food);
    const { strMealThumb, strMeal, strYoutube } = food;
    return (
        <div>
            <h4>Cart</h4>
            <img className='w-50' src={strMealThumb} alt="" />
            <h5 className='text-start my-4'>Name: {strMeal}</h5>
            <p className='text-start'> YouTube:
                <a className='text-info border border-primary rounded p-1 ms-2' target={'_blank'} href={strYoutube}>See Recipe On YT</a>
            </p>
        </div>
    );
};

export default Cart;