import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setService] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure ?");
        if(proceed){
            console.log(id);
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setService(remaining);
            })

        }
    };


    return (
        <div> 
            <div className="container mx-auto">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-3/6 space-y-2">
                        {
                            services.map(service => <div className='py-3 rounded px-4 flex items-center justify-between bg-gray-100' key={service._id}>
                                <h3 className="text-xl">{service.name}</h3>
                                <p>Price: {service.price}</p>
                                <button onClick={() => handleDelete(service._id)} className='text-white hover:bg-red-500 bg-red-400 py-1 px-3 rounded'>Delete</button>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;