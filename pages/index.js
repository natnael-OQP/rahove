import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Slide from '../components/slide';
import SlideData from '../lib/data';

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
            <div className="w-full h-screen px-10 max-w-7xl mx-auto relative">
                {/* left button */}
                <div
                    className="absolute left-10 top-[47%] w-6 h-7 cursor-pointer z-50"
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
                    className="absolute right-10 top-[47%] w-6 h-7 cursor-pointer z-50 "
                    onClick={increment}
                >
                    <Image
                        layout="fill"
                        objectFit="contain"
                        src="/assets/icons/right.png"
                        alt="logo"
                    />
                </div>
                {/* swiper container */}
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
                <div className={` w-[75vw] mx-auto bg-[#D5D5D5] h-[183px] rounded-2xl shadow-md z-50 ${currentIndex == 1 ? "-bottom-[6%]" : currentIndex == 2 ? "-bottom-[9%]" : "-bottom-[10%]"} absolute left-0 right-0 p-5`}>
                    <h1 className="text-xl font-mont text-black font-bold text-center ">WHO WE ARE</h1>
                    <p className="text-xs font-normal w-[50%] mx-auto text-center mt-4">
                        We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.
                    </p>
                </div>
            </div>
            {/* other page */}

            <div className="w-full h-[90vh] relative">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/assets/images/bg2.png"
                    alt="logo"
                />
            </div>
        </div>
    );
}
