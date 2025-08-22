import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Loading from './Loading';

const MainLayout = () => {
    const {state}=useNavigation();
    return (
        <div className='text-base-200'>
            <div className='flex flex-col '>
            <Navbar></Navbar>
            </div>

            <div className='min-h-screen flex-grow'>
              {state=='loading' ? <Loading></Loading>:<Outlet></Outlet>}
            </div>
      
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;