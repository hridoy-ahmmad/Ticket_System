import React from 'react';

const Resolved = ({item}) => {
    return (
        <div className='w-full bg-green-100 p-4 rounded-md mt-2'>
            <p className='text-sm font-semibold text-gray-700' > {item.title} </p>
            <p className='text-green-600 font-bold text-sm mt-1'>Task  completed</p>
        </div>
    );
};

export default Resolved;