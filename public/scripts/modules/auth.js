//Create Authentication URL
export function getAuthentication(query) {
    // const main = document.querySelector('main');
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '166270b1475823ac569dab2a55e8aa3a';
    const detail = 'Default';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

      return [url, query]
}

//Create authentication for open leermaterialen
export function openLeerMaterialen(searchQuery) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=';
  const key = '166270b1475823ac569dab2a55e8aa3a';
  const url = `${cors}${endpoint}${searchQuery}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`;
 
  return [url, searchQuery]
}