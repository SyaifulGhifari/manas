import React from 'react'

type Props = {
    action : () => void
}

const SuffleManga = (props: Props) => {

    return (
        <div className='flex pb-4 justify-between'>
            <div className='flex'>
                <p className='mr-2 text-xl font-bold'>Popular</p><p className='mr-2 text-xl font-bold text-custom-orange'>Manga</p><p className='text-xl font-bold'>by title</p>
            </div>
            <div className='text-xl font-bold rounded px-1 bg-custom-orange text-custom-blue cursor-pointer hover:bg-custom-blue hover:text-custom-orange' onClick={props.action}>Shuffle</div>
        </div>
    )
}

export default SuffleManga