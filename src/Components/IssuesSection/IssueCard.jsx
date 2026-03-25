import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';

const IssueCard = ({ item, handleCard }) => {


    return (
        <div
            onClick={() => handleCard(item)}
            className='p-4 bg-white rounded-xl flex flex-col gap-2 shadow-sm h-36'>
            <div className='flex justify-between'>
                <h3 className='font-semibold'> {item.title} </h3>
                <div className={`py-1 px-3 rounded-full ${item.status == 'Open' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    <span
                        className={`flex items-center gap-2 font-semibold text-sm`}><FaCircle /> {item.status}</span>
                </div>
            </div>
            <p className='line-clamp-2 text-sm  text-gray-500'>{item.description}</p>
            <div className='flex justify-between text-gray-500'>
                <p>#{item.id}</p>
                <p
                    className={`${item.priority === 'High' ? 'bg-red-100 text-red-600 font-semibold' : ' bg-amber-100 text-amber-600'} px-2 rounded-2xl text-sm`}
                >{item.priority}</p>
                <p>{item.assignedTo}</p>
                <p className='flex items-center gap-1'><LuCalendarDays /> {item.date}</p>
            </div>
        </div>
    );
};

export default IssueCard;