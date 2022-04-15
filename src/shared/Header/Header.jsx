import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Header.css";
import logo from '../../images/logo.png';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    
    const [open, setOpen] = useState(false);

    const [user] = useAuthState(auth);
    console.log(user);

    
    return (
        <header className='w-full sticky top-0 z-10 bg-blue-400'>
            <nav className='w-full px-4 py-3 lg:px-0  lg:w-5/6 mx-auto flex items-center justify-between'>
                <Link to='/' className='text-2xl font-semibold'><img className='w-[180px]' src={logo} alt="" /></Link>
                <ul className={`w-full py-3 lg:py-0 absolute bg-blue-400 lg:bg-inherit lg:static lg:w-auto  left-0  lg:flex lg:items-center z-10 lg:z-0 duration-300 ease-in lg:space-x-3 space-y-2 lg:space-y-0 px-3 lg:px-0 shadow-md lg:shadow-none lg:ml-3 ${ open? 'top-14': 'top-[-180px]'}` }>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/about'>About</NavLink>
                    </li>
                    <li>
                        {
                        user ? <div className='space-x-2'>
                            <Link className='text-white' to=''>{user.displayName}</Link>
                            <button onClick={() => signOut(auth)} className="bg-red-400 px-4 py-2 text-white rounded-md">SignOut</button>
                        </div> : <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/login'>Login</NavLink>
                        }
                    </li>
                </ul>
                
                <button onClick={() => setOpen(!open)} className='w-7 h-7 lg:hidden'>
                    {open ? <HiX className='text-3xl text-white'/> : <HiMenuAlt3 className='text-3xl text-white' />}
                </button>
            </nav>
        </header>
    );  
};  

export default Header;