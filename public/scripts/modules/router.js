import { getAuthentication, openLeerMaterialen } from './auth.js'
import { getData, getOpenData }from './data.js'
import { render, renderArticles } from './render.js'
import { updateUI } from './ui.js'

import '../vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      '': () => {
        updateUI('index')
      
      },
      'search': () => {
        const query = document.getElementById('search').value
        getAuthentication(query)
        .then(auth => getData(auth))
        .then(response => render(response))

      
        },
        'voeding': () => {
          openLeerMaterialen('voedsel')
            .then(auth => getOpenData(auth))
            .then(response => renderArticles(response))
            updateUI('webResults')
        }
    })
}