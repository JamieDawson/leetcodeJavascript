const fetchPokemonApi = async () => {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPokemonTypes = async () => {
  //Note: pokemon either have 1 or 2 types. There are no 3+ type pokemon
  const response = await fetchPokemonApi();

  let val = response.types.map((item) => item.type.name);

  if (val.length === 1) {
    return "This is a " + val[0] + " type Pokemon!";
  } else {
    return "This pokemon is a " + val[0] + " and " + val[1] + " type Pokemon!";
  }
};

const getPokemonAbilities = async () => {
  const response = await fetchPokemonApi();

  const abilities = response.abilities.map((item) => item.ability.name);
  return "This Pokémon has the following abilities: " + abilities.join(", ");
};

const getPokemonWeightAndHeight = async () => {
  const response = await fetchPokemonApi();

  //  console.log(response.height); // in decimeters
  // console.log(response.weight); // in hectograms

  const totalInches = response.height * 3.937;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches % 12);

  if (inches === 12) {
    feet += 1;
    inches = 0;
  }

  const pounds = (response.weight * 0.220462).toFixed(1);

  return (
    "This pokemon is " +
    feet +
    " feet " +
    inches +
    " inches tall and weighs " +
    pounds +
    " pounds."
  );
};

// getPokemonAbilities().then((res) => {
//   console.log(res);
// });

// getPokemonTypes().then((res) => {
//   console.log(res);
// });

getPokemonWeightAndHeight().then((res) => {
  console.log(res);
});

/*
Random number generator between 0 - 1

*/
