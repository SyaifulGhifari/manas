'use client'
import { FC, useEffect, useState } from 'react'
import Navbar from '../organisme/Navbar'
import Jumbroton from '../organisme/Jumbroton';
import { useInterval } from '@mantine/hooks';
import { jumbotronManga } from '@/app/services/data/jumbotronManga';

const HomePage: FC = () => {
  const [idx, setIdx] = useState(0);
 
  const interval = useInterval(() => {
    if (idx===9){
      setIdx(0)
    }else{
      setIdx((s) => s + 1)
    }
  }
  , 10000)

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <>
      <div className="relative max-h-screen h-screen bg-cover bg-center duration-500"
        style={{ backgroundImage: `url('${jumbotronManga[idx].imageSrc}` }}>
        <Navbar />
        <Jumbroton id={jumbotronManga[idx].id} title={jumbotronManga[idx].title} description={jumbotronManga[idx].desciption} />
      </div>
    </>
  );
}

export default HomePage;
