import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemons(res.data.results);
    });
  });
  return (
    <div>
      {pokemons.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </div>
  );
}