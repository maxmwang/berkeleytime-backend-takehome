import { useState } from 'react';
import axios from 'axios';
import { type Pokemon, PokemonClient } from 'pokenode-ts';

function PokemonSelect() {
  const [pokemon, setPokemon] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({} as Pokemon);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const api = new PokemonClient();
      const p = await api.getPokemonByName(pokemon);

      setSelectedPokemon(p);
      setImageUrl(p.sprites.front_default!);
    } catch (error) {
      alert('Pokemon not found');
      console.log(error);
    }
  }

  const handleAssign = async (playerNum: number) => {
    try {
      if (!selectedPokemon) {
        alert('No Pokemon selected');
        return;
      }

      axios.post('/api/assign', {
        pokemon: selectedPokemon,
        player: playerNum,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <img src={imageUrl}></img>

        <br />

        <input type="text"
          placeholder="Pokemon Name"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}></input>

        <br />

        <button onClick={handleSubmit}>Search for Pokemon</button>

        <br />
        <br />

        <div>
          <button onClick={() => handleAssign(1)}>Assign to Player 1</button>
          <button onClick={() => handleAssign(2)}>Assign to Player 2</button>
        </div>
      </div>
    </>
  )
}

export default PokemonSelect;
