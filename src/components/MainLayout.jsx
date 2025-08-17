import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className='text-base-200'>
            <div className='flex flex-col '>
            <Navbar></Navbar>
            </div>

            <div className='min-h-screen flex-grow'>
              <Outlet></Outlet>
            </div>
      
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;