import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Error;