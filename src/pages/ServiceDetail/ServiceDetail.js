import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);
    // console.log(serviceId);

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-screen">
                    <div className="bg-gray-100 p-3 w-2/6">
                        <img className='w-full' src={service.img} alt="" />
                        <h3 className="text-3xl">{service.name}</h3>
                        <p>{service.description}</p>
                        <Link className='text-white py-1 px-3 rounded bg-blue-400 mt-3 inline-block' to='/checkout'>Checkout</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;