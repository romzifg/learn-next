import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const List = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {
                api.data.map((anime) => (
                    <div key={anime.mal_id} className="shadow-xl">
                        <Link className='cursor-pointer text-color-primary hover:text-color-accent transition-all' href={`/${anime.mal_id}`}>
                            <Image
                                src={anime.images.webp.image_url}
                                alt="..."
                                width={350}
                                height={350}
                                className='w-full max-h-64 object-cover'
                            />
                            <h3 className='font-bold md:text-xl text-sm p-4'>{anime.title}</h3>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default List