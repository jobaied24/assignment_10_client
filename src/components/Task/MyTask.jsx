import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyTask = () => {
    const taskDataWithEmail = useLoaderData();
    const [tasks,setTasks]=useState(taskDataWithEmail);
    // console.log(taskDataWithEmail);

    const handleDeleteTask=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
            fetch(`http://localhost:3000/task/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainTask=tasks.filter(task1=>(task1._id !== id));
                setTasks(remainTask);

                   Swal.fire({
      title: "Deleted!",
      text: "Your task has been deleted.",
      icon: "success"
    });
            }
        })
 
  }
});

    }
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
                            tasks.map((task,index)=>
                                <tr key={task._id}>
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
                                        <Link onClick={()=>handleDeleteTask(task._id)} className="btn text-white btn-xs">Delete</Link>
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