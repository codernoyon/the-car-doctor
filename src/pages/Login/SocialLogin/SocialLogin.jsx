import React from 'react';
import { FcGoogle,  } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='space-y-2 mt-3'>
            <p className='text-center social-login'>or</p>
            <button className='flex items-center p-2 bg-gray-100 hover:bg-gray-200  w-full rounded-3xl'>
                    <FcGoogle className='text-3xl mr-auto' />
                    <span className='mr-auto w-5/6'>Continue with Google</span>
            </button>
            <button className='flex items-center p-2 bg-gray-100 hover:bg-gray-200  w-full rounded-3xl'>
                    <BsFacebook className='text-3xl mr-auto text-[#3b5998]' />
                    <span className='mr-auto w-5/6'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;