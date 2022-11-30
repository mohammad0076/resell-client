import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
const Adv = () => {
    const { data: adedbook } = useQuery({
        queryKey: ['addedpro'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://oobbss-server.vercel.app/addedbook`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('acccessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    })

    return (
        <div>
            <h1 className='text-4xl mx-5'>total advertize {adedbook?.length}</h1>
            {
                console.log(adedbook)
            }

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {adedbook?.map(card => <Adv card={card}></Adv>)}
            </div>

        </div>
    );
};

export default Adv;