import { useMangaStore } from '@/app/store/mangasStore';
import { useState, useEffect } from 'react'
import CommonLayout from '../layout/CommonLayout';
import Card from '../molecules/Card';

type Props = {}

const Mangas = (props: Props) => {
    const { title, id, setTitle, setId } = useMangaStore();
    const [loading, setLoading] = useState(false)
    const [mangas, setMangas] = useState<any>([])

    const getManga = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MANGA_URL}/${title}`);
            const resJson = await response.json();
            console.log('API recom:', resJson);

            if (response.ok) {
                setMangas(resJson.results);
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

    useEffect(() => {
        getManga()
    }, [])
    console.log({ mangas })
    return (
        <div className='text-custom-orange container min-h-screen mx-auto'>
            <CommonLayout>
            {loading ? <>
            <p className='text-white'>
                Loading
            </p>
            </> : <>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {mangas?.map((item: any, index: number) => {
                        return (
                            <Card
                                imgSrc={item.image}
                                imgAlt={item.title}
                                titleText={item.title}
                                rating={item.score}
                                id={item.id}
                                url='/detail'
                            />
                        )
                    })}
                </div>
            </>}
            </CommonLayout>
        </div>
    )
}

export default Mangas