export const useDetail = (id : string) => {
    return fetch(`${process.env.NEXT_PUBLIC_MANGA_URL}/info?id=${id}`)
}

export const useChapter = (id : string) => {
    return fetch(`${process.env.NEXT_PUBLIC_MANGA_URL}/read?chapterId=${id}`)
}