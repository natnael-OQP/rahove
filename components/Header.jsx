import Image from 'next/image';
import { useEffect, useState } from 'react';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() =>
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        })
        , [])

    const style = scrollPosition >= 50 ? "bg-white z-50 shadow-sm h-20" : ""

    return (
        <div className={`fixed top-0 left-0 z-50 flex flex-row items-center justify-between w-full h-24 px-16 mx-auto ${style}`}>
            {/* logo container*/}
            <div className="gap-x-3 fx">
                {/* logo */}
                <div className="relative w-12 h-12">
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                </div>
                <h2 className="text-3xl font-bold text-black font-mont ">
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
