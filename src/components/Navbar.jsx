import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import Dropdown from './Dropdown';

const Navbar = () => {
  const {user}=useContext(AuthContext);
    const link=<>
     <NavLink>Home</NavLink>
    <NavLink>Add Task</NavLink>
    <NavLink>Browse Task</NavLink>
    <NavLink>My Posted Task</NavLink>
    </>
    return (
            <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        link
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BEWORK</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-10 px-1">
       {link}
    </ul>
  </div>
  <div className="navbar-end gap-4">

    {
      user ? <Dropdown></Dropdown> :
      <div className='flex gap-4'>
    <Link to='/login' className="btn text-base-100">Login</Link>
    <Link to='/register' className="btn text-base-100">Sign Up</Link>
        </div>

    }
  
  </div>
</div>
    );
};

export default Navbar;