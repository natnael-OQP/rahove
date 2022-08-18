import Image from 'next/image'
import React from 'react'

export default function Slide({ title, image, subTitle }) {
    return (
        <div className="flex  items-end w-full h-full">
            <div className="h-full pt-32  font-extrabold ">
                <h1
                    className='text-2xl text-black w-full'
                    dangerouslySetInnerHTML={{ __html: title }}
                />


            </div>
            <div className="h-[73vh] w-full  relative ">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={image}
                    alt="logo"
                />
            </div>
            <div className="ml-10 pb-40 ">
                <h1 className="text-sm font-semibold ">
                    {subTitle}
                </h1>
            </div>
        </div>

    )
}
