import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AllVolunteer = () => {
    let [volunteers, SetVolunteers] = useState([])
    let [tableLayout, setTableLayout] = useState(false);
    let handleTableLayout = () => {
        setTableLayout(!tableLayout);
    };

    let handleSerach = e => {
        let serachValue = e.target.value
    }
    useEffect(() => {
        axios.get('https://volunteer-managment-server-three.vercel.app/volunteers')
            .then(res => SetVolunteers(res.data))
    }, [])
    return (
        <div className='md:my-10'>
            <h1 className='text-center my-3 text-xl md:text-4xl font-bold'>View all Volunteer needs</h1>
            <div className='text-center my-10'>
                <input
                    type="text"
                    name='search'
                    onKeyDown={handleSerach}
                    placeholder="Search here"
                    className="input input-bordered border-green-400 rounded-none input-accent w-full max-w-xs" />
                <button className='btn btn-outline border-green-400 rounded-none md:ml-2 px-10  dark:text-white'>Search</button>
            </div>
            <div className='text-end'>
                <button
                    onClick={handleTableLayout}
                    className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {tableLayout ? <FaList></FaList> : <IoGrid></IoGrid>}
                </button>
            </div>
            {
                tableLayout ? (

                    <div className='md:my-8'>
                        <div className="overflow-x-auto border">
                            <table className="table">
                                {/* head */}
                                <thead className='dark:text-white'>
                                    <tr>
                                        <th>Volunteers Details</th>
                                        <th>Category</th>
                                        <th>See Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        volunteers.map((volunteer, i) =>
                                            <tr key={i}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={volunteer.thumbnail} alt="Photo" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{volunteer.postTitle}</div>
                                                            <div className="text-sm opacity-50">{volunteer.location}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Deadline : {volunteer.deadline}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Category : {volunteer.category}</span>
                                                </td>
                                                <th>
                                                    <Link to={`/volunteer/${volunteer._id}`} className="btn btn-outline btn- dark:border-white dark:text-white btn-sm">View Details</Link>
                                                </th>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                )
                    :
                    (
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:my-8'>
                            {
                                volunteers.map((volunteer, i) =>
                                    <div key={i} className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 dark:text-black">
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
                    )
            }

        </div >
    );
};

export default AllVolunteer;