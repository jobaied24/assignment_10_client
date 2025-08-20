import React, { useContext } from 'react';
import { data } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddTask = () => {

  const { user } = useContext(AuthContext);

  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    console.log(taskData);

    fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
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
      <h1 className='my-5 text-center text-4xl font-bold'>Add Task</h1>

      {/* form */}
      <form onSubmit={handleAddTask}>
        <div className='my-10'>
          <div className='mx-10 grid md:grid-cols-2 gap-5'>

            {/* title */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Task title</label>
              <input type="text" name='title' className="input w-full" placeholder="Task title" />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Category</label>
              <input type="text" name='category' className="input w-full" placeholder="Category" />
            </fieldset>

            {/* Deadline */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Deadline</label>
              <input type="date" name='deadline' className="input w-full" placeholder="Deadline" />
            </fieldset>

            {/* Budget */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Budget</label>
              <input type="text" name='budget' className="input w-full" placeholder="Budget" />
            </fieldset>

            {/* Name  */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Name </label>
              <input type="text" name='name' value={user.displayName} className="input w-full" placeholder="Name" />
            </fieldset>

            {/* Email */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600"> Email</label>
              <input type="email" name='email' value={user.email} className="input w-full" placeholder=" Email" />
            </fieldset>

          </div>

          <div className='mx-10 my-5 grid gap-6'>
            {/* Description  */}
            <fieldset className="fieldset grid md:grid-cols bg-gray-300 border-base-300 rounded-box border p-4">
              <label className="label text-gray-600">Description</label>
              <input type="text" name='description' className="input w-full" placeholder="Description" />
            </fieldset>

            {/* add Task */}
            <input type="submit" className='btn btn-lg mb-10 text-base-100' value="Add Task" />

          </div>
        </div>
      </form>


    </div>
  );
};

export default AddTask;