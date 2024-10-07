import React, { useState, useEffect } from 'react';
import Card from '../molecules/Card';
import SuffleManga from '../molecules/SuffleManga';

const RecomendationManga = () => {
    const [loading, setLoading] = useState(false)
    const [mangas, setMangas] = useState<any>([])
    const [randomMangaList, setRandomMangaList] = useState<any>([])

    useEffect(() => {
        getAllManga()
    }, [])

    const getAllManga = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_RECOM_URL}`);
            const resJson = await response.json();
            console.log('API recom:', resJson);

            if (response.ok) {
                setMangas(resJson.data);
                getRandomManga(resJson.data);
            } else {
                console.error('Error:', resJson);
                setMangas([]);
            }
        } catch (error) {
            console.error('Fetch Error', error);
            setMangas([]);
        } finally {
            setLoading(false);
        }
    }

    const getRandomManga = (list: any) => {
        const shuffled = [...list].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        setRandomMangaList(selected);
    };

    const Suffle= () => {
        const shuffled = [...mangas].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        setRandomMangaList(selected);
    };
 console.log({randomMangaList})
    return (
        <div className='m-4 md:py-6 rounded-lg'>
            <SuffleManga action={() => Suffle()}/>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4'>
                {randomMangaList?.map((item: any, index: number) => {
                    return (
                        <Card
                            imgSrc={item.entry[0].images.jpg.image_url}
                            imgAlt={item.entry[0].title}
                            titleText={item.entry[0].title}
                            id={item.entry[0].mal_id}
                            url='/mangas'
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default RecomendationManga;
