import Image from 'next/image'
import React from 'react'

function WhatWeOfferCard({ icon, title, description }) {
    return (
        <div className="flex p-5  bg-white z-50">
            <div className="w-28 h-12 mt-3  relative ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={icon}
                    alt={title}
                />
            </div>
            <div className="flex flex-col ml-5">
                <h1 className="text-black text-sm  font-medium ">{title}</h1>
                <p className="text-gray-600 text-xs font-normal mt-3" >{description}</p>
            </div>
        </div>
    )
}

export default WhatWeOfferCard