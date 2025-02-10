import React from 'react';
import { BiError } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-4">
            <div className="max-w-md p-8 rounded-2xl bg-base-100 shadow-lg flex flex-col items-center">
                <BiError className="text-red-500 text-7xl" />
                <h1 className="text-3xl font-bold mt-4 text-error">Oops! Something Went Wrong</h1>
                <p className="text-gray-500 mt-2">The page you are looking for doesn't exist or an error occurred.</p>
                <Link className="mt-4 border p-2 border-green-400" onClick={() => navigate("/")}>Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;