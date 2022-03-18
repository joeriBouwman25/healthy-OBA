//Create Authentication URL
export async function getAuthentication(query) {
    // const main = document.querySelector('main');
    console.log(query)
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '166270b1475823ac569dab2a55e8aa3a';
    const detail = 'Default';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
      return [url, query]
}

//Create authentication for open leermaterialen
export async function openLeerMaterialen(searchQuery) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const query = await searchQuery
  const endpoint = 'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=';
  const key = '166270b1475823ac569dab2a55e8aa3a';
  const url = `${cors}https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`;
 
  return [url, searchQuery]
}