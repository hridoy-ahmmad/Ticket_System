import React from 'react';
import img from '../../assets/kOnzy.gif'
import Container from '../container';

const Loading = () => {
    return (
     
            <div className=' flex items-center justify-center'>
                <img className='h-24 w-24' src={img} alt="" />
            </div>
   
    );
};

export default Loading;