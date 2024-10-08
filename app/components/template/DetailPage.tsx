'use client'
import React from 'react'
import DetailManga from '../organisme/DetailManga'
import Navbar from '../organisme/Navbar'
import { useMangaStore } from '@/app/store/mangasStore'
import CommonLayout from '../layout/CommonLayout'

type Props = {}

const DetailPage = (props: Props) => {
  const { image } = useMangaStore();

  return (
    <>
      <div
        className='bg-gradient-to-r from-[#0f2743] to-[#0f4583]'
      >
        <Navbar />
        <CommonLayout>
          <DetailManga />
        </CommonLayout>
      </div>
    </>
  )
}

export default DetailPage