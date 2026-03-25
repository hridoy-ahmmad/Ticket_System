import React, { use, useState } from 'react';
import Container from '../container';
import IssueCard from './IssueCard';
import TaskStaus from '../Taskbar/TaskStaus';
import Resolved from '../Taskbar/Resolved';
import NoTask from '../Taskbar/NoTask';

const IssuesSection = ({ issuePromise, handleCard, issues, handleComplete, resolved }) => {
    const customerIssues = use(issuePromise)
    const [resolveddata, setResolveddata] = useState(customerIssues)
    const filterReslved = resolveddata.filter(item => !resolved.includes(item))

    console.log(filterReslved);


    return (
        <Container>
            <div className=' mt-5 gap-4'>
                <div >
                    <h1 className='font-bold'>Customers' Issues- {filterReslved.length} </h1>
                    <div className='flex gap-5'>
                        <div className='grid grid-cols-2 gap-3 mt-5 flex-3'>
                            {
                                filterReslved.map(item => <IssueCard key={item.id} item={item} handleCard={handleCard}></IssueCard>)
                            }
                        </div>
                        <div className='flex-1 mt-5'>
                            <div className='bg-white p-3 rounded-md '>
                                <h1 className='font-bold text-xl text-center'>Task Status</h1>
                                {
                                    issues.length === 0 ? <NoTask></NoTask> : issues.map(item => <TaskStaus item={item} handleComplete={handleComplete}> </TaskStaus>)
                                }
                            </div>
                            <div className='bg-white p-3 rounded-md mt-10'>
                                <h1 className='font-bold text-xl text-center'>Resolved Task </h1>
                                {
                                    resolved.length === 0 ? <NoTask></NoTask> : resolved.map(item => <Resolved item={item}></Resolved>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default IssuesSection;