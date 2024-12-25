import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const VolunteerDetails = () => {
    let detailsData = useLoaderData();
    console.log(detailsData);
    return (
        <div className='my-2 md:my-10'>
            <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden">
                <figure>
                    <img
                        src={detailsData.thumbnail}
                        alt={detailsData.postTitle}
                        className="w-full h-60 object-cover"
                    />
                </figure>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">{detailsData.postTitle}</h1>
                    <p className="text-gray-600 mb-4">{detailsData.description}</p>
                    <div className="mb-4">
                        <span className="badge badge-primary mr-2">{detailsData.category}</span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                        <li>
                            <strong>Location:</strong> {detailsData.location}
                        </li>
                        <li>
                            <strong>Volunteers Needed:</strong> {detailsData.volunteersNeeded}
                        </li>
                        <li>
                            <strong>Deadline:</strong> {detailsData.deadline}
                        </li>
                    </ul>
                    <div className="mt-6 flex justify-end">
                        <Link to='/volunteer' className="btn btn-secondary">
                            Close
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;