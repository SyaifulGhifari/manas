import {FC} from 'react'
import { useRouter } from 'next/navigation';

interface LogoProps {
  src: string;
  alt: string;
  size : string
}

const Logo: FC<LogoProps> = ({ src, alt, size }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/home')
  }

  return <img src={src} alt={alt} width={size} height={size} onClick={handleClick} className='cursor-pointer' />;
}

export default Logo;
