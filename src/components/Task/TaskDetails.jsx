import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const taskData=useLoaderData();
    const {name,email,title,category,deadline,description,budget}=taskData;
    return (
        <div className='mx-10'>
            <h1 className='my-10 text-center text-4xl font-bold '>Task details</h1>
           {/* card */}
            <div className="card mb-8 mx-auto py-10 px-4 w-2/4 shadow-2xl rounded-xl bg-base-200 text-white">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold ">Task Title: {title}</h2>
       
    <div className="grid grid-cols-2 gap-y-4 gap-x-24 mt-8 text-left">
      <p><span className="font-semibold ">Category:</span> {category}</p>
      <p><span className="font-semibold">Budget:</span> ${budget}</p>
      <p><span className="font-semibold">Deadline:</span> {deadline}</p>
      <p><span className="font-semibold">Posted by:</span> {name}</p>
      <p className="col-span-2"><span className="font-semibold">Email:</span> {email}</p>
    </div>
    
    <p className='mt-4 text-sm italic'><span className='font-semibold'>Description:</span> {description}</p>
  </div>
</div>
        </div>
    );
};

export default TaskDetails;