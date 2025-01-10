import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {
    let { setUser, logInUser, googleLogin } = useContext(AuthContext);
    let [error, setError] = useState('');
    let navigate = useNavigate();
    let handleLogin = e => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        logInUser(email, password)
            .then((result) => {
                setUser(result.user)
                Swal.fire({
                    title: "WelCome!",
                    text: "You succesFully Login.",
                    icon: "success"
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => setError(error.message));
    }
    let handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => { setError(err.message) })
    }
    return (
        <div className='md:w-7/12 mx-auto border-emerald-300 border mt-24 mb-10 dark:text-white'>
            <form onSubmit={handleLogin} className="card-body ">
                <h1 className='md:text-2xl font-bold mb-4'>Login Now!</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input rounded-none input-bordered dark:text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input rounded-none input-bordered dark:text-black" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                    </label>
                </div>
                {
                    error && <span className='text-red-500 text-sm my-1'>{error}</span>
                }
                <div className="form-control mt-6">
                    <button className="btn bg-green-400 text-white font-bold rounded-none">Login</button>
                    <div className='mt-6 text-center space-x-4'>
                        <button onClick={handleGoogleLogin} className='btn rounded-none border-e-green-400  border-2 border-b-green-400'><FaGoogle></FaGoogle> Login With Google</button>
                        <button className='btn rounded-none border-e-green-400 border-2 border-b-green-400'><FaGithub></FaGithub> Login With GitHub</button>
                    </div>
                    <p className='text-center mt-6'>Don't have an account?please <Link to='/signup' className='text-green-500 underline'>SignUp</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LogIn;