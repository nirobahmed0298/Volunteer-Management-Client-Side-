import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';

const UpdatePost = () => {
    const [startDate, setStartDate] = useState(new Date());
    let updatePost = useLoaderData();
    let navigate = useNavigate();
    let handleUpadatePost = e => {
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
        let UpdatePostData = { thumbnail, postTitle, description, category, location, numberOfVolunteers, deadline, userName, userEmail, };
        fetch(`https://volunteer-managment-server-three.vercel.app/volunteers/${updatePost._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(UpdatePostData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                e.target.reset();
                navigate('/volunteer')

            })

    }
    return (
        <div className="min-h-scree  py-8 px-4 flex justify-center items-center">
            <div className="w-full max-w-3xl border bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Update Volunteer Need Post</h2>
                <form onSubmit={handleUpadatePost}>
                    {/* Thumbnail */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Thumbnail</label>
                        <input
                            type="url"
                            name='thumbnail'
                            defaultValue={updatePost.thumbnail}
                            placeholder="Enter thumbnail image URL"
                            className="input input-bordered rounded-none w-full"
                        />
                    </div>

                    {/* Post Title */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Post Title</label>
                        <input
                            type="text"
                            name='postTitle'
                            defaultValue={updatePost.postTitle}
                            placeholder="Enter post title"
                            className="input input-bordered rounded-none w-full"
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            placeholder="Enter post description"
                            defaultValue={updatePost.description}
                            name='description'
                            className="textarea textarea-bordered rounded-none w-full"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Category</label>
                        <select
                            name='category'
                            defaultValue={updatePost.category}
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
                            defaultValue={updatePost.location}
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
                            defaultValue={updatePost.numberOfVolunteers}
                            placeholder="Enter the number of volunteers"
                            className="input input-bordered rounded-none w-full"
                        />
                    </div>

                    {/* Deadline */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Deadline</label>
                        <DatePicker
                            name='deadline'
                            defaultValue={updatePost.deadline}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input input-bordered rounded-none w-full"
                        />
                    </div>

                    {/* Organizer  */}
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Organizer Name</label>
                        <input
                            name='userName'
                            defaultValue={updatePost.userName}
                            type="text"
                            readOnly
                            className="input input-bordered rounded-none w-full bg-gray-200"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label font-semibold">Organizer Email</label>
                        <input
                            type="text"
                            name='userEmail'
                            defaultValue={updatePost.userEmail}
                            readOnly
                            className="input input-bordered rounded-none w-full bg-gray-200"
                        />
                    </div>
                    <button className="btn btn-outline border-green-400 rounded-none w-full">Update Post</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;