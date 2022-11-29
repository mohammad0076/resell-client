import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cat }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{cat.category}</h2>

                <div className="card-actions justify-end">
                    <Link to={`/category/${cat.category}`}> <button className="btn btn-accent">Go Now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;