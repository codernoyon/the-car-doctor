import React from 'react';
import { FcGoogle,  } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import './SocialLogin.css'
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	
	
	let from = location.state?.from?.pathname || "/";


	if(user){
		navigate(from, { replace: true });
		toast.success('Successfully Login' , { id: "login" })
	}

    return (
			<div className="space-y-2 mt-3">
				{
					error && <p className='text-red-400 text-center'>{error?.message}</p> 
				}

				{
					loading? <div  className='flex justify-center'>
								<button type="button" class="flex items-center rounded-lg bg-blue-400 px-4 py-2 text-white" disabled>
							<svg class="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							<span class="font-medium subpixel-antialiased">Processing...</span>
						</button>
				  </div> : ""
				}

				<p className="text-center social-login">or</p>
				<button
					onClick={() => signInWithGoogle()}
					className="flex items-center p-2 bg-gray-100 hover:bg-gray-200  w-full rounded-3xl"
				>
					<FcGoogle className="text-3xl mr-auto" />
					<span className="mr-auto w-5/6">Continue with Google</span>
				</button>
				<button className="flex items-center p-2 bg-gray-100 hover:bg-gray-200  w-full rounded-3xl">
					<BsFacebook className="text-3xl mr-auto text-[#3b5998]" />
					<span className="mr-auto w-5/6">Continue with Facebook</span>
				</button>
			</div>
		);
};

export default SocialLogin;