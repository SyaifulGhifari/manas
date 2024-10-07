import {FC} from 'react'
import Input from '../atoms/Input';

const SearchBar: FC = () => {
  return (
    <div>
      <Input type='text' placeholder="Search..." className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'/>
    </div>
  );
}

export default SearchBar;
