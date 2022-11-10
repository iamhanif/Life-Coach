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
                        ></ReviewStructure>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;