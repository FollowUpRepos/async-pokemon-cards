const pokemon = document.getElementById("pokemon")
const display = document.getElementById("display")


pokemon.addEventListener("change", getPokemonData)


// Prepare to use the API
const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const all = "?limit=811"
const urlForAllPokemon = baseURL+all

// Populate the <select> element with options containing the
// names of all possible pokemons
fetch(urlForAllPokemon)               // data stream as promise
.then(result => date = result.json()) // final value of stream
.then(json => json.results)           // array of objects
// Extract just the name from each object
.then(results => results.map( object => object.name ))
// Generate a template string of option elements
.then(generateOptions)
// Apply the option elements to the select element
.then(options => pokemon.innerHTML = options)
// Select Pikachu by default
.then(choosePikachu)



// Convert an array of names to a template string representing
// a series of <li> elements
function generateOptions(names) {
  // Order alphebetically
  names = names.sort()

  const options = names.reduce(( options, name ) => {
    // Capitalize the name for display in the select element
    const Name = name[0].toUpperCase() + name.slice(1)

    options += `
    <option value="${name}">${Name}</option>`

    return options
  }, "")

  return options
}


// Set Pikachu as the default Pokemon immediately after launch
function choosePikachu() {
  pokemon.value = "pikachu"
  getPokemonData()
}



// Fetch the data for the selected pokemon, and display it as a
// card
function getPokemonData() {
  const url = baseURL + pokemon.value

 fetch(url)                      // data stream as a promise
  .then(result => result.json()) // final value of stream
  // Extract the values of the properties we need to display
  .then(data => {
    const { abilities, stats, sprites, name } = data
    return { abilities, stats, sprites, name }
  })
  .then(createCard)
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


 display.innerHTML = `
   <h2>${name}</h2>
   <img src="${src}" alt="${name}">
   <h3>stats</h3>
   ${statList}
   <h3>abilities</h3>
   ${abilityList}
 `
}