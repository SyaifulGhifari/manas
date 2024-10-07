import { useMangaStore } from '@/app/store/mangasStore';
import moment from 'moment'
import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from 'next/navigation';


type Props = {
    title: string
    date: string
    id : string
}

const CardChapter = (props: Props) => {

    const {setIdChapter} = useMangaStore()
    const router = useRouter()

    const handleDate = (date: string) => {
        return moment(date).locale('id').format('DD MMMM YYYY')
    }

    const handleChapter = () => {
        setIdChapter(props.id)
        console.log(props.id)
        router.push(`detail/${props.id}`)
    }

    return (
        <>
            <div className='w-full p-1 rounded bg-gradient-to-r from-[#0f2743] to-[#0f4583] grid grid-cols-6 cursor-pointer' onClick={handleChapter}>
                <div className='col-span-4'>
                    <p className='font-semibold text-slate-200'>{props.title}</p>
                    <p className='text-xs text-slate-300'>{handleDate(props.date)}</p>
                </div>
                <div className='col-span-2 flex justify-center items-center'>
                    <GrLinkNext className='text-white'/>
                </div>
            </div>
        </>
    )
}

export default CardChapter