'use client';
import { useMangaStore } from '@/app/store/mangasStore'
import React, { useEffect, useState } from 'react'
import Image from '../atoms/Image'
import { useSearchParams } from 'next/navigation';

type Props = {}

const ListChapter = (props: Props) => {
    const { idChapter } = useMangaStore()
    const [loading, setLoading] = useState(false)
    const [chapter, setChapter] = useState<any>([])

    const getChapter = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MANGA_URL}/read?chapterId=${idChapter}`);
            const resJson = await response.json();
            console.log('API Chapter:', resJson);

            if (response.ok) {
                setChapter(resJson);
            } else {
                console.error('Error:', resJson);
            }
        } catch (error) {
            console.error('Fetch Error', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getChapter()
    }, [])

    return (
        <div className='container mx-auto pb-10 lg:py-10  min-h-screen'>
            {loading ? <>
                Loading
            </> : <>
                {chapter.length <    1 ? <>
                Chapter Not Found
                </> :
                    <>
                        {chapter.map((item: any, index: number) => {
                            return (
                                <>
                                    <Image src={item.img} alt={`image ${index + 1}`} />
                                </>
                            )
                        })}
                    </>
                }

            </>}

        </div>
    )
}

export default ListChapter