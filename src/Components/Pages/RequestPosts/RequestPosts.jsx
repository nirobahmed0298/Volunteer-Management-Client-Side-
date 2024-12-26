import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from "motion/react"
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Requestreqs = () => {
    let {user} = useContext(AuthContext)
    let [request, setRequest] = useState([])
    useEffect(() => {
        axios.get(`https://volunteer-managment-server-three.vercel.app/requestPosts?email=${user.email}`)
            .then(res => setRequest(res.data))
    }, [])
    let handleRequestAccept = _id => {
        Swal.fire({
            title: "Success!",
            text: "Accepted SuccessFully!.",
            icon: "success"
        });
    }
    let handleRequestDelate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-managment-server-three.vercel.app/requestPosts/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Volunteer Request Canceled Successfully.",
                                icon: "success"
                            });
                        }
                        let remaining = request.filter(r => r._id !== _id);
                        setRequest(remaining);
                    })
            }
        });
    }

    return (
        <div className='text-center my-5'>
            <h1 className='font-bold my-4 md:text-2xl'>Volunteer Requests</h1>
            {
                request.length === 0 ?
                    <motion.h1
                        animate={{ x: 0 }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                        className="text-5xl font-bold">No.!
                        <motion.span animate={{ color: ['#f26229', '#2683bd', '#27cc50', '#2826bd'] }} transition={{ duration: 2, repeat: Infinity }}> Volunteet Request </motion.span>
                    </motion.h1>
                    :
                    <div className="overflow-x-auto border p-12 border-orange-400">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='dark:text-white'>
                                    <th>Volunteer Details</th>
                                    <th>User Details</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {
                                    request.map((req, i) =>
                                        <tr key={i}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={req.thumbnail} alt="Photo" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{req.postTitle}</div>
                                                        <div className="text-sm opacity-50">{req.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Name : {req.volunteerUserName}
                                                <br />
                                                <span className="badge badge-ghost badge-sm overflow-hidden">Email : {req.volunteerUserEmail}</span>
                                            </td>
                                            <th>
                                                <button onClick={() => handleRequestAccept(req._id)} className={`btn border-green-400 btn-xs rounded-none md:ml-2`}>Accept</button>
                                                <button onClick={() => handleRequestDelate(req._id)} className="btn btn-xs rounded-none md:ml-2 border-red-400">Cancel</button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default Requestreqs;