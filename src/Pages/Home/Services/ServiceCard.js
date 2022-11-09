import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className='h-56' src={img} alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-serif font-semibold text-sky-800'>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-info ">Want this!</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;