import React from 'react';

const TaskStaus = ({ item, handleComplete }) => {
    // console.log(item);

    return (
        <div className='flex flex-col gap-4 mt-5 p-3 shadow bg-green-50'>
            <h1 className='text-md font-semibold '>{item.title} </h1>
            <button
                onClick={() => handleComplete(item)}
                className='bg-[#00A63E] py-2 w-full rounded-md text-lg text-white'> Complete </button>

        </div>
    );
};

export default TaskStaus;