import { FC } from 'react'
import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';
import { useMangaStore } from '@/app/store/mangasStore';
interface JumbotronProps {
id : string
description : string
title : string
}

const Jumbroton = (props: JumbotronProps) => {

  const { setId } = useMangaStore();
  const router = useRouter()

    const handleClick = () => {
        setId(props.id)
        router.push('/detail')
      }

    return (
        <div className="absolute z-10 inset-0 bg-black/25 flex flex-col justify-around items-center">
            <div className=''></div>
            <div className=''></div>
            <div className="w-full px-4 md:pl-8">
                <h1 className="text-4xl font-bold text-white mb-4">{props.title}</h1>
                <p className="text-lg md:text-xl text-white w-full sm:w-1/3">{props.description}</p>
                <Button onClick={handleClick} className='p-1 mt-4 font-semibold inline-block rounded-lg bg-custom-orange text-custom-blue hover:bg-custom-blue hover:text-custom-orange cursor-pointer' title='Read Now' />          
            </div>
        </div>
    );
}

export default Jumbroton;