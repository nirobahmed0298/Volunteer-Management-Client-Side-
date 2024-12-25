import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import banner1 from '../../../assets/Banner1.png'
import banner2 from '../../../assets/Banner2.png'
import banner3 from '../../../assets/Banner3.png'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full relative h-[550px]">
                    <img
                        src={banner1} className="w-full" />
                    <div className='w-full absolute text-center top-[30%] bottom-[25%]'>
                        <h1 className='text-2xl  text-white md:text-5xl font-bold'>
                            Making a Difference Together we can <br />
                            <Typewriter
                                words={['create positive change in the world']}
                                loop={3}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></h1>
                        <p className='text-white text-center text-[8px] md:text-sm my-4'>We work on environmental conservation projects, such as  organizing cleanups, tree planting, habitat restoration, <br /> or recycling initiatives. They help improve the community’s environmental footprint and raise awareness about sustainability.</p>
                        <button className='btn btn-outline text-white border-green-300 rounded-none text-center'>More Explore</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative md:h-[550px]">
                    <img
                        src={banner2} className="w-full" />
                    <div className='w-full absolute text-center md:top-[30%] bottom-[35%] md:bottom-[25%]'>
                        <h1 className='text:lg  text-white md:text-5xl font-bold'>
                            Making a Difference Together we can <br />
                            <Typewriter
                                words={['create positive change in the world']}
                                loop={3}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></h1>
                        <p className='text-white text-center text-sm my-4'>We work on environmental conservation projects, such as organizing cleanups, tree planting, habitat restoration, <br /> or recycling initiatives. They help improve the community’s environmental footprint and raise awareness about sustainability.</p>
                        <button className='btn btn-outline text-white border-green-300 rounded-none text-center'>More Explore</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative md:h-[550px]">
                    <img
                        src={banner3} className="w-full" />
                    <div className='w-full absolute text-center md:top-[30%] bottom-[35%] md:bottom-[25%]'>
                        <h1 className='text:lg  text-white md:text-5xl font-bold'>
                            Making a Difference Together we can <br />
                            <Typewriter
                                words={['create positive change in the world']}
                                loop={3}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></h1>
                        <p className='text-white text-center text-sm my-4'>We work on environmental conservation projects, such as organizing cleanups, tree planting, habitat restoration, <br /> or recycling initiatives. They help improve the community’s environmental footprint and raise awareness about sustainability.</p>
                        <button className='btn btn-outline text-white border-green-300 rounded-none text-center'>More Explore</button>
                    </div>
                </div>
               
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="border-2 border-green-500">
                    <img className='w-20 h-full' src={banner1} alt="" />
                </a>
                <a href="#item2" className="border-2 border-green-500">
                    <img className='w-20 h-full' src={banner2} alt="" />
                </a>
                <a href="#item3" className="border-2 border-green-500">
                    <img className='w-20 h-full' src={banner3} alt="" />
                </a>

            </div>
        </div>
    );
};

export default Banner;