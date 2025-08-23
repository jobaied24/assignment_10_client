import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2';

const Dropdown = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    title: "Logout successfully",
                    icon: "success",
                    draggable: true
                });
            })
    }

    return (
        <div className="dropdown dropdown-bottom dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
                <img className='w-8 md:w-12 rounded-full' src={user.photoURL}></img>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 text-base-100 rounded-box z-1 w-52 mt-2 py-3 gap-2 shadow-lg">
                <li className='mx-auto font-semibold text-lg'>{user.displayName}</li>
                <li onClick={handleSignOut} className=' btn mx-auto px-8 bg-base-100 text-base-200 font-semibold text-lg'>Log Out</li>
            </ul>
        </div>
    );
};

export default Dropdown;