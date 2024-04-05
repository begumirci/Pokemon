import { useContext } from 'react';
import { myData } from '../../App';

export default function Header() {
  const { search, setSearch } = useContext(myData);
  return (
    <div className='flex flex-col  items-center justify-center py-10 gap-5 mb-7 sm:py-16 '>
      <div className='text-pink-400 text-4xl font-bold text-center '>
        <img className='w-64' src='../../../public/logo.png' alt='' />
      </div>
      <input
        value={search}
        placeholder='SEARCH'
        type='text'
        className='border-customBlue border-2 rounded-md outline-customBlue pl-3 text-pink-400 py-2 font-bold w-56 focus:w-64 sm:focus:w-80  focus:outline-none transition-all duration-5000 placeholder:text-amber-300'
        onChange={(e) => {
          setSearch(e.target.value.toUpperCase());
        }}
      />
    </div>
  );
}
