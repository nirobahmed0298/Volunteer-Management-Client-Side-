import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { motion } from "motion/react"
const MyPost = () => {
    let [posts, setPosts] = useState([])
    let { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://volunteer-managment-server-three.vercel.app/volunteers?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [user.email])
    let [post, setPost] = useState(posts);
    let handlePostDelate = (_id) => {
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
                fetch(`https://volunteer-managment-server-three.vercel.app/volunteers/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Delete SuccessFully!.",
                                icon: "success"
                            });
                        }
                        let remaining = posts.filter(p => p._id !== _id);
                        setPosts(remaining);
                    })
            }
        });
    };
    return (
        <div className='text-center my-5 min-h-screen md:w-11/12 mx-auto'>
            <h1 className='font-bold my-8 md:text-2xl'>My Posts</h1>
            {
                posts.length === 0 ?
                    <motion.h1
                        animate={{ x: 0 }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                        className="text-5xl font-bold">No.!
                        <motion.span animate={{ color: ['#f26229', '#2683bd', '#27cc50', '#2826bd'] }} transition={{ duration: 2, repeat: Infinity }}> Volunteet Posts </motion.span>
                    </motion.h1>
                    :
                    <div className="overflow-x-auto border p-12 border-green-500">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='dark:text-white'>
                                    <th>Posts</th>
                                    <th>Details</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    posts.map((post, i) =>
                                        <tr key={i}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={post.thumbnail} alt="Photo" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{post.postTitle}</div>
                                                        <div className="text-sm opacity-50">{post.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Deadline : {post.deadline}
                                                <br />
                                                <span className="badge badge-ghost badge-sm overflow-hidden">{post.description.slice(0, 30)}..</span>
                                            </td>
                                            <td>{post.category}</td>
                                            <th>
                                                <Link to={`/updatePost/${post._id}`} className="btn btn-xs rounded-none border-emerald-400">Update</Link>
                                                <button onClick={() => handlePostDelate(post._id)} className="btn btn-xs rounded-none  my-6 md:ml-2 border-red-400">Delete</button>
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
export default MyPost;