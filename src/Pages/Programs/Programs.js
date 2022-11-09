import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Programs = () => {
    const { title, img, description, price } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className='flex-col w-5/6 justify-center'>
                <img className='rounded my-4' src={img} alt="image" />
                <h2 className='text-5xl font-bold text-sky-600 mb-4'>{title}</h2>
                <p className='text-2xl font-serif font-semibold text-orange-500'>Price: ${price}</p>
                <p className='my-3'> <span className='text-xl font-medium text-blue-800'>Short brief:</span> {description}</p>
            </div>
        </div>
    );
};

export default Programs;