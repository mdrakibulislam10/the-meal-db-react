import React from 'react';

const Cart = ({food}) => {
    // console.log(food);
    return (
        <div>
            <h4>Cart</h4>
            <h5 className='text-start mt-4'>Name: {food.strMeal}</h5>
        </div>
    );
};

export default Cart;