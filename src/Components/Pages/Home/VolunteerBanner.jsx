import React from 'react';
import banner4 from '../../../assets/Banner4.png';
import { Link } from 'react-router-dom';
const VolunteerBanner = () => {
    return (
            <div
                className="hero md:min-h-screen my-10"
                style={{
                    backgroundImage: `url(${banner4})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-5xl font-bold">Are you ready to volunteer?</h1>
                        <p className="mb-5">
                            start one of our programm today and help people in need..!
                        </p>
                        <Link to='/requestPosts' className="btn rounded-none bg-none border border-green-500 btn-outline text-white">BECOME A VOLUNTEER</Link>
                        <Link to='/myPosts' className="btn rounded-none my-3 md:ml-4 bg-none border border-green-500 btn-outline text-white">MAKE A DONATION</Link>
                    </div>
                </div>
            </div>
    );
};

export default VolunteerBanner;