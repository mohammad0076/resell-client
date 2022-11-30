import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Au/Authprovider';

const Book = ({ book, setbook }) => {
    const { user } = useContext(AuthContext);
    {
        console.log(user, book)
    }

    const handlebook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyer_name: name,
            email, item, price, phone, location

        }

        fetch('https://oobbss-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setbook('')
                    toast.success('item is booked')

                }






            })

    }



    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <form onSubmit={handlebook} className='grid grid-cols-1 gap-3' >

                        <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} disabled className="input input-bordered input-primary" />
                        <input type="text" name="email" placeholder="email" value={user.email} className="input input-bordered input-primary " />
                        <input type="text" name="item" placeholder="item name" value={book.title} className="input input-bordered input-primary " />
                        <input type="text" name="price" placeholder="price" value={book.resale_P} className="input input-bordered input-primary " />
                        <input type="text" name="phone" placeholder="phone" className="input input-bordered input-primary " />
                        <input type="text" name="location" placeholder="meting location" className="input input-bordered input-primary " />
                        <br></br>
                        <button type="submit" className='btn btn-accent' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Book;