import React from 'react';
import { Link } from 'react-router';

const TaskCard = ({task}) => {
    const {category,title,budget,_id,deadline}=task
    return (
       <div className="card border-2shadow-lg bg-base-200 text-white">
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">Title: {title}</h2>
    <h2 className="text-lg">Category: {category}</h2>
    <h2 className="text-lg">Budget: {budget}</h2>
    <h2>Deadline: {deadline}</h2>
    <div className="card-actions justify-end">
      <Link to={`/taskDetails/${_id}`} className="btn bg-white text-base-200 hover:bg-gray-300">See details</Link>
    </div>
  </div>
</div>
    );
};

export default TaskCard;