import React from 'react';

const ErrorCard = () => {
    return (
        <div className="card bg-base-200 mx-auto p-10 my-20 w-96 shadow-sm">
  <div className="card-body gap-5 items-center text-center">
    <h2 className="card-title text-5xl text-white">404</h2>
    <h3 className='text-2xl text-white'>Page not found</h3>
  </div>
</div>
    );
};

export default ErrorCard;