import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {

    const { service_id, title, img, description, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const price = form.price.value
        const description = form.description.value
        const img = form.img.value
        const service_id = form.service_id.value

        const services = {
            service_id,
            title,
            price,
            img,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Service added successfully')
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {/* <div className='flex justify-center'> */}
            {/* <div className='flex-col w-5/6 justify-center'>
                    <img className='rounded my-4' src={img} alt="image" />
                    <h2 className='text-5xl font-bold text-sky-600 mb-4'>{title}</h2>
                    <p className='text-2xl font-serif font-semibold text-orange-500'>Price: ${price}</p>
                    <p className='my-3'> <span className='text-xl font-medium text-blue-800'>Brief description:</span> {description}</p>
                </div>
            </div> */}
            {/* <h2 className='text-2xl font-bold text-lime-700 mb-4'>Reviews About the service/program</h2> */}
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='service_id' type="text" defaultValue={'01'} placeholder="number id" className="input input-bordered w-full" required />
                    <input name='img' type="text" placeholder="Service photo URL" className="input input-bordered w-full" required />
                    <input name='title' type="text" placeholder="Service title" className="input input-bordered w-full" required />
                    <input name='price' type="text" placeholder="Service price" className="input input-bordered w-full" required />

                </div>
                <textarea name='description' className="textarea textarea-bordered w-full my-3" placeholder="Description" required></textarea>
                <input className='btn btn-outline btn-accent mb-4' type="submit" value="Add Service" />

            </form>
        </div>
    );
};

export default AddService;