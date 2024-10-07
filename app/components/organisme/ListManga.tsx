import { FC, useEffect, useState } from 'react'
import Card from '../molecules/Card'
import Button from '../atoms/Button'


interface ListMangaProps {

}

const ListManga: FC<ListMangaProps> = ({ }) => {
    const [loading, setLoading] = useState(false)
    const [mangas, setMangas] = useState<any>([])
    const [pagination, setPagination] = useState<any>({})
    const [thisPage, setThisPage] = useState(1)
   
    useEffect(() => {
        getAllManga()
    }, [])

    const getAllManga = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_URL}`);
            const resJson = await response.json();
            console.log('API other:', resJson);

            if (response.ok && Array.isArray(resJson.data)) {
                setMangas(resJson.data);
                setPagination(resJson.pagination)
                setThisPage(resJson.pagination.current_page)
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

    const handlePage = async (type: string) => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_URL}?page=${type === 'next' ? thisPage+1 : thisPage-1}`);
            const resJson = await response.json();
            console.log('response page:', resJson);

            if (response.ok && Array.isArray(resJson.data)) {
                setMangas(resJson.data);
                setPagination(resJson.pagination)
                setThisPage(resJson.pagination.current_page)
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

    return (
        <div className='p-4'>
            <div className='flex pb-4'>
            <p className='mr-2  text-xl font-bold text-custom-orange'>Manga</p><p className='text-xl font-bold'>by title</p>
            </div>
            {loading ? <>
                Loading
            </> : <>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {mangas?.map((item: any, index: number) => {
                        return (
                            <Card
                                imgSrc={item.images.jpg.image_url}
                                imgAlt={item.title}
                                titleText={item.title}
                                rating={item.score}
                                id={item.mal_id}
                                url='/mangas'
                            />
                        )
                    })}
                </div>
                <div className='flex justify-evenly pt-4'>
                    <Button title='Prev' onClick={() => handlePage('prev')} className={`px-2 rounded bg-custom-orange text-custom-blue cursor-pointer hover:bg-custom-blue hover:text-custom-orange ${thisPage > 1 ? '' : 'hidden'}`}/>
                    <Button title='Next' onClick={() => handlePage('next')}className={`px-2 rounded bg-custom-orange text-custom-blue cursor-pointer hover:bg-custom-blue hover:text-custom-orange ${pagination.has_next_page ? '' : 'hidden'}`}/>
                </div>
            </>}
        </div>
    )
}

export default ListManga