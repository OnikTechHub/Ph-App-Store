import React from 'react';

const Ratings = () => {
    return (
        <div className='bg-purple-600 text-white text-center space-y-4 py-12'> 
          <div className='text-5xl font-semibold'><h1>Trusted by Millions, Built for You</h1></div>
          <div className='flex justify-between w-8/12 mx-auto py-6'>
            <div>
                <p className='text-sm text-gray-200'>Total Downloads</p>
                <h1 className='text-7xl font-bold'>29.6M</h1>
                <p className='text-sm text-gray-200'>21% more than last month</p>
            </div>
            <div>
                <p className='text-sm text-gray-200'>Total Reviews</p>
                <h1 className='text-7xl font-bold'>906K</h1>
                <p className='text-sm text-gray-200'>46% more than last month</p>
            </div>
            <div>
                <p className='text-sm text-gray-200'>Active Apps</p>
                <h1 className='text-7xl font-bold'>132+</h1>
                <p className='text-sm text-gray-200'>31 more will Launch</p>
            </div>
          </div>
        </div>
    );
};

export default Ratings;