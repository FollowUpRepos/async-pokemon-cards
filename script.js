const pokemon = document.getElementById("pokemon")
const find = document.getElementById("find")
const display = document.getElementById("display")


pokemon.addEventListener("change",getPokemonData )

const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const all = "?limit=811"

const urlForAllPokemon = baseURL+all

const data = fetch(urlForAllPokemon)
.then(result => date = result.json())
.then(json => json.results)
.then(results => results.map( object => object.name ))
.then(names => names.reduce(( options, name ) => {
  options += `
  <option value="${name}">${name}</option>`
  return options
}, ""))
.then(options => pokemon.innerHTML = options)


find.addEventListener("click", getPokemonData)

function getPokemonData(event) {
  // console.log("event:", event);
  const name = pokemon.value
  console.log("pokemonToFind:", name);
  const url = baseURL + name

 fetch(url)
  .then(result => result.json())
  .then(data => {
    const { abilities, stats, sprites } = data
    return { abilities, stats, sprites, name }
  })
  .then(createTicket)
  
}


function createTicket ( object ) {
  console.log("object:", object)
 const { abilities, stats, sprites, name } =  object

// ability: Object { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" }
// ​​​​
// name: "overgrow"
// ​​​​
// url: "https://pokeapi.co/api/v2/ability/65/"
// ​​​​
// <prototype>: Object { … }
// ​​​
// is_hidden: false
// ​​​
// slot: 1
// ​​​
// <prototype>: Object { … }
 const abilityNames = abilities.map( object => object.ability.name)

 const statArray = stats.map( object => {
   return {
     name: object.stat.name,
     value: object.base_stat
   }
 })

 
 const image = sprites.front_default

 console.log("abilityNames:", abilityNames);
 console.log("statArray:", statArray);
 console.log("image:", image);

 const statList = statArray.reduce(( list, item ) => {
   list += `<li><span>${item.name}</span><span>${item.value}</span></li>
   `
   return list
 }, "<ul>") + "</ul>"
console.log("statList:", statList);

const abilityList = abilityNames.reduce(( list, ability ) => {
  list += `<li>${ability}</li>
  `
  return list
}, "<ul>") + "</ul>"
console.log("statList:", statList);


 display.innerHTML = `
   <h2>${name}</h2>
   <img src="${image}" alt="${name}">
   <h3>stats</h3>
   ${statList}
   <h3>abilities</h3>
   ${abilityList}
 `
}