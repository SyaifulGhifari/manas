'use client'
import { useMangaStore } from '@/app/store/mangasStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CardDetail from '../molecules/CardDetail';
import CardChapter from '../molecules/CardChapter';
import Skeleton from '../atoms/Skeleton';
import Bookmark from '../molecules/Bookmark';
import { useDetail} from '@/app/services/hooks/api';

type Props = {}

const DetailManga = (props: Props) => {
    const { title, id, setTitle, setId } = useMangaStore();
    const [loading, setLoading] = useState(false)
    const [manga, setManga] = useState<any>({})
    const router = useRouter()

    const getManga = async () => {
        setLoading(true)
        try {
            const response = await useDetail(id);
            const resJson = await response.json();
            console.log('API detail manga:', resJson);

            if (response.ok) {
                setManga(resJson);
            } else {
                console.error('Error:', resJson);
            }
        } catch (error) {
            console.error('Fetch Error', error);
            router.push('/home')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getManga()
    }, [])
    return (
        <>
            <div className='container mx-auto min-h-screen'>
                <div className="container mx-auto rounded bg-slate-200 p-4 md:p-6 lg:mt-6">
                    <div className='md:grid md:grid-cols-12 '>
                        <div className='hidden md:col-span-3 md:flex justify-center items-center'>
                            <CardDetail imgSrc={manga.image} imgAlt={manga.title} key={manga.id} loading={loading} />
                        </div>
                        <div className='w-full md:col-span-9 text-custom-blue'>
                            <div className='flex justify-center md:justify-start'>
                                <span className={`text-2xl font-bold text-custom-orange bg-gradient-to-r from-[#0f2743] to-[#0f4583] rounded p-1 ${loading ? 'hidden' : ''}`}>{manga.title}</span>
                            </div>
                            <div className='md:hidden flex justify-center items-cente w-full'>
                                <div className=' flex md:hidden mt-2 justify-center items-center w-3/4 max-w-52'>
                                    <CardDetail imgSrc={manga.image} imgAlt={manga.title} key={manga.id} loading={loading} />
                                </div>
                            </div>
                            <div className='mt-2 mb-4 p-px bg-gradient-to-r from-[#0f2743] to-[#0f4583]'></div>
                            <div className=''><span className='font-bold'>Description: </span><span>{manga.description}</span></div>
                            <div className='mb-4 p-px bg-gradient-to-r from-[#0f2743] to-[#0f4583]'></div>
                            <div className=''><span className='font-bold'>Genre: </span>{manga.genres?.map((item: any, index: number) => {
                                return (
                                    <span key={index}>{item}{index < manga.genres.length - 1 ? ', ' : ''}</span>
                                )
                            })}</div>
                            <div className='mb-4 p-px bg-gradient-to-r from-[#0f2743] to-[#0f4583]'></div>
                            <div className=''><span className='font-bold'>Total Chapter: </span><span>{manga.chapters?.length}</span></div>
                            <div className='mb-4 p-px bg-gradient-to-r from-[#0f2743] to-[#0f4583]'></div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto rounded bg-slate-200 p-4 md:p-6 my-6">
                    <div className='font-semibold flex justify-between'>
                        <div>
                            <span className='text-custom-blue hidden sm:inline-block'>Chapter</span> <span className={`text-custom-orange bg-gradient-to-r from-[#0f2743] to-[#0f4583] rounded p-1 ${loading ? 'hidden' : ''}`}>{manga.title}</span>
                        </div>
                        <div>
                            <Bookmark id={manga.id} image={manga.image} title={manga.title} />
                        </div>
                    </div>
                    <div className='my-2 p-px bg-gradient-to-r from-[#0f2743] to-[#0f4583]'></div>
                    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {loading ? (
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-10">
                                    <Skeleton />
                                </div>
                            ))
                        ) : <>
                            {manga.chapters?.map((item: any, index: number) => {
                                return (
                                    <CardChapter manga={manga.id} title={item.title} date={item.releaseDate} id={item.id} key={item.id} />
                                )
                            })}
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailManga