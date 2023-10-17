import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const List = ({ title, images, id }) => {
    return (
        <Link className='cursor-pointer' href={`/${id}`}>
            <Image
                src={images}
                alt="..."
                width={350}
                height={350}
                className='w-full max-h-64 object-cover'
            />
            <h3 className='font-bold md:text-xl text-sm p-4'>{title}</h3>
        </Link>
    )
}

export default List