import React, { useEffect, useState } from 'react';
import Reviews from '../../Reviews/Reviews';
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
                <h2 className="text-5xl font-semibold text-blue-600">Service & Programs </h2>
                <p>Me, As a Life Coach provide some extra-ordinary season, <br /> program and service. Here are few... </p>
            </div>
            <div className='grid gap-8 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <h2 className='text-2xl font-semibold text-lime-700 my-3'>Reviews on individual program</h2>
            <Reviews />
        </div>
    );
};

export default Services;