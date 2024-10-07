'use client'
import React from 'react'
import Navbar from '../organisme/Navbar'
import CommonLayout from '../layout/CommonLayout'
import ListBookmark from '../organisme/ListBookmark'

type Props = {}

const BookmarkPage = (props: Props) => {
  return (
    <div
            className='bg-gradient-to-r from-[#0f2743] to-[#0f4583] min-h-screen'
        >
            <Navbar />
            <CommonLayout>
                <ListBookmark/>
            </CommonLayout>
        </div>
  )
}

export default BookmarkPage