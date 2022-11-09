import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className='h-56' src={img} alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-serif font-semibold text-sky-800'>${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/programs/${_id}`}>
                        <button className="btn btn-outline btn-info ">Want this!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;