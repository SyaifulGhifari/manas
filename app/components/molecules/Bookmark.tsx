'use client';

import { useState, useEffect } from 'react';
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

type Props = {
    id: string,
    image: string,
    title: string
}

const Bookmark = (props: Props) => {
    const [marked, setMarked] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        if (typeof window !== 'undefined') {
            const bookmarks = localStorage.getItem('bookmarks');
            const arrayBookmarks = bookmarks ? JSON.parse(bookmarks) : [];

            const isBookmarked = arrayBookmarks.findIndex((bookmark: any) => bookmark.id === props.id);
            if (isBookmarked !== -1) {
                setMarked(true);
            }
        }
    }, [props.id]);

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            const bookmarks = localStorage.getItem('bookmarks');
            const arrayBookmarks = bookmarks ? JSON.parse(bookmarks) : [];

            const isBookmarked = arrayBookmarks.findIndex((bookmark: any) => bookmark.id === props.id);

            if (isBookmarked !== -1) {
                arrayBookmarks.splice(isBookmarked, 1);
                setMarked(false);
            } else {
                arrayBookmarks.push({ id: props.id, image: props.image, title: props.title });
                setMarked(true);
            }

            localStorage.setItem('bookmarks', JSON.stringify(arrayBookmarks));
        }
    }

    if (!isClient) return null;

    return (
        <div onClick={handleClick} className='flex items-center text-center rounded px-1 hover:bg-custom-orange hover:text-[#0f4583] bg-[#0f4583] text-custom-orange cursor-pointer'>
            {marked ? <FaBookmark /> : <FaRegBookmark />} Bookmark
        </div>
    );
}

export default Bookmark;
