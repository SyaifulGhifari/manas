import { FC } from 'react'
import Logo from '../atoms/Logo'
import Search from '../molecules/Search'
import BookmarkNav from '../molecules/BookmarkNav'

const Navbar: FC = () => {

  const menuLink = [
    {
      url: 'home',
      title: 'Home'
    },
    {
      url: 'recomendation',
      title: 'Recomendation'
    },
    // {
    //   url: 'bookmark',
    //   title: 'Bookmark'
    // }
  ]

  return (
    <nav className='flex sticky justify-around items-center h-16 z-50'>
      <Logo src='/images/Mangas_logo_1998.png' alt="Website Logo" size='120' />
      <BookmarkNav />
      <Search />
    </nav>
  );
}

export default Navbar;
