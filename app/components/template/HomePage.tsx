'use client'
import { FC, useEffect, useState } from 'react'
import Navbar from '../organisme/Navbar'
import CommonLayout from '../layout/CommonLayout';
import ListManga from '../organisme/ListManga';
import RecomendationManga from '../organisme/RecomendationManga';
import Jumbroton from '../organisme/Jumbroton';
import { useInterval } from '@mantine/hooks';

const HomePage: FC = () => {
  const [image, setImage] = useState('/images/hero.png')
  const [idx, setIdx] = useState(0);
  const images = [{
    imageSrc: '/images/hero.png',
    id: 'Boku-No-Hero-Academia',
    desciption: `Boku no Hero Academia follows Izuku Midoriya, a boy born without superpowers in a world where they're common, as he strives to become a top hero after inheriting the power of the legendary hero All Might.`,
    title: 'Boku No Hero Academia'
  },
  {
    imageSrc: '/images/onePiece.jpg',
    id: 'One-Piece',
    desciption: 'Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece"',
    title: 'One Piece'
  },
  {
    imageSrc: '/images/chainsaw.png',
    id: "Chainsaw-Man",
    desciption: "Chainsaw Man follows Denji, a young man who merges with his pet devil Pochita to become a hybrid chainsaw devil, as he battles other devils while navigating a brutal and chaotic world in pursuit of a better life.",
    title: 'Chainsaw Man'
  },
  {
    imageSrc: '/images/demonSlayer.jpg',
    id: "Kimetsu-No-Yaiba",
    desciption: "Tanjiro Kamado becomes a demon slayer to avenge his family and find a cure for his sister Nezuko, who has been turned into a demon.",
    title: 'Kimetsu No Yaiba'
  },
  {
    imageSrc: '/images/one.png',
    id: "Onepunch-Man-O-N-E",
    desciption: "Saitama, a hero who can defeat any opponent with a single punch, struggles to find excitement and purpose in a world where no challenge can match his overwhelming power.",
    title: 'Onepunch-Man'
  },
  {
    imageSrc: '/images/naruto.jpg',
    id: 'Naruto',
    desciption: "Naruto Uzumaki, a young ninja with dreams of becoming the strongest Hokage, faces countless challenges as he learns the value of friendship, perseverance, and the power of his inner demon.",
    title: 'Naruto'
  },
  {
    imageSrc: '/images/gon.jpeg',
    id: 'Hunter-X-Hunter',
    desciption: "Gon Freecss embarks on a dangerous journey to become a Hunter and find his estranged father, meeting friends and facing formidable foes along the way.",
    title: 'Hunter X Hunter'
  },
  {
    imageSrc: '/images/leveling.png',
    id: 'Solo-Leveling',
    desciption: "In a world where hunters battle deadly monsters, weak hunter Jinwoo Sung gains the ability to level up endlessly, transforming himself into the most powerful being.",
    title: 'Solo Leveling'
  },
  {
    imageSrc: '/images/yuji.png',
    id: 'Jujutsu-Kaisen',
    desciption: "Yuji Itadori, a high school student, becomes entangled in the world of curses after consuming a powerful cursed object and must fight to protect humanity from evil spirits.",
    title: 'Jujutsu Kaisen'
  },
  {
    imageSrc: '/images/rimuru.png',
    id: 'Tensei-Shitara-Slime-Datta-Ken',
    desciption: "Light Yagami, a high school student, gains a notebook that allows him to kill anyone by writing their name, leading him into a dark path of power, justice, and obsession.",
    title: 'Tensei Shitara Slime Datta Ken'
  }
  ]
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
        style={{ backgroundImage: `url('${images[idx].imageSrc}` }}>
        <Navbar />
        <Jumbroton id={images[idx].id} title={images[idx].title} description={images[idx].desciption} />
      </div>
      {/* <div className='py-4 bg-gradient-to-r from-[#0f2743] to-[#0f4583]'>
        <CommonLayout>
          <RecomendationManga />
          <ListManga />
        </CommonLayout>
      </div> */}
    </>
  );
}

export default HomePage;
