import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const data=useLoaderData();
    console.log(data);
        const {name,email,title,category,deadline,description,budget}=data;


    const handleUpdateTask=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const updateData=Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/task/${data._id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
            }
            console.log(data);
        })
    }
    return (
        <div>
            <h1 className='my-10 text-center text-4xl font-bold '>Update Task</h1>
        
         <form onSubmit={handleUpdateTask}>
        <div className='my-10'>
          <div className='mx-10 grid md:grid-cols-2 gap-5'>

            {/* title */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Task title</label>
              <input type="text" name='title' defaultValue={title} className="input w-full" placeholder="Task title" />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Category</label>
              <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Category" />
            </fieldset>

            {/* Deadline */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Deadline</label>
              <input type="date" name='deadline' defaultValue={deadline} className="input w-full" placeholder="Deadline" />
            </fieldset>

            {/* Budget */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Budget</label>
              <input type="text" name='budget' defaultValue={budget} className="input w-full" placeholder="Budget" />
            </fieldset>

            {/* Name  */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Name </label>
              <input type="text" name='name' value={data.name} className="input w-full" placeholder="Name" />
            </fieldset>

            {/* Email */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600"> Email</label>
              <input type="email" name='email' value={data.email} className="input w-full" placeholder=" Email" />
            </fieldset>

          </div>

          <div className='mx-10 my-5 grid gap-6'>
            {/* Description  */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Description</label>
              <input type="text" name='description' defaultValue={description} className="input w-full" placeholder="Description" />
            </fieldset>

            {/* Update Task */}
            <input type="submit" className='btn btn-lg mb-10 text-base-100' value="Update Task" />

          </div>
        </div>
      </form>
        </div>
    );
};

export default UpdateTask;