import React, { useContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Comp/Au/Authprovider';
import Nav from '../Comp/Shared/Nav';
import useAdmin from '../hook/useAdmin';
import useUser from '../hook/useUser';
const Dashboardlayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const selldata = useLoaderData();
    const [isUser] = useUser(user?.email)
    {
        console.log(selldata)
    }

    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>my Orders</Link></li>




                        {
                            isUser && <><li>
                                <Link to='dashboard/addaproduct'>Add a Product</Link></li>
                                <li>
                                    <Link to='/dashboard/myproducts'>My Products</Link></li>

                            </>

                        }
                        {
                            isAdmin && <><li>
                                <Link to='dashboard/allbuyers'>All Buyers & sellers</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboardlayout;