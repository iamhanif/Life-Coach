import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Programs = () => {
    const { _id, title, img, description, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = user?.email || 'unregistered'
        const reviewMessage = form.reviewMessage.value
        const photoURL = user?.photoURL

        const reviewSubmit = {
            service: _id,
            title,
            name,
            email,
            photoURL,
            reviewMessage
        }

        fetch('http://localhost:5000/programs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Review submitted successfully')
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex-col w-5/6 justify-center'>
                    <img className='rounded my-4' src={img} alt="image" />
                    <h2 className='text-5xl font-bold text-sky-600 mb-4'>{title}</h2>
                    <p className='text-2xl font-serif font-semibold text-orange-500'>Price: ${price}</p>
                    <p className='my-3'> <span className='text-xl font-medium text-blue-800'>Brief description:</span> {description}</p>
                </div>
            </div>
            <h2 className='text-2xl font-bold text-lime-700 mb-4'>Reviews About the service/program</h2>
            <form onSubmit={handleReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" defaultValue={user?.userName} placeholder="Your Name" className="input input-bordered w-full" required />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" readOnly />

                </div>
                <textarea name='reviewMessage' className="textarea textarea-bordered w-full my-3" placeholder="Your Review" required></textarea>
                <input className='btn btn-outline btn-accent mb-4' type="submit" value="Post Your Review" />

            </form>
        </div>
    );
};

export default Programs;