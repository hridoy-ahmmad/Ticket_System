import React from 'react';
import Container from '../container';
import bgImg2 from '../../assets/progressBg2.png'
import bgImg1 from '../../assets/progressBg.png'

const ProgressBar = () => {
    return (
        <Container>
            <div className='md:flex gap-2 my-5 space-y-2'>
                <div
                    style={{
                        backgroundImage: `url(${bgImg2}), url(${bgImg1}), linear-gradient(to right, #862DF8, #CCA4F1)`,
                        backgroundPosition: 'left,right,center',
                        backgroundRepeat: 'no-repeat',
                        WebkitBackgroundSize: 'contain, contain, cover'
                    }}
                    className='flex flex-1 h-56 items-center justify-center font-bold text-white rounded-md text-center'>
                    <div>
                        <p>In Progress</p>
                        <p className='text-5xl '>0</p>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${bgImg2}), url(${bgImg1}), linear-gradient(to right, #53CE68, #01837A)`,
                        backgroundPosition: 'left,right,center',
                        backgroundRepeat: 'no-repeat',
                        WebkitBackgroundSize: 'contain, contain, cover'
                    }}
                    className='flex flex-1 h-56 items-center justify-center font-bold text-white rounded-md text-center'>
                    <div>
                        <p>Resolved</p>
                        <p className='text-5xl '>0</p>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default ProgressBar;