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
    useEffect(() => {
        axios.get('https://volunteer-managment-server-three.vercel.app/volunteers')
            .then(res => SetVolunteers(res.data))
    }, [])
    let handleSorted = () => {
        let sortedData = [...volunteers];
        sortedData.sort((a, b) => b.deadline.localeCompare(a.deadline));
        SetVolunteers(sortedData);
    }

    return (
        <div className='mt-24 w-11/12 mx-auto'>
            <h1 className='text-center my-3 text-xl md:text-4xl font-bold'>View all Volunteer needs</h1>

            <div className='flex justify-between items-center'>
                <div className='my-4'>
                    <button onClick={handleSorted} className='btn mr-4 rounded-sm border border-b-green-500 shadow-xl border-e-emerald-500'>
                        Sort By Date
                    </button>
                </div>
                <button
                    onClick={handleTableLayout}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    {tableLayout ? <IoGrid></IoGrid> : <FaList></FaList>}
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
                                                    <span className="badge bg-green-500 badge-lg">Category : {volunteer.category}</span>
                                                </td>
                                                <th>
                                                    <Link to={`/volunteer/${volunteer._id}`} className="btn btn-outline border-green-500 dark:border-white dark:text-white btn-sm">View Details</Link>
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
                                            <p className="badge bg-green-500">{volunteer.category}</p>
                                            <p className="mt-2 text-sm">
                                                <strong>Deadline:</strong> {volunteer.deadline}
                                            </p>
                                            <div className="card-actions justify-end mt-4">
                                                <Link to={`/volunteer/${volunteer._id}`} className="btn btn-outline border-green-500 btn-sm">View Details</Link>
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