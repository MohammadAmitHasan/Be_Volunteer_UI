import React, { useState } from 'react';
import logo from '../../img/Group 1329.png'
import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from './CustomLink';

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-white  flex container items-center mx-auto'>
            <div>
                <img src={logo} className='h-10' alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-white z-50 p-3 md:p-0 md:flex justify-end absolute md:static w-full duration-300 ease-in ${open ? 'top-14' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/donation'}>Donation</CustomLink>
                <CustomLink to={'/events'}>Events</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>

            </ul>
        </nav>

    );
};

export default Nav;