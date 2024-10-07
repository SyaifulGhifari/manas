import {FC} from 'react'

interface LinkProps {
    url: string;
    title: string;
  }

const Link : FC <LinkProps> = ({url, title}) => {
  return (
    <a href={url} className='cursor-pointer text-lg px-2' >{title}</a>
  )
}

export default Link