'use client'
import { FC, useState } from 'react';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Rating from '../atoms/Rating';
import { useRouter } from 'next/navigation';
import { useMangaStore } from '@/app/store/mangasStore';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  titleText: string;
  rating?: number
  id: string
  url:string
}

const Card: FC<CardProps> = ({ imgSrc, imgAlt, titleText, rating, url, id }) => {
  const {setTitle, setId, setImage} = useMangaStore();
  

  const router = useRouter()

  const handleClick = () => {
    setTitle(titleText)
    setId(id)
    setImage(imgSrc)
    router.push(url)
  }

  return (
    <div className="max-w-sm rounded-md overflow-hidden cursor-pointer hover:scale-110 transition duration-300 border border-custom-blue" onClick={handleClick}>
        <div className="h-60 w-full">
          <Image src={imgSrc} alt={imgAlt} />
        </div>
        <div className='p-2 bg-custom-orange'>
          <Text content={titleText} className='text-xs font-bold text-custom-blue truncate' />
          {rating && <Rating rating={rating} />}
      </div>
    </div>
  );
};

export default Card;
