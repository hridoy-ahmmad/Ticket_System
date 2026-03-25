import React, { use } from 'react';
import Container from '../container';
import IssueCard from './IssueCard';
import TaskStaus from '../Taskbar/TaskStaus';

const IssuesSection = ({ issuePromise, handleCard, issues }) => {
    const customerIssues = use(issuePromise)
    console.log(issues);

    return (
        <Container>
            <div className=' mt-5 gap-4'>
                <div >
                    <h1 className='font-bold'>Customers' Issues-</h1>
                    <div className='flex gap-5'>
                        <div className='grid grid-cols-2 gap-3 mt-5 flex-3'>
                            {
                                customerIssues.map(item => <IssueCard key={item.id} item={item} handleCard={handleCard}></IssueCard>)
                            }
                        </div>
                        <div className='flex-1 mt-5'>
                            <div className='bg-white p-3 rounded-md '>
                                <h1 className='font-bold text-xl text-center'>Task Status</h1>
                                {
                                    issues.map(item => <TaskStaus item={item}> </TaskStaus>)
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