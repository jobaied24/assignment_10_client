import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='px-10 py-5 bg-[#240c3b] text-base-100'>
           <div className='my-6 grid grid-cols-3 gap-24'>
            
                {/* contact */}
            <div className='space-y-3'>
                <h3 className='font-semibold'>Contact</h3>
                
                <div>
                    <h4 className='text-sm font-semibold'>Phone:</h4>
                <p className='text-sm text-gray-200'>02398559645</p>
                </div>
                
                <div>
                    <h4 className='text-sm font-semibold'>Email:</h4>
                <p className='text-sm text-gray-200'>bework@gmail.com</p>
                </div>
                
                <div>
                    <h4 className='text-sm font-semibold'>Address:</h4>
                <p className='text-sm text-gray-200'>chittagong,Bangladesh</p>
                </div>
               
            </div>

            {/* terms */}
            <div className='space-y-2'>
                <h3 className='font-semibold mb-6'>Terms</h3>
                <p className='text-sm text-gray-200'>Terms & Conditions</p>
                <p className='text-sm text-gray-200'>Privacy Policy</p>
                <p className='text-sm text-gray-200'>FAQ</p>
            </div>

            {/* social icon */}
            <div className=''>
                <h3 className='font-semibold mb-10'>Social</h3>
               <div className='flex gap-4 '>
                 <IoLogoFacebook />
                <FaInstagram/>
                <FaLinkedin />
                <FaTwitter />

               </div>

            </div>
            </div>
            <p className='text-sm text-center'>© 2015 - 2025 bework® Global Inc.</p>
        </div>
    );
};

export default Footer;