import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = () => {
    let { user, LogOutUser } = useContext(AuthContext)
    let [dark, setDark] = useState(false);
    let darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/volunteer'>All Volunteer Need Posts</NavLink></li>
        <li>
            <details className='z-10  dark:text-black'>
                <summary className='dark:text-white'>My Profile</summary>
                <ul className="p-2 w-52 rounded-none">
                    <li><NavLink to='/addVolunteer'>Add Volunteer</NavLink></li>
                    <li><NavLink to='/myPosts'>My volunteer need post</NavLink></li>
                    <li><NavLink to='/requestPosts'>Volunteer Request</NavLink></li>
                </ul>
            </details>
        </li>
    </>

    let navigate = useNavigate()
    let handleLogout = () => {
        LogOutUser()
            .then(() => {
                Swal.fire({
                    text: "You succesFully LogOut.",
                    icon: "success"
                })
                navigate('/')
            })
            .catch(error => (error.message))
    }
    return (
        <div className='w-full fixed top-0 z-10 bg-base-200 drop-shadow-lg dark:bg-black dark:text-white'>
            <div className="navbar w-11/12 mx-auto dark:bg-black dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="md:text-2xl font-bold">Volunteer<span className='text-orange-600'>.</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <button className='text-xl mr-1 md:mr-2 p-2' onClick={() => darkModeHandler()}>
                            {
                                dark && <IoSunny />
                            }
                            {
                                !dark && <IoMoon />
                            }
                        </button>
                    </div>
                    {
                        user ?
                            <div className="dropdown dropdown-end md:ml-2 dark:text-black">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 md:w-14 rounded-full border-2 border-green-400">
                                        {
                                            user && <img src={user && user.photoURL} alt="User Profile" />
                                        }
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a>Email : {user && user.email.slice(0, 5)}**.com</a>
                                    </li>
                                    <li>
                                        <a>Name : {user && user.displayName}</a>
                                    </li>
                                    <li><a onClick={handleLogout}>Logout<FaSignOutAlt></FaSignOutAlt></a></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login' className="btn rounded-none px-10 ml-4 border-green-400">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;