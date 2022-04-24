import React, { useEffect, useState } from "react";
import Service from '../../components/Service/Service';


const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/service")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	console.log(services);
	return (
		<section>
			<div className="mx-auto w-5/6">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
					{
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
				</div>
			</div>
		</section>
	);
};

export default Services;
