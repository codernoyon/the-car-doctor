import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center text-5xl'>service id:  {serviceId}</h2>
            <Link to='/checkout' className='text-white bg-orange-400 py-1 px-3'>Checkout</Link>
        </div>
    );
};

export default ServiceDetail;