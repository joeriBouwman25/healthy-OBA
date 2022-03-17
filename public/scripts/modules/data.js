
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


export async function getData(res) {
  const url = res[0]
  const query = res[1]
  const data = await fetch(url)

  if(data.status >= 200 && data.status < 400){
  const response = await data.json()
      window.location.hash = query;
      return response
    }

    else {
      const backup = await fetch('./scripts/data.json')
      const backupData = await backup.json()
        window.location.hash = query;
        return backupData
    }
  }

// filter data

// function filter(data) {
//   const test = []
//   const results = data.results
//   results.forEach(elements => {
//     const formats = elements.formats
//     formats.forEach(format => {
//       const filtered = format.text
//       test.push(filtered)
//       console.log(test)
//       return filtered
//     })
//   })
// }







