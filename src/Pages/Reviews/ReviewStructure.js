import React from 'react';

const ReviewStructure = ({ singleReview, handleDelete }) => {
    const { title, _id, name, photoURL, email, reviewMessage } = singleReview



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-warning'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{reviewMessage}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewStructure;