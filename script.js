const pokemon = document.getElementById("pokemon")
const display = document.getElementById("display")


// Make the select element interactive
pokemon.addEventListener("change", getPokemonData)


// Prepare to use the API
const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const all = "?limit=811"
const urlForAllPokemon = baseURL+all


// Wrap the code that fetches all the Pokemon names in an
// Immediately Invoked Function Expression (IIFE) so that it ca
// be declared as async. This allows us to use the await syntactic
// soap for promises inside it.

;(async function (){
  // Populate the <select> element with options containing the
  // names of all possible pokemons
  const response = await fetch(urlForAllPokemon)
  const data = await response.json()
  const names = data.results.map( object => object.name )
  generateOptions(names)


  // Convert an array of names to a template string representing
  // a series of <option> elements, and populate the <select>
  // element with them
  function generateOptions(names) {
    // Order alphabetically
    names = names.sort()

    const options = names.reduce(( options, name ) => {
      // Capitalize the name for display in the select element
      const Name = name[0].toUpperCase() + name.slice(1)

      options += `
      <option value="${name}">${Name}</option>`

      return options
    }, "")

    pokemon.innerHTML = options
  }


  // Choose Pikachu by default
  pokemon.value = "pikachu"
  getPokemonData()
})()


/*
 Other functions can be outside the scope of the IIFE, because
 they will not be called until the select element is ready.
*/


// Fetch the data for the selected pokemon, and display it as a
// card.
async function getPokemonData() {
  const url = baseURL + pokemon.value

  const response = await fetch(url)
  const data = await response.json()
  createCard(data)
}


function createCard ({ abilities, stats, sprites, name }) {
  // Choose the default image URL
  const src = sprites.front_default

  // Generate a <ul> element from the names and base_stat values
  // of the stats
  const statList = stats.reduce(( list, object ) => {
    list += `
    <li>
      <span>${object.stat.name}</span>
      <span>${object.base_stat}</span>
    </li>`
    return list
  }, "<ul id='stats'>") + "</ul>"

  // Generate a <ul> element from the ability names
  const abilityList = abilities.reduce(( list, object ) => {
    list += `<li>${object.ability.name}</li>
    `
    return list
  }, "<ul>") + "</ul>"

  // Show the card
  display.innerHTML = `
    <h2>${name}</h2>
    <img src="${src}" alt="${name}">
    <h3>stats</h3>
    ${statList}
    <h3>abilities</h3>
    ${abilityList}
  `
}