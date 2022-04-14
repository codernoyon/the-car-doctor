import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle,  } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const SignUp = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='h-screen flex justify-center items-center -z-10'>
            <form onSubmit={handleSubmit} className='w-5/6 md:w-3/6 lg:w-2/6 bg-white shadow-lg py-5 px-5 rounded-md border border-gray-100'>
                <h3 className="text-3xl text-center mb-4">Sign Up</h3>
                <div className="space-y-4">
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Name' type="text" name='name' required />
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Email' type="email" name='email' required />
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Password' type="password" name='password' required/>
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Confirm Password' type="password" name='confirmPassword' required/>
                    <input className='cursor-pointer text-lg font-medium hover:bg-transparent hover:text-blue-400 duration-200 border-2 border-blue-400 w-full text-white bg-blue-400 block p-2 rounded-md' type="submit" value="Login" />
                </div>
                <small className='text-center block mt-1'>Already have an account? <Link className='text-orange-500' to='/login'>Login</Link></small>
                <div className='space-y-2 mt-3'>
                    <button className='flex items-center p-2 bg-gray-100 hover:bg-gray-200 w-full rounded-3xl'>
                        <FcGoogle className='text-3xl mr-auto' />
                        <span className='mr-auto w-5/6'>Continue with Google</span>
                    </button>
                    <button className='flex items-center p-2 bg-gray-100 hover:bg-gray-200 w-full rounded-3xl'>
                        <BsFacebook className='text-3xl mr-auto text-[#3b5998]' />
                        <span className='mr-auto w-5/6'>Continue with Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;