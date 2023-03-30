import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Foods from '../Foods/Foods';

const FoodsContainer = () => {
    const [foods, setFoods] = useState([]);

    const [food, setFood] = useState({}); // we can use [];

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, []);

    // handler func
    const foodHandler = (food) => {
        // console.log(food);
        setFood(food);
    };

    return (
        <section className='container row d-md-flex'>
            {/* foods container */}
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ width: "88%" }}>
                {
                    foods.map(food => <Foods food={food} key={food.idMeal} foodHandler={foodHandler}></Foods>)
                }
            </div>

            <div className="cart-container bg-warning position-fixed end-0 h-100 w-25">
                <Cart food={food}></Cart>
            </div>
        </section >
    );
};

export default FoodsContainer;