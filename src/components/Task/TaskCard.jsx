import React from 'react';

const TaskCard = ({task}) => {
    const {email,category,title,budget,}=task
    return (
       <div className="card border-2 border-gray-300 shadow-lg bg-base-300">
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">Task Title: {title}</h2>
    <h2 className="card-title text-gray-700">Category: {category}</h2>
    <h2 className="card-title text-gray-700">Budget: {budget}</h2>
    <div className="card-actions justify-end">
      <button className="btn bg-gray-600 text-base-100 hover:bg-gray-700">See details</button>
    </div>
  </div>
</div>
    );
};

export default TaskCard;