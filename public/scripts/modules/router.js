import { getAuthentication, getData, openLeerMaterialen } from './data.js'
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
          updateUI('results')
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