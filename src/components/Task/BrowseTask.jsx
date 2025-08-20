import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';
const BrowseTask = () => {
    const tasks = useLoaderData();
    console.log(tasks);
    return (
        <div>
            <h1 className='my-10 text-center text-4xl font-bold'>All Available Tasks</h1>

            <div className='mx-10 mb-10 grid md:grid-cols-3 grid-cols-2 gap-5'>

                {
                    tasks.map(task => <TaskCard task={task}></TaskCard>)
                }
            </div>
        </div>

    );
};

export default BrowseTask;