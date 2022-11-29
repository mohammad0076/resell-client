import React from 'react';
import Footer from '../Comp/Shared/Footer';
import Nav from '../Comp/Shared/Nav';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;