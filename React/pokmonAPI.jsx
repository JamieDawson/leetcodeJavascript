import React, { useState } from "react";
import "./App.css";

const PokemonCard = ({ id, name, height, weight, image }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <img src={image} />
    </div>
  );
};

const getPokemon = async (nameOrId) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + nameOrId);
  const json = await response.json();
  return json;
};

const getPokemonInfo = (response, setPokemonInfo) => {
  setPokemonInfo({
    id: response.id,
    name: response.name,
    height: response.height,
    weight: response.weight,
    image: response.sprites.back_default,
  });
};

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    image: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await getPokemon(pokemonName);
    // Use the callback function of setPokemonInfo to ensure that you are working with the updated state
    setPokemonInfo({
      id: response.id,
      name: response.name,
      height: response.height,
      weight: response.weight,
      image: response.sprites.back_default,
    });
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        ></input>
        <input type="submit"></input>{" "}
      </form>

      <PokemonCard
        id={pokemonInfo.id}
        name={pokemonInfo.name}
        height={pokemonInfo.height}
        weight={pokemonInfo.weight}
        image={pokemonInfo.image}
      />
    </>
  );
}

export default App;

//https://app.coderpad.io/JFCRCRW3
// search autocomplete feature

// api endpoint /api/get_suggestions?query=...
// on every keystroke, make GET /api/get_suggestions?query={query}
// on every API response, display the suggestions

// REQ .A..B.....C........
// RES ..A........C....B..
//
// t   0123456789....
// async/await is syntactic sugar for promise.then/.catch

// too many requests -> 250ms wait before fetching
//   "rate limiting" (throttling, debouncing)
// requests resolve out of order -> "race condition"

// --------------------------

/*

// https://pokeapi.co/
// -> text input to specify a pokemon by ID/name
// -> on submit/after typing, fetch that pokemin via the API
// -> display:
//   - id
//   - name
//   - height
//   - weight
//   - image


/*
pokemon/Ditto  => HTTP 404
pokemon/Ditt => HTTP 404
pokemon/132 => Returns Ditto



1) Create an onSubmit form.
  One button for submitting
  Text field for either name or id

2) Fetch the API with the name/ID

3) useState() for id, name, height, weight, image

4) Display the stored values.

- <p>id: {pokemon.id}</p>

const json = {
  
}

*/
