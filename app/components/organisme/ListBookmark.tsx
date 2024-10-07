'use client'
import React, { useState } from 'react'
import Card from '../molecules/Card'
import { useRouter } from 'next/navigation'

type Props = {}

const ListBookmark = (props: Props) => {
    const [loading, setLoading] = useState(false)
    const bookmarks = localStorage.getItem('bookmarks')
    const arrayBookmarks = bookmarks ? JSON.parse(bookmarks) : []
    const router = useRouter()

    const handleClick = () => {
        router.push('/home')
    }
    return (
        <>
            <div className="container mx-auto rounded font-semibold bg-slate-200 p-2 md:p-4 my-6">
                <span className='text-custom-blue hidden sm:inline-block'>List</span> <span className={`text-custom-orange bg-gradient-to-r from-[#0f2743] to-[#0f4583] rounded p-1 ${loading ? 'hidden' : ''}`}>Bookmark</span>
            </div>
            <div className="container mx-auto rounded bg-slate-200 p-4 md:p-6 my-6">
                {arrayBookmarks.length > 0 ? (arrayBookmarks?.map((item: any, index: number) => {
                    return (
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                            <Card titleText={item.title} imgSrc={item.image} imgAlt={item.id} id={item.id} key={item.id} url='/detail' />
                        </div>
                    )
                })) : <div className='text-custom-blue font-semibold'>You haven’t bookmarked anything yet. Start exploring and save your favorite <span onClick={handleClick} className='text-custom-orange bg-gradient-to-r from-[#0f2743] to-[#0f4583] rounded p-1 cursor-pointer'>Mangas</span> here!</div>}
            </div>
        </>

    )
}

export default ListBookmark