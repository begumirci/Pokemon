import { useState } from 'react';
import PokemonDetail from './PokemonDetail';

export default function PokemonItem({ pokemon }) {
  const [isTrue, setIsTrue] = useState(false);

  function openModal() {
    if (isTrue == false) {
      setIsTrue(true);
    }
  }

  return (
    <div onClick={openModal}>
      {isTrue ? <PokemonDetail pokemon={pokemon} setIsTrue={setIsTrue} /> : ''}

      <div
        key={pokemon.id}
        className={`flex flex-col items-center justify-center border-2 border-slate-100 rounded-lg py-4 relative ${pokemon.types[0].type.name} `}
      >
        <img
          className='w-52 h-auto z-10'
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            pokemon.id
          ).padStart(3, '0')}.png`}
          alt=''
        />
        <div className='flex flex-col items-center justify-center'>
          <h6 className='text-pink-400 z-10 font-bold'>
            #{pokemon.id.toString().padStart(3, '0')}
          </h6>
          <h6 className='text-teal-600 font-bold capitalize text-xl z-10'>
            {pokemon.name}
          </h6>
          <div className='flex gap-2 py-2'>
            {pokemon.types.map((x) => (
              <span
                className={`border-2 px-2 text-sm rounded-lg ${x.type.name}`}
                key={x.slot}
              >
                {x.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className='overlay'></div>
      </div>
    </div>
  );
}
