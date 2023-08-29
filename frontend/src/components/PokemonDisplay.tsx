import { useState } from 'react';
import axios from 'axios';
import type MyPokemon from '../types';

function PokemonDisplay() {
  const [pokemons, setPokemons] = useState<MyPokemon[]>([]);

  const handleSelect = async (playerNum: number) => {
    try {
      const p: MyPokemon[] = await axios.get('/api/player?player=' + playerNum);

      if (!(p instanceof Array)) {
        alert('Invalid response from server. (You may not have implemented the API yet.)');
        return;
      }

      setPokemons(p);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div>
          <button onClick={() => handleSelect(1)}>View Player 1's Pokemon</button>
          <button onClick={() => handleSelect(2)}>View Player 2's Pokemon</button>
        </div>

        {pokemons && pokemons?.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.spriteUrl}></img>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>{pokemon.generationName}</p>
            <p>H: {pokemon.height} W: {pokemon.weight}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default PokemonDisplay;
