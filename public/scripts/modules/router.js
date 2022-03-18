import { getAuthentication, openLeerMaterialen } from './auth.js'
import { getData, getOpenData }from './data.js'
import { render } from './render.js'
import { updateUI } from './ui.js'

import '../vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      '': () => {
        updateUI('index')
      
       
      // 'search': () => {
      //   updateUI('loading')
      //   const query = document.getElementById('search').value
      //   getAuthentication(query)
      //       .then(auth => getData(auth))
      //       .then(response => render(response))
      //       updateUI('results')
      
        },
        'voedsel': hash => {
          updateUI('loading')
          openLeerMaterialen(hash)
            .then(auth => getOpenData(auth))
            .then(response => render(response))
          updateUI('webResults')
        }
    })
}