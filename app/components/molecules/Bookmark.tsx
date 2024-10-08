import { useState } from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

type Props = {
    id: string,
    image: string,
    title : string
}

const Bookmark = (props: Props) => {
    const [marked, setMarked] = useState(false)

    const bookmarks = localStorage.getItem('bookmarks');

    const arrayBookmarks = bookmarks ? JSON.parse(bookmarks) : [];

    const isBookmarked = arrayBookmarks.findIndex((bookmark: any) => bookmark.id === props.id);

    const handleClick = () => {
        if (isBookmarked !== -1) {
            arrayBookmarks.splice(isBookmarked, 1);
        } else {
            arrayBookmarks.push({ id: props.id, image: props.image, title : props.title });
        }

        localStorage.setItem('bookmarks', JSON.stringify(arrayBookmarks));
        setMarked(!marked)
    }

    return (
        <>
            <div onClick={handleClick} className='flex items-center text-center rounded px-1 hover:bg-custom-orange hover:text-[#0f4583] bg-[#0f4583] text-custom-orange cursor-pointer'> {isBookmarked !== -1 ? <FaBookmark /> : <FaRegBookmark />}Bookmark</div>
        </>
    )
}

export default Bookmark