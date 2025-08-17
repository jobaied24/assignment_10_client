import React from 'react';
import Banner from './Banner';
import illustrator from '../assets//illustrator1.png';

const Home = () => {
    return (
        <div className=''>
            
            <div>
                <Banner></Banner>
            </div>

            <div className='my-16 flex justify-center items-center'>
                <div>
                    <h1 className='text-6xl font-bold'>Get work done <br />  with top freelance talent.</h1>
                    <p className="mt-4 text-lg text-blue-900">
                        Hire experts. Save time. Grow your business.
                    </p>
                </div>
             <img className='w-[450px]' src={illustrator} alt="" />
            </div>

        </div>
    );
};

export default Home;