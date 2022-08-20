import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <div className="bg-[#3D3C42] fy pt-10">
            <div className='pb-20 fx justify-around '>
                <div className='fx gap-x-16'>
                    {/*LOGO */}
                    <div className="fyc ">
                        <div className="relative w-24 h-24 mb-3">
                            <Image
                                layout="fill"
                                objectFit="contain"
                                src="/assets/icons/black logo.png"
                                alt="logo"
                            />
                        </div>
                        <h2 className=" text-2xl font-bold text-gray-400 font-mont text-center">
                            RAHOVE
                        </h2>
                        <span className=" text-2xl font-extralight text-gray-400 text-center">technologies</span>
                    </div>
                    <div>
                        <h5 className="text-gray-200  text-xs mb-3 font-semibold">SERVICES</h5>
                        <h6 className="text-gray-400 text-[9px] mb-2">Enterprise Software Development</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">Web Application Development</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">Mobile Application Development</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">Application Integration</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">QA and Testing</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">Maintenance and Support</h6>
                        <h6 className="text-gray-400 text-[9px] mb-2">Dedicated Teams</h6>
                    </div>
                </div>
                {/* */}
                <div className="w-[300px]">
                    <h5 className="text-white text-xs mb-3 font-semibold">SUBSCRIBE US</h5>
                    <input
                        className='bg-transparent w-full border border-1 rounded-xs px-3 py-1 text-sm  text-gray-300'
                        type="text"
                        placeholder="Enter Email Address"
                    />
                    <button className='w-full py-2 rounded-sm shadow-md bg-[#28A48E] text-white mt-4 text-xs font-semibold'>SEND</button>
                    <div className="mt-16">
                        <h5 className="text-white text-xs mb-3 font-semibold">KEEP IN TOUCH</h5>
                        <div className='fx gap-x-8'>
                            <div className="w-6 h-6 relative cursor-pointer ">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/assets/icons/social media1.png"
                                    alt="logo"
                                />
                            </div>
                            <div className="w-6 h-6 relative cursor-pointer ">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/assets/icons/social media2.png"
                                    alt="logo"
                                />
                            </div>
                            <div className="w-6 h-6 relative cursor-pointer ">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/assets/icons/social media3.png"
                                    alt="logo"
                                />
                            </div>
                            <div className="w-6 h-6 relative cursor-pointer ">
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src="/assets/icons/social media4.png"
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="p-5 w-full text-center bg-[#2D2C31] text-sm text-gray-400">Copyright 2020-2022 rahove technologies. All rights reserved.</h1>
        </div>
    )
}

export default Footer;
