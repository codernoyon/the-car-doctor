import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<section>
			<div className="mx-auto w-5/6">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
					{
                        services.map(service => <Service service={service}></Service>)
                    }
				</div>
			</div>
		</section>
	);
};

export default Services;
