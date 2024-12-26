import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerNeedsNow = () => {
    let [volunteers, SetVolunteers] = useState([])
    useEffect(() => {
        axios.get('https://volunteer-managment-server-three.vercel.app/volunteers')
            .then(res => SetVolunteers(res.data.slice(0, 6)))
    }, [])
    return (
        <div className='md:my-10'>
            <h1 className='text-center my-3 text-xl md:text-4xl font-bold'>Volunteer Needs Now</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:my-8'>
                {
                    volunteers.map((volunteer, i) =>
                        <div key={i} className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200  dark:text-black">
                            <figure>
                                <img src={volunteer.thumbnail} alt={volunteer.postTitle} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-[16px] md:text-lg font-semibold">{volunteer.postTitle}</h2>
                                <p className="badge badge-primary">{volunteer.category}</p>
                                <p className="mt-2 text-sm">
                                    <strong>Deadline:</strong> {volunteer.deadline}
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/volunteer/${volunteer._id}`} className="btn btn-outline btn-primary btn-sm">View Details</Link>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
            <div className='text-center my-6'>
                <Link to='/volunteer'>
                    <button className='btn btn-outline border px-20 rounded-none border-orange-600 dark:text-white'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;