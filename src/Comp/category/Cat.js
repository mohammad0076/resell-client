import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const Cat = () => {
    const cats = useLoaderData();
    return (
        <div >
            <h1 className='text-center font-bold text-lg'>Find your Categories</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

                {
                    cats.map(cat => <Cart cat={cat}></Cart>)
                }


            </div>
        </div>
    );
};

export default Cat;