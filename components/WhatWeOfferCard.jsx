import Image from 'next/image'
import React from 'react'

function WhatWeOfferCard({ icon, title, description }) {
    return (
        <div className="z-40 flex p-5 bg-white">
            <div className="relative h-12 mt-3 w-28 ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={icon}
                    alt={title}
                />
            </div>
            <div className="flex flex-col ml-5">
                <h1 className="text-sm font-medium text-black ">{title}</h1>
                <p className="mt-3 text-xs font-normal text-gray-600" >{description}</p>
            </div>
        </div>
    )
}

export default WhatWeOfferCard