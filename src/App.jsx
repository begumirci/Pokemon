import { createContext, useEffect } from 'react';
import Header from './assets/components/Header';
import PokemonItems from './assets/components/PokemonItems';
import { useState } from 'react';

export const myData = createContext();

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [pokemons]);
  return (
    <myData.Provider
      value={{
        pokemons,
        setPokemons,
        search,
        setSearch,
        isLoading,
        setIsLoading,
      }}
    >
      {isLoading ? (
        <>
          <div className=' bg-gradient-to-r from-slate-300 to-black h-screen flex items-center justify-center'>
            <img
              className='w-52 animate-slow'
              src='../public/pokeball.png'
              alt=''
            />
          </div>
        </>
      ) : (
        <div className='px-32 pb-10 bg-customBlue h-full '>
          <Header />

          <PokemonItems />
        </div>
      )}
    </myData.Provider>
  );
}

export default App;
