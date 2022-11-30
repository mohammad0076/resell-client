import React, { useState } from 'react';
import { useContext } from 'react';
import Cm from './Cm';
import { useNavigation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import useAdmin from '../../../hook/useAdmin';
import { AuthContext } from '../../Au/Authprovider';
const Myprodtails = ({ card }) => {
    const naavigation = useNavigation()
    const { user, loading } = useContext(AuthContext);

    const [deleteing, setdelete] = useState(null);
    const [laodin, setlodi] = useState(false)
    const deletungg = (card) => {
        fetch(`https://oobbss-server.vercel.app/addedbook/${card._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('acccessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    if (loading) {
                        return <Loading></Loading>
                        console.log(data)
                    }
                }
            })
    }
    const advertize = (card) => {
        fetch(`https://oobbss-server.vercel.app/advertize/${card._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            }
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const closeMdoal = () => {
        setdelete(null);
    }


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
                <div>
                    <label onClick={() => setdelete(card)} htmlFor="confirmation" className="btn">Delete</label>

                </div>
                <p></p>
                <button className="btn btn-accent" onClick={() => advertize(card)}>Advertise</button>

            </div>
            {
                deleteing && <Cm title={`Are you sure to delete`} successAcrion={deletungg}
                    md={deleteing}
                    mesessag={deleteing.bookname} closeMdoal={closeMdoal}></Cm>
            }

        </div>

    );
};

export default Myprodtails;