const pokemon = document.getElementById("pokemon")
const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const all = "?limit=811"

const urlForAllPokemon = baseURL+all
const data = fetch(urlForAllPokemon)
.then(result => date = result.json())
.then(json => json.results)
.then(results => console.log("results:", results))
