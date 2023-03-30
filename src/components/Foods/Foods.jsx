import React from 'react';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Foods = (props) => {
    const { strMeal, strMealThumb, strCategory, strInstructions } = props.food;
    const { foodHandler } = props;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2>{strMeal}</h2>
                    <h5 className="card-title">Category: {strCategory}</h5>
                    <p className="card-text">About this food: {strInstructions.slice(0, 120)}</p>
                    <button onClick={() => foodHandler(props.food)} className='btn btn-danger'>
                        See Details <FontAwesomeIcon icon={faInfoCircle}
                        /></button>
                </div>
            </div>
        </div>
    );
};

export default Foods;