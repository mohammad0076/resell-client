import React, { useContext } from 'react';
import { AuthContext } from '../Au/Authprovider';
import {
    useQuery,

} from '@tanstack/react-query'

const Mydsh = () => {
    const { user } = useContext(AuthContext);

    const url = `https://oobbss-server.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearersssss ${localStorage.getItem(`acccessToken`)}`

                }
            });
            const data = await res.json();
            return data;
        }

    })
    return (
        <div className='mt-5'>
            <h1 className='font-semibold  normal-case text-xl'>My orders</h1>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>price</th>
                            <th>phone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings.length &&
                            bookings?.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{booking.item}</td>
                                <td>{booking.price}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.location}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mydsh;