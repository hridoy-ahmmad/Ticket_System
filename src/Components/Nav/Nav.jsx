import React from 'react';
import Container from '../container';
import { FaPlus } from 'react-icons/fa';

const Nav = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm">
            <Container>
                <div className='text-center md:text-start md:flex justify-between items-center'>
                    <div className="flex-1">
                        <a className="font-bold text-xl">CS — Ticket System</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 ">
                            <button className='py-2 px-5 flex items-center gap-3 rounded-md text-lg bg-gradient-to-r from-[#640be0] to-[#9448ff] font-semibold text-white'><FaPlus /> Add Issue</button>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Nav;