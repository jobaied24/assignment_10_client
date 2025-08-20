import React from 'react';
import { useLoaderData } from 'react-router';

const MyTask = () => {
    const taskDataWithEmail=useLoaderData();
    console.log(taskDataWithEmail)
    return (
        <div>
            <h1>My task</h1>
        </div>
    );
};

export default MyTask;