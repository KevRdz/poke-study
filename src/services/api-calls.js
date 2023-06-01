const baseUrl = "https://pokeapi.co"

export async function getPokemonList() {
  const res = await fetch(`${baseUrl}/api/v2/pokemon?limit=100000&offset=0`)
  console.log(res);
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${baseUrl}${apiUrl}`)
  return res.json()
}