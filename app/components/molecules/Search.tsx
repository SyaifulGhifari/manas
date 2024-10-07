import React, { useState } from 'react';
import Button from '../atoms/Button';
import { useDebouncedCallback, useClickOutside } from '@mantine/hooks';
import Image from '../atoms/Image';
import { useMangaStore } from '@/app/store/mangasStore';
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";


const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setTitle, setId, setImage } = useMangaStore();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false)
  const [isFound, setIsFound] = useState(true)
  const [manga, setManga] = useState<any>([])
  const router = useRouter()
  const ref = useClickOutside(() => {
    setIsModalOpen(false)
    setManga([])
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MANGA_URL}/${query}`);
      const resJson = await response.json();
      console.log('API Seacrh:', resJson);

      if (response.ok && resJson.results) {
        setManga(resJson.results);
        setIsFound(true)
      } else {
        console.error('Error:', resJson);
        setIsFound(false)

      }
    } catch (error) {
      console.error('Fetch Error', error);
    } finally {
      setLoading(false);
    }
  }, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.currentTarget.value);
  };

  const handleClick = (id: string) => {
    setId(id)
    router.push('/detail')
  }

  return (
    <div>
      <div
        className="hidden sm:block w-48 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 cursor-pointer"
        onClick={openModal}
      >Search Manga...
      </div>
        <FaSearch onClick={openModal} className={`cursor-pointer sm:hidden text-white`} />


      {isModalOpen && (
        <div className="fixed overflow-y-auto inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
          <div ref={ref} className="mx-10 mt-10 bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-medium mb-4 text-custom-blue">Search Manga</h2>
            <input
              type="text"
              placeholder="Search Manga..."
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4"
            />

            {isFound ? manga?.map((item: any, index: number) => {
              return (
                <div className='w-full grid grid-cols-6 mb-4 cursor-pointer' key={index} onClick={() => handleClick(item.id)}>
                  <div className='col-span-2'>
                    <Image src={item.image} alt={item.id} />
                  </div>
                  <div className='col-span-4 ml-4'>
                    <h3 className=' font-bold text-custom-blue'>{item.title}</h3>
                  </div>
                </div>
              )
            }) : <>
              <div className='text-custom-blue'>Manga Not Found</div>
            </>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
