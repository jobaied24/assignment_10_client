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


        </div>
    );
};

export default Home;