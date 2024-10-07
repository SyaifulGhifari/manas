import {FC, useState} from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <img className="w-full h-full object-fill" src={src} alt={alt} />;
};

export default Image;
