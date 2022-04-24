import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service);
	const navigate = useNavigate()

	const navigateServiceDetail = id => {
		navigate(`/service/${id}`)
	}

    const { name, img, description, price, _id} = service;
    return (
		<div className='py-6 px-5 bg-white rounded shadow-md space-y-3'>
			<img src={img} alt="" className="w-full" />
			<h3 className='text-xl font-medium'>{name}</h3>
            <p className="text-lg">Price: {price}</p>
			<p>{description}</p>
            <button onClick={() => navigateServiceDetail(_id)} className="bg-blue-400 border border-blue-400 hover:bg-transparent hover:text-blue-400 py-1 px-6 text-white rounded text-lg">Buy Now</button>
		</div>
	);
};

export default Service;