import React from 'react'
import ListChapter from '../organisme/ListChapter'
import Navbar from '../organisme/Navbar'
import CommonLayout from '../layout/CommonLayout'

type Props = {}

const ChapterPage = (props: Props) => {
    return (
        <div
            className='bg-gradient-to-r from-[#0f2743] to-[#0f4583]'
        >
            <Navbar />
            <CommonLayout type='chapter'>
                <ListChapter />
            </CommonLayout>
        </div>
    )
}

export default ChapterPage