import React from 'react';

const Advd = ({ card }) => {
    return (
        <div className="card w-96 h-3/4 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">

                <img src={card.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{card.bookname}</h2>
                <p>Location:-{card.Location}   <span className=''></span></p>

                <p>Orginal Price:-{card.orginal_price}$     Resale Price:-{card.Resale_price}$</p>

                <p className='font-bold'>UserName:-{card.username}</p>
                <p>Posted time:-{card.date} </p>
                <p>Used Year:-{card.useyear} years</p>

                <p></p>
                <button className="btn btn-accent" >Buynow</button>

            </div>


        </div>
    );
};

export default Advd;