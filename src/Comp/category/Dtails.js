import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import Dtalss from './dtalss';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import Loading from '../Shared/Loading/Loading';

const Dtails = () => {
    const catdtail = useLoaderData()
    const [book, setbook] = useState(null)
    const [loading, setlaoding] = useState(null)





    return (


        <section>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    catdtail.map(card => <Dtalss card={card} setbook={setbook}></Dtalss>)
                }

            </div>
            {book &&
                <Book book={book} setbook={setbook}></Book>
            }
        </section>


    );
};

export default Dtails;