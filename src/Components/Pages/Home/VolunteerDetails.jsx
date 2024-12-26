import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import DatePicker from 'react-datepicker';

const VolunteerDetails = () => {
    let [startDate, setStartDate] = useState(new Date());
    let { user } = useContext(AuthContext)
    let navigate = useNavigate()
    let detailsData = useLoaderData();
    let handleSubmit = e => {
        e.preventDefault()
        let thumbnail = e.target.thumbnail.value;
        let postTitle = e.target.postTitle.value;
        let description = e.target.description.value;
        let category = e.target.category.value;
        let location = e.target.location.value;
        let numberOfVolunteers = e.target.numberOfVolunteers.value;
        let deadline = e.target.deadline.value;
        let userName = e.target.userName.value;
        let userEmail = e.target.userEmail.value;
        let volunteerUserName = e.target.volunteerUserName.value;
        let volunteerUserEmail = e.target.volunteerUserEmail.value;
        let userSuggestion = e.target.suggestion.value;
        let requestVolunteer = { thumbnail, postTitle, description, category, location, numberOfVolunteers, deadline, userName, userEmail, volunteerUserName, volunteerUserEmail, userSuggestion };

        axios.post("https://volunteer-managment-server-three.vercel.app/requestPosts", requestVolunteer, {
            headers: {
                "content-Type": "application/json",
            },
        })
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Volunteer Requsted Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                e.target.reset();
                navigate('/volunteer')

            })
    }
    return (
        <div className='my-2 md:my-10'>

            {/* Modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12  max-w-5xl">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-xl font-semibold mb-6">Be a Volunteer</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Thumbnail (Read-only) */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Thumbnail</label>
                                <input
                                    type="text"
                                    name='thumbnail'
                                    className="input input-bordered  rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={detailsData.thumbnail}
                                />
                            </div>

                            {/* Post Title (Read-only) */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Post Title</label>
                                <input
                                    type="text"
                                    name='postTitle'
                                    className="input input-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={detailsData.postTitle}
                                />
                            </div>

                            {/* Description (Read-only) */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Description</label>
                                <textarea
                                    name='description'
                                    className="textarea textarea-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={detailsData.description}
                                ></textarea>
                            </div>
                            {/* Category */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Category</label>
                                <select
                                    name='category'
                                    readOnly
                                    value={detailsData.category}
                                    className="select select-bordered rounded-none w-full"
                                >
                                    <option value="">Select a category</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="education">Education</option>
                                    <option value="social-service">Social Service</option>
                                    <option value="animal-welfare">Animal Welfare</option>
                                </select>
                            </div>
                            {/* Location */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Location</label>
                                <input
                                    type="text"
                                    name='location'
                                    placeholder="Enter location"
                                    className="input input-bordered rounded-none w-full"
                                />
                            </div>
                            {/* Number of Volunteers Needed */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Number of Volunteers Needed</label>
                                <input
                                    type="number"
                                    name='numberOfVolunteers'
                                    placeholder="Enter the number of volunteers"
                                    className="input input-bordered rounded-none w-full"
                                />
                            </div>

                            {/* Deadline */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Deadline</label>
                                <DatePicker
                                    name='deadline'
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="input input-bordered rounded-none w-full"
                                />
                            </div>
                            {/* Organizer name email */}
                            <div className="form-control mb-4" >
                                <label className="label font-semibold">Organizer Name</label>
                                <input
                                    type="text"
                                    name='userName'
                                    className="input input-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={detailsData.userName}
                                />
                            </div>
                            <div className="form-control mb-4" >
                                <label className="label font-semibold">Organizer Email</label>
                                <input
                                    type="text"
                                    name='userEmail'
                                    className="input input-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={detailsData.userEmail}
                                />
                            </div>

                            {/* Volunteer Details */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Volunteer Name</label>
                                <input
                                    type="text"
                                    name='volunteerUserName'
                                    className="input input-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={user && user.displayName}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Volunteer Email</label>
                                <input
                                    type="text"
                                    name='volunteerUserEmail'
                                    className="input input-bordered rounded-none w-full bg-gray-200"
                                    readOnly
                                    value={user && user.email}
                                />
                            </div>

                            {/* Suggestion (Editable) */}
                            <div className="form-control mb-4">
                                <label className="label font-semibold">Suggestion</label>
                                <textarea
                                    name="suggestion"
                                    placeholder="Enter your suggestion 😊"
                                    className="textarea textarea-bordered rounded-none w-full"
                                ></textarea>
                            </div>

                            {/* Request Button */}
                            <button className="btn btn-outline rounded-none border-green-500 w-full" type="submit">
                                Request
                            </button>
                        </form>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

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
                    <div className="mt-6 flex justify-between">
                        <Link>
                            <button onClick={() => document.getElementById('my_modal_4').showModal()} className='btn px-14 bg-green-400 text-white rounded-none'>Be a Volunteer</button>
                        </Link>
                        <Link to='/volunteer' className="btn btn-outline rounded-none text-white bg-red-500">
                            Close
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;