import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import OfficeCard from '../components/OfficeCard';
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
            {/*  */}
            <div className="bg-white h-full  w-full py-20 fyc">
                <h1 className="m-5 text-2xl font-bold font-mont">
                    OUR OFFICES
                </h1>
                <p className="text-xs font-[400]  w-[60%] text-center ">
                    Rahove Technologies operates in multiple offices and development centers across Ethiopia and Africa. Reach out to us for software development services in your region.
                </p>
                <div className="w-[60%] fx justify-center gap-2 mt-10 ">
                    <OfficeCard image="/assets/images/BDR.png" location="BAHIR DAR" />
                    <OfficeCard image="/assets/images/addise ababa.png" location="ADDISE ABABA" />
                    <OfficeCard image="/assets/images/adama.png" location="ADAMA" />
                </div>
            </div>
            <div className="h-screen bg-white fyc relative">
                <div className="absolute  top-0 left-0 h-[50vh] w-full">
                    <div className="bg-black w-full h-full  relative">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="/assets/images/bg3.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" w-[56%] h-[500px]  z-40 flex items-center ">
                    <div className="rounded-md shadow-md bg-white flex-[.65] h-full p-5 overflow-hidden">
                        <h1 className="text-lg font-medium font-mont text-center">WANT TO START <span className="text-[#29A790]">A PROJECT?</span></h1>
                        <div className="mt-6 fyc">
                            <div className="h-[2px] bg-[#29A790] w-[40px] " />
                            <h1 className="text-center">It’s simple !</h1>
                        </div>
                        <form className="mt-3  h-full space-y-3">
                            <input className="w-full border border-1 rounded-sm px-3 py-1 text-sm " type="text" placeholder="Full Name*" />
                            <input className="w-full border border-1 rounded-sm px-3 py-1 text-sm " type="text" placeholder="Company Name*" />
                            <input className="w-full border border-1 rounded-sm px-3 py-1 text-sm " type="text" placeholder="Email Address*" />
                            <input className="w-full border border-1 rounded-sm px-3 py-1 text-sm " type="text" placeholder="Phone Number*" />
                            <textarea className='w-full h-[100px] border border-1 rounded-sm px-3 py-1 text-sm ' placeholder="How can we help you?*" />
                            <p className='text-[9px] font-medium '>By sending this form I confirm that I have read and accept Rahove Technologies <span className="text-[#29A790]">Privacy Policy</span> </p>
                            <div className="fx justify-between">
                                <div className="fxc gap-x-2">
                                    <input type="checkbox" />
                                    <label className="text-[10px] text-gray-500">Send NDA</label>
                                </div>
                                <button className="px-10 rounded-sm shadow-sm py-1 bg-[#28A48E] text-white text-xs">SEND</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-[.35] h-[70%] bg-[#28A48E] rounded-r-md shadow-md px-5 py-10">
                        <h1 className="text-lg font-medium font-mont text-center text-white">What Happens Next?</h1>
                        <div className="fx items-start my-5">
                            <div className="w-[60px] h-[20px] bg-white rounded-full  fxc flex-[.1]">
                                <h1 className=" text-xs">1</h1>
                            </div>
                            <p className="text-xs ml-3 text-white flex-[.9]">Our business manager reaches you out within a few days after analyzing your business requirements</p>
                        </div>
                        <div className="fx items-start my-5">
                            <div className="w-[60px] h-[20px] bg-white rounded-full  fxc flex-[.1]">
                                <h1 className=" text-xs">2</h1>
                            </div>
                            <p className="text-xs ml-3 text-white flex-[.9]">Meanwhile, we sign an NDA to ensure the highest privacy level </p>
                        </div>
                        <div className="fx items-start my-5">
                            <div className="w-[60px] h-[20px] bg-white rounded-full  fxc flex-[.1]">
                                <h1 className=" text-xs">3</h1>
                            </div>
                            <p className="text-xs ml-3 text-white flex-[.9]">Our pre-sale manager presents project estimates and approximate timeline</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
