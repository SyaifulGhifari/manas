import { useRouter } from 'next/navigation'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'

type Props = {}

const BookmarkNav = (props: Props) => {
    const router = useRouter()
    const handleClick= () => {
        router.push('/bookmark')
    }
    return (
        <>
            <div onClick={handleClick} className='text-white font-semibold text-2xl cursor-pointer hidden md:block'>Bookmark</div>
            <div onClick={handleClick} className='text-white font-semibold cursor-pointer md:hidden'><FaBookmark/></div>
        </>
    )
}

export default BookmarkNav