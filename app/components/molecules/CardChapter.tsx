import { useMangaStore } from '@/app/store/mangasStore';
import moment from 'moment'
import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from 'next/navigation';


type Props = {
    title: string
    date: string
    id: string
    manga: string
}

const CardChapter = (props: Props) => {

    const { setIdChapter } = useMangaStore()
    const router = useRouter()

    const handleDate = (date: string) => {
        return moment(date).locale('id').format('DD MMMM YYYY')
    }

    const handleChapter = async () => {
        // const listIsRead = localStorage.getItem('isRead')
        
        // const arrayIsRead = listIsRead ? JSON.parse(listIsRead) : [];
        // console.log('arry',arrayIsRead)
        // if (arrayIsRead[props.manga]){
        //     if (!arrayIsRead[props.manga].includes(props.id)) {
        //         arrayIsRead[props.manga].push(props.id);
        //         console.log('ID ditambahkan ke array yang ada');
        //     }
        //     console.log('kesini')
        // }else {
        //     arrayIsRead[props.manga] = [props.id]
        //     console.log(arrayIsRead[props.manga] = [props.id])
        //     console.log('ke else')
        //     console.log(props.manga)
        // }
        // console.log(arrayIsRead)
        //  localStorage.setItem('isRead', JSON.stringify(arrayIsRead))
        setIdChapter(props.id)
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
                    <GrLinkNext className='text-white' />
                </div>
            </div>
        </>
    )
}

export default CardChapter