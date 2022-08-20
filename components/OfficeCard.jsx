import Image from 'next/image'
import React from 'react'

function OfficeCard({ location, image, country }) {
    return (
        <div className="relative w-[250px] rounded-md overflow-hidden h-[320px] bg-gradient-to-t from-[#269E89] to-[rgb(0,0,0,.8)] bg-opacity-60 ">
            <div className="w-full h-full relative opacity-60">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={image}
                    alt={location}
                />
                <div className="z-50 absolute  left-0 bottom-0 right-0 opacity-100 pb-10 ">
                    <h1 className="text-white text-center font-bold text-sm leading-3 ">{location}</h1>
                    <h1 className="text-white text-center uppercase text-sm">Ethiopia</h1>
                </div>
            </div>
        </div>
    )
}

export default OfficeCard