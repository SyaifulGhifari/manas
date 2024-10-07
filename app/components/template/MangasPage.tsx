import React from 'react'
import Mangas from '../organisme/Mangas'
import Navbar from '../organisme/Navbar'
import CommonLayout from '../layout/CommonLayout'

type Props = {}

const MangasPage = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-[#0f2743] to-[#0f4583]'>
      <Navbar />
      <CommonLayout>
        <Mangas />
      </CommonLayout>
    </div>
  )
}

export default MangasPage