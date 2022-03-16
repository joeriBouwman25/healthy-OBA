import { getAuthentication, getData, render } from './data.js'

import '../vendor/routie.min.js'
import { updateUI } from './ui.js'

export function handleRoutes() {
    routie(
      {
      '': () => {
        updateUI('index')
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