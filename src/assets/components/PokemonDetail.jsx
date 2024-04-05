export default function PokemonDetail({ pokemon, setIsTrue }) {
  console.log(pokemon);

  return (
    <div className='modal'>
      <div
        className={`modal-content bg-stone-300  pb-9 lg:w-2/5 `}
        key={pokemon.id}
      >
        <span
          className='pl-5 text-2xl cursor-pointer text-black'
          onClick={() => setIsTrue(false)}
        >
          x
        </span>
        {/* HEADER */}
        <div className='flex justify-center items-center gap-5 '>
          <h2 className='text-customBlue font-bold uppercase text-xl z-10  '>
            {pokemon.name}
          </h2>
          <span className='text-white z-10 font-bold'>
            #{pokemon.id.toString().padStart(4, '0')}
          </span>
        </div>
        {/* BODY */}
        <div className='flex flex-col items-center justify-center sm:flex-row'>
          <img
            className='w-64 sm:w-80  '
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
              pokemon.id
            ).padStart(3, '0')}.png`}
            alt=''
          />

          <div className='  w-full px-9 py-3 flex flex-col gap-3'>
            <div className='flex flex-col items-center justify-center bg-customBlue gap-2 py-3 rounded-lg'>
              {/* HEİGH */}
              <div className='flex flex-col items-center'>
                <span className='text-white'>Heigh</span>
                <span>{pokemon.height}</span>
              </div>
              {/* WEİGHT */}
              <div className='flex flex-col items-center'>
                <span className='text-white'>Weight</span>
                <span>{pokemon.weight}</span>
              </div>
              {/* ABİLİTİES */}

              <div className='flex flex-col items-center '>
                <span className='text-white'>Abilities</span>
                {pokemon.abilities.map((x, index) => (
                  <span className='capitalize' key={index}>
                    {x.ability.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-center bg-customBlue  py-3 rounded-lg gap-2 '>
              <span className='text-white'>Types</span>
              <div className='flex gap-2'>
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
          </div>
        </div>
      </div>
    </div>
  );
}
