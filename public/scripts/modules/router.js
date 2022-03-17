import { getAuthentication, openLeerMaterialen } from './auth.js'
import { getData }from './data.js'
import { render } from './render.js'
import { updateUI } from './ui.js'

import '../vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      '': () => {
        updateUI('index')
      },
        ':voedsel': hash => {
          updateUI('loading')
          getData(openLeerMaterialen(hash))
          updateUI('webResults')
        },
      'search': () => {
        updateUI('loading')
        const query = document.getElementById('search').value
        getData(getAuthentication(query))
        },
        ':query': () => {
          updateUI('results')
        }
    })
}