import React from 'react';
import banner4 from '../../../assets/Banner4.png';
const VolunteerBanner = () => {
    return (
            <div
                className="hero min-h-screen my-10"
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
                        <button className="btn rounded-none bg-none border border-red-500 btn-outline text-white">BECOME A VOLUNTEER</button>
                        <button className="btn rounded-none my-3 md:ml-4 bg-none border border-red-500 btn-outline text-white">MAKE A DONATION</button>
                    </div>
                </div>
            </div>
    );
};

export default VolunteerBanner;