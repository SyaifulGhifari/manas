'use client'
import React, { useState } from 'react'
import Card from '../molecules/Card'

type Props = {}

const ListBookmark = (props: Props) => {
    const [loading, setLoading] = useState(false)
    const bookmarks = localStorage.getItem('bookmarks')
    const arrayBookmarks = bookmarks ? JSON.parse(bookmarks) : []
    console.log(arrayBookmarks)
    return (
        <div className="container mx-auto rounded bg-slate-200 p-4 md:p-6 my-6">
            <div className='font-semibold mb-5'>
                <span className='text-custom-blue hidden sm:inline-block'>List</span> <span className={`text-custom-orange bg-gradient-to-r from-[#0f2743] to-[#0f4583] rounded p-1 ${loading ? 'hidden' : ''}`}>Bookmark</span>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                {arrayBookmarks.length > 0 ? (arrayBookmarks?.map((item: any, index: number) => {
                    return (
                        <Card titleText={item.title} imgSrc={item.image} imgAlt={item.id} id={item.id} key={item.id} url='/detail' />
                    )
                })) : <div className='text-custom-blue font-semibold'>kosong</div>}
            </div>
        </div>
    )
}

export default ListBookmark