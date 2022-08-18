import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <div className="fixed top-0 left-0 z-50 flex flex-row items-center justify-between w-full h-24 px-16 mx-auto">
            {/* logo container*/}
            <div className="gap-x-3 fx">
                {/* logo */}
                <div className="w-12 h-12 relative">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                </div>
                <h2 className="font-mont text-3xl font-bold text-black ">
                    RAHOVE
                    <span className="ml-2 text-3xl font-extralight">tech</span>
                </h2>
            </div>
            {/* navbar*/}
            <div className="space-x-12 fx">
                <h1 className="navBtn">
                    Services
                </h1>
                <h1 className="navBtn ">
                    Expertise
                </h1>
                <h1 className="navBtn">
                    Clients
                </h1>
                <h1 className="navBtn">
                    About
                </h1>
                <button className="px-3 py-2 text-sm text-white capitalize bg-black rounded-sm shadow-sm">
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default Header;
