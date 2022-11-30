import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { async } from '@firebase/util';
import toast from 'react-hot-toast';

const Allusers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://oobbss-server.vercel.app/users`);
            const data = await res.json();
            return data;

        }
    })


    const makeAdmin = id => {
        fetch(`https://oobbss-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorizatioon: `beasrer ${localStorage.getItem(`acccessToken`)}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully.')
                    refetch();
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className='mt-5'>
                <h1 className='font-semibold  normal-case text-xl'>My orders</h1>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th> Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((Buy, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>{Buy.name}</td>
                                    <td>{Buy.email}</td>
                                    <td>{Buy.option}</td>
                                    <td>{Buy?.role !== 'admin' && <button onClick={() => makeAdmin(Buy._id)} className='btn btn-xs btn-primary'>Make admin</button>}</td>
                                    <td><button className='btn btn-xs btn-danger'>delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allusers;