import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-blue-600'>Services</p>
                <h2 className="text-5xl font-semibold text-blue-600">Service & Programs </h2>
                <p>Me, As a Life Coach provide some extra-ordinary season, <br /> program and service. Here are few... </p>
            </div>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;