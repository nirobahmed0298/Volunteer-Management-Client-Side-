import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa';
import team1 from '../../../assets/team-1.jpg'
import team2 from '../../../assets/team-2.jpg'
import team3 from '../../../assets/team-3.jpg'
import team4 from '../../../assets/team-4.jpg'
const VolunteerGroup = () => {
    return (
        <div className='my-5 md:my-10'>
            <h1 className='text-xl md:text-4xl text-center font-bold'>Our group of volunteers</h1>
            <div className='grid gap-3 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
                    <figure>
                        <img
                            src={team1} alt="Volunteer"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="text-center text-xl font-semibold mb-2">George Beli</h2>
                        <p className="text-gray-600 text-center">
                            <span className="flex items-center justify-center gap-2 mb-1">
                                <i className="fas fa-phone text-gray-500"></i>
                                <span>Mobile: +49 123 326 003</span>
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <i className="fas fa-envelope text-gray-500"></i>
                                <span>E-Mail: georgebeli@email.com</span>
                            </span>
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a target='_blank'
                                href="https://myaccount.google.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Google Plus"
                            >
                                <FaGooglePlus></FaGooglePlus>
                            </a>
                            <a target='_blank'
                                href="https://www.instagram.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Instagram"
                            >
                                <FaInstagram></FaInstagram>
                            </a>
                            <a target='_blank'
                                href="https://x.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Twitter"
                            >
                                <FaTwitter></FaTwitter>
                            </a>
                            <a target='_blank'
                                href="https://web.facebook.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
                    <figure>
                        <img
                            src={team2} alt="Volunteer"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="text-center text-xl font-semibold mb-2">Mr.X</h2>
                        <p className="text-gray-600 text-center">
                            <span className="flex items-center justify-center gap-2 mb-1">
                                <i className="fas fa-phone text-gray-500"></i>
                                <span>Mobile: +49 120 006 789</span>
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <i className="fas fa-envelope text-gray-500"></i>
                                <span>E-Mail: mr.x@email.com</span>
                            </span>
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a target='_blank'
                                href="https://myaccount.google.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Google Plus"
                            >
                                <FaGooglePlus></FaGooglePlus>
                            </a>
                            <a target='_blank'
                                href="https://www.instagram.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Instagram"
                            >
                                <FaInstagram></FaInstagram>
                            </a>
                            <a target='_blank'
                                href="https://x.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Twitter"
                            >
                                <FaTwitter></FaTwitter>
                            </a>
                            <a target='_blank'
                                href="https://web.facebook.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
              
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
                    <figure>
                        <img
                            src={team3} alt="Volunteer"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="text-center text-xl font-semibold mb-2">Mr.Y</h2>
                        <p className="text-gray-600 text-center">
                            <span className="flex items-center justify-center gap-2 mb-1">
                                <i className="fas fa-phone text-gray-500"></i>
                                <span>Mobile: +49 123 000 700</span>
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <i className="fas fa-envelope text-gray-500"></i>
                                <span>E-Mail: mr.y@email.com</span>
                            </span>
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a target='_blank'
                                href="https://myaccount.google.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Google Plus"
                            >
                                <FaGooglePlus></FaGooglePlus>
                            </a>
                            <a target='_blank'
                                href="https://www.instagram.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Instagram"
                            >
                                <FaInstagram></FaInstagram>
                            </a>
                            <a target='_blank'
                                href="https://x.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Twitter"
                            >
                                <FaTwitter></FaTwitter>
                            </a>
                            <a target='_blank'
                                href="https://web.facebook.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
                    <figure>
                        <img
                            src={team4} alt="Volunteer"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="text-center text-xl font-semibold mb-2">Jonathan Doe</h2>
                        <p className="text-gray-600 text-center">
                            <span className="flex items-center justify-center gap-2 mb-1">
                                <i className="fas fa-phone text-gray-500"></i>
                                <span>Mobile: +49 123 456 789</span>
                            </span>
                            <span className="flex items-center justify-center gap-2">
                                <i className="fas fa-envelope text-gray-500"></i>
                                <span>E-Mail: johndoe@email.com</span>
                            </span>
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a target='_blank'
                                href="https://myaccount.google.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Google Plus"
                            >
                                <FaGooglePlus></FaGooglePlus>
                            </a>
                            <a target='_blank'
                                href="https://www.instagram.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Instagram"
                            >
                                <FaInstagram></FaInstagram>
                            </a>
                            <a target='_blank'
                                href="https://x.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Twitter"
                            >
                                <FaTwitter></FaTwitter>
                            </a>
                            <a target='_blank' 
                                href="https://web.facebook.com/"
                                className="text-gray-600 hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VolunteerGroup;