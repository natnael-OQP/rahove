import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Slide from '../components/slide';
import WhatWeOfferCard from '../components/WhatWeOfferCard';
import { SlideData, WhatWeOfferCardsData } from '../lib/data';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const increment = () => {
        if (currentIndex == SlideData.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    };

    const decrement = () => {
        if (currentIndex == 0) {
            setCurrentIndex(SlideData.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    };
    return (
        <div className="w-full h-full">
            {/* landing page */}
            <div className="relative w-full h-screen px-10 mx-auto max-w-7xl">
                {/* left button */}
                <div
                    className="absolute left-10 top-[47%] w-6 h-7 cursor-pointer z-40"
                    onClick={decrement}
                >
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/icons/left.png"
                        alt="logo"
                    />
                </div>
                {/* right button */}
                <div
                    className="absolute right-10 top-[47%] w-6 h-7 cursor-pointer z-40 "
                    onClick={increment}
                >
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/icons/right.png"
                        alt="logo"
                    />
                </div>
                {/* slider container */}
                <div className="w-full h-[600px] relative z-30 ">
                    {/* background image */}
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/images/bg.png"
                        alt="logo"
                    />
                    {/* item */}
                    {
                        SlideData.map((item, index) => {
                            if (currentIndex == index) {
                                return <Slide key={index} index={index} title={SlideData[index].title} image={SlideData[index].image} subTitle={SlideData[index].subTitle} />
                            }
                        })
                    }
                    {/* index indicators */}
                    <div className="fx absolute bottom-[20%] right-[12%] space-x-3  w-[90px]">
                        {
                            SlideData.map((item, index) => <div key={index} className={`w-2 h-2 ${currentIndex == index ? "bg-[#38AA97]" : "bg-[#D9D9D9]"}`} />)
                        }
                    </div>
                </div>
                <div className={` w-[75vw] mx-auto bg-[#D5D5D5] h-[183px] rounded-2xl shadow-md z-40 ${currentIndex == 1 ? "-bottom-[6%]" : currentIndex == 2 ? "-bottom-[9%]" : "-bottom-[10%]"} absolute left-0 right-0 p-5`}>
                    <h1 className="text-xl font-bold text-center text-black font-mont ">WHO WE ARE</h1>
                    <p className="text-xs font-normal w-[50%] mx-auto text-center mt-4">
                        We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.
                    </p>
                </div>
            </div>
            {/* WHAT WE OFFER */}
            <div className="relative flex flex-col items-center justify-center w-full h-full py-36 ">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/assets/images/bg2.png"
                    alt="logo"
                />
                <div className="relative">
                    <h1 className="my-10 text-2xl font-bold font-mont">
                        WHAT WE <span className="text-[#40AA97]">OFFER  </span>
                    </h1>
                    <div className="bg-[#40AA97] absolute right-1 bottom-10 h-[2px] w-[80px]" />
                </div>
                <div className=" grid grid-cols-3 gap-[1px] max-w-[73vw] mx-auto h-[330px] bg-gray-200 rounded-md shadow-md overflow-hidden ">
                    {
                        WhatWeOfferCardsData.map((item, index) => (
                            <WhatWeOfferCard
                                key={item.id}
                                icon={item.icon}
                                description={item.description}
                                title={item.title}
                            />
                        ))
                    }
                </div>
            </div>
            {/* client Success */}
            <div className="bg-[#FAFAFA] h-full  w-full py-16 fyc ">
                <h1 className="m-5 text-2xl font-bold font-mont">
                    CLIENT SUCCESS
                </h1>
                <div className="fx gap-x-2">
                    <span className="text-[#40AA97] text-[10px] font-bold">ALL CASE STUDIES  </span>
                    <div className="relative w-3 h-3">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/assets/icons/rightVector.png"
                            alt="logo"
                        />
                    </div>
                </div>
                {/*card*/}
                <div className="mt-10 w-[60vw] bg-white shadow-xl h-[350px] flex rounded-md overflow-hidden">
                    {/* image */}
                    <div className='flex-[.6] h-full '>
                        <div className='relative w-full h-[80%]'>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src="/assets/images/showcase.png"
                                alt="logo"
                            />
                        </div>
                        <div className='h-[70px] w-full gap-1 grid grid-cols-3'>
                            <div className='relative flex items-center justify-center border border-r shadow-sm'>
                                <div className='relative w-[60%] h-[60%]  '>
                                    <Image
                                        layout="fill"
                                        objectFit="contain"
                                        src="/assets/images/client-logo1.png"
                                        alt="logo"
                                    />
                                </div>
                                <div className="bg-[#40AA97] h-[2px] w-full absolute bottom-0 left-0" />
                            </div>
                        </div>
                    </div>
                    {/* info section */}
                    <div className="flex-[.4] px-6 mt-10 ">
                        <h1 className="text-lg font-bold leading-5 font-mont">Ethiopian Investment Commission</h1>
                        <p className="text-xs font-[400] mt-5 w-[90%] "> Ethiopian investment commission finds a fresh way to engage foreginers that want to invest whenever and whereever they are by creating a website and its system behind.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
