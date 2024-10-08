'use client';
import { useMangaStore } from '@/app/store/mangasStore';
import moment from 'moment'
import { useEffect, useState } from 'react'
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
    const [statusRead, setStatusRead] = useState<any>()

    const handleDate = (date: string) => {
        return moment(date).locale('id').format('DD MMMM YYYY')
    }
    useEffect(() => {
        const listIsRead = localStorage.getItem('isRead')
            const parsedList = listIsRead ? JSON.parse(listIsRead) : {}
            setStatusRead(parsedList[props.manga]);
    }, [])

    const handleChapter = async () => {

        if (typeof window !== 'undefined') {

            const listIsRead = localStorage.getItem('isRead')

            const arrayIsRead = listIsRead ? JSON.parse(listIsRead) : {};
            if (arrayIsRead[props.manga]) {
                if (!arrayIsRead[props.manga].includes(props.id)) {
                    arrayIsRead[props.manga].push(props.id);
                }
            } else {
                arrayIsRead[props.manga] = [props.id]
            }
            localStorage.setItem('isRead', JSON.stringify(arrayIsRead))
        }
        setIdChapter(props.id)
        router.push(`detail/${props.id}`)
    }

    return (
        <>
            <div className='w-full p-1 rounded bg-gradient-to-r from-[#0f2743] to-[#0f4583] grid grid-cols-6 cursor-pointer' onClick={handleChapter}>
                <div className='col-span-4'>
                    <p className={`font-semibold ${statusRead?.includes(props.id) ?'text-custom-orange' : 'text-slate-200'}`}>{props.title}</p>
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