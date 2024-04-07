import { useContext, useEffect } from 'react';

import PokemonItem from './PokemonItem';
import { myData } from '../../App';

export default function PokemonItems() {
  const { pokemons, setPokemons, search, selected, setSelected } =
    useContext(myData);

  let newList = pokemons;

  if (search) {
    newList = newList.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  useEffect(() => {
    async function fetchPokemon() {
      const fetchedPokemons = [];
      for (let i = 1; i < 50; i++) {
        const pokemon = await getPokemon(i);
        fetchedPokemons.push(pokemon);
        newList.push(pokemon);
      }
      setPokemons(fetchedPokemons);
    }
    fetchPokemon();
  }, []);

  async function getPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url).then((x) => x.json());
    return response;
  }
  console.log(pokemons.length);
  console.log(newList.lenght);
  return (
    <>
      <div>
        {newList.length > 0 ? (
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 '>
            {newList.map((pokemon) => (
              <PokemonItem
                key={pokemon.id}
                pokemon={pokemon}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </div>
        ) : (
          <>
            <div className='text-center uppercase text-amber-300 font-bold text-xl pt-24 h-screen '>
              -{search}- ile başlayan bir pokemon bulunamadı...
            </div>
          </>
        )}
      </div>
    </>
  );
}
