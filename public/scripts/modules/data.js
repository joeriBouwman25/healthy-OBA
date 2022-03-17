
import { render } from "./render.js"

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

export function openLeerMaterialen(word) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=';
  const key = '166270b1475823ac569dab2a55e8aa3a';
  const url = `${cors}${endpoint}${word}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`;
  // const url = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${word}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`  
  return [url, word]
}


export async function getData(res) {
  const url = res[0]
  const query = res[1]
  const data = await fetch(url)

  if(data.status >= 200 && data.status < 400){
  const response = await data.json()
      window.location.hash = query;
      // await filter(response)
      await render(response);
    }

    else {
      const backup = await fetch('./scripts/data.json')
      const backupData = await backup.json()
        window.location.hash = query;
        // await filter(backupData)
        await render(backupData)
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







