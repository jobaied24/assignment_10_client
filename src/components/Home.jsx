import React  from 'react';
import Banner from './Banner';
import illustrator from '../assets//illustrator1.png';
import { useLoaderData } from 'react-router';
import TaskCard from './Task/TaskCard';

const Home = () => {
    const tasks=useLoaderData();
    
    return (
        <div>
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

            <div className='mx-10 my-20 grid md:grid-cols-3 grid-cols-2 gap-5'>
                {
                tasks.map(task=><TaskCard task={task}></TaskCard>)
                }
            </div>

            <div className='mx-10 my-24'>
                <h2 className='text-5xl mb-10 font-bold text-center'>Key Features</h2>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-7'>
                       
                        <div className="p-10 text-center shadow rounded-xl hover:text-white border-2 border-[#401561] hover:bg-base-200 hover:scale-105 transition transform ease-in-out  duration-300">
      <h3 className="text-2xl font-semibold mb-5">Secure Payments</h3>
      <p>Your money is safe with us. Payments are released only when work is approved.</p>
    </div>

                        <div className="p-10 text-center shadow rounded-xl hover:text-white border-2 border-[#401561] hover:bg-base-200 hover:scale-105 transition transform ease-in-out  duration-300">
      <h3 className="text-2xl font-semibold mb-5">Verified Freelancers</h3>
      <p>Work with trusted freelancers who are reviewed and verified by our team.</p>
    </div>
                        <div className="p-10 text-center shadow rounded-xl hover:text-white border-2 border-[#401561] hover:bg-base-200 hover:scale-105 transition transform ease-in-out  duration-300">
      <h3 className="text-2xl font-semibold mb-5">Fast Delivery</h3>
      <p>Save time by hiring freelancers who deliver high-quality work quickly.</p>
    </div>
                        
                </div>
            </div>


        </div>
    );
};

export default Home;