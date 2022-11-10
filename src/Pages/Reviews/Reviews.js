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
            fetch(`http://localhost:5000/programs/$(id)`, {
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

    return (
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
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        review.map(singleReview => <ReviewStructure
                            key={singleReview._id}
                            singleReview={singleReview}
                            handleDelete={handleDelete}
                        ></ReviewStructure>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;