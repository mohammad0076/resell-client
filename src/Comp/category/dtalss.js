import React from 'react';
import Book from './Book';

const Dtalss = ({ card, setbook }) => {

    return (
        <div className="card w-96 h-3/4 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">

                <img src={card.imageLink} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{card.title}</h2>
                <p>Location:-{card.location}   <span className=''>  Language:-{card.language}</span></p>

                <p>Orginal Price:-{card.orginal_p}$     Resale Price:-{card.resale_P}$</p>

                <p className='font-bold'>UserName:-{card.seller_name}</p>
                <p>Posted time:-{card.link} {card.time}</p>
                <p>Used Year:-{card.useyear}</p>


                <div className="card-actions">

                    <label htmlFor="booking-modal" onClick={() => setbook(card)} className="btn btn-accent">Book Now</label>
                </div>

            </div>
        </div>
    );
};

export default Dtalss;