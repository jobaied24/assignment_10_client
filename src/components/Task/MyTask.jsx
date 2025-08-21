import React from 'react';
import { Link, useLoaderData } from 'react-router';

const MyTask = () => {
    const taskDataWithEmail = useLoaderData();
    console.log(taskDataWithEmail);
    return (
        <div className='mx-10'>
            <h1 className='mt-10 mb-6 text-center text-4xl font-bold '>My Posted Task</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task title</th>
                            <th>Deadline</th>
                            <th>Budget</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            taskDataWithEmail.map((task,index)=>
                                <tr>
                                    <th>
                                      {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                        
                                            <div>
                                                <div className="font-bold text-lg">{task.title}</div>
                                                <div className="text-sm opacity-50">{task.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td className='font-semibold'>{task.deadline}</td>
                                    <td className='font-semibold'>
                                        {task.budget}
                                    </td>
                                    <th className='space-x-2'>
                                        <Link to={`/updateTask/${task._id}`} className="btn text-white btn-xs">Update</Link>
                                        <Link className="btn text-white btn-xs">Delete</Link>
                                        <Link className="btn text-white btn-xs">Bids</Link>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;