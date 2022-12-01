const baseUrl = "https://swapi.dev"

export async function getStarshipList() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

export async function getPilots(urls){
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const relatedObjects = await Promise.all(promises)
  return relatedObjects
}