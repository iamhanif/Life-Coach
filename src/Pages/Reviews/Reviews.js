import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewStructure from './ReviewStructure';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/programs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Want the remove your review ?')
        if (proceed) {
            fetch(`http://localhost:5000/programs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json()
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            alert('Removed Successfully')
                            const remaining = review.filter(rev => rev._id !== id)
                            setReview(remaining)
                        }
                    }))
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/programs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(rev => rev._id !== id)
                    const approving = review.find(rev => rev._id === id)
                    approving.status = 'Approved'

                    const newReview = [approving, ...remaining]
                    setReview(newReview)
                }
            })
    }

    return (
        review.length == 0 ?
            <div className='py-12'>
                <h1 className='text-5xl font-bold text-center'>No reviews were added</h1>
            </div> :
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Program</th>
                            <th>Review</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(singleReview => <ReviewStructure
                                key={singleReview._id}
                                singleReview={singleReview}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewStructure>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default Reviews;