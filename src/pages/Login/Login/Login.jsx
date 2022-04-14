import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='px-5 sm:px-16 md:px-0 h-screen flex justify-center items-center -z-10'>
            <form onSubmit={handleSubmit} className='w-full md:w-3/6 lg:w-2/6 bg-white shadow-lg py-5 px-5 rounded-md border border-gray-100'>
                <h3 className="text-2xl md:text-3xl text-center mb-4">Login</h3>
                <div className="space-y-4">
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Email' type="email" name='email' required />
                    <input className='text-lg bg-gray-50 block w-full p-3 rounded-md outline-none focus:tracking-wider duration-200' placeholder='Password' type="password" name='password' required/>
                    <input className='cursor-pointer text-lg font-medium hover:bg-transparent hover:text-blue-400 duration-200 border-2 border-blue-400 w-full text-white bg-blue-400 block p-2 rounded-md' type="submit" value="Login" />
                </div>
                <small className='text-center block mt-1'>New to car genius? <Link className='text-orange-500' to='/signup'>Create Account</Link></small>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;