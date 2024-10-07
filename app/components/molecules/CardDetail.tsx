'use client'
import { FC } from 'react';
import Image from '../atoms/Image';
import Skeleton from '../atoms/Skeleton';

interface CardDetailProps {
  imgSrc: string;
  imgAlt: string;
  loading: boolean
}

const CardDetail: FC<CardDetailProps> = ({ imgSrc, imgAlt, loading }) => {
  console.log({ loading })
  return (
    <div className="w-3/4 rounded-md overflow-hidden ">
      <div className="h-64">
        {loading ? <>
          <Skeleton />
        </> : <>
          <Image src={imgSrc} alt={imgAlt} />
        </>}
      </div>
    </div>
  );
};

export default CardDetail;
