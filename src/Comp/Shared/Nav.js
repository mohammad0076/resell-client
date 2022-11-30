import React, { useContext, useEffect, useState } from 'react';
import brazil from './nn.png'
import { Link } from 'react-router-dom'
import Drvide from './Drvide';
import { AuthContext } from '../Au/Authprovider';

const Nav = () => {
    const { user, logOut, option } = useContext(AuthContext);
    {

        // const result = option?.find(item => item?.email === user?.email)
        // const log = result.options;
        // console.log(log)


        // item => (item?.email) === user?.email





        const handlelogout = () => {
            logOut()
                .then(() => { })
                .catch(err => console.log(err))
        }
        const manu = <>
            <li className='font-semibold  normal-case text-xl'><Link to='/'>Home</Link></li>
            <li className='font-semibold  normal-case text-xl'><Link to='/blogs'>Blogs</Link></li>

            <li className='font-semibold  normal-case text-xl'><Link to='/category'>Ctegory</Link></li>
            <li className='font-semibold  normal-case text-xl'><Link to='/adv'>ADV</Link></li>




            {
                user?.email ?
                    <>
                        <li className='font-semibold  normal-case text-xl'><button onClick={handlelogout}>Logout</button></li>
                        <li className='font-semibold  normal-case text-xl'><Link to='/dashboard'>Dashboard</Link></li>


                        {/* <li className='font-semibold  normal-case text-xl'>{log}</li> */}

                    </>

                    :

                    <li className='font-semibold  normal-case text-xl'><Link to='/login'>Login</Link></li>
            }
        </>
        return (
            <div className=''>
                <div className="navbar text-primary-content h-20 ">
                    <div className="navbar-start ">
                        <div className="dropdown ">
                            <label htmlFor="dashboard" tabIndex={0} className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    manu
                                }

                            </ul>
                        </div>



                        <Link to='/' className="btn btn-ghost normal-case text-xl">OOBBSS</Link>


                    </div>
                    <div className="navbar-center hidden lg:flex justify-between">
                        <ul className="menu menu-horizontal p-0">
                            {manu}

                        </ul>
                    </div>
                    <label htmlFor="dashboard" tabIndex={2} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>


                </div>
                <Drvide></Drvide>
            </div>



        );
    }
};

export default Nav;