
import { updateUI } from './ui.js'

export async function getData(res) {
  updateUI('loading')
  const url = res[0]
  const query = res[1]
  const data = await fetch(url)

  if(data.status >= 200 && data.status < 400){
  const response = await data.json()
      window.location.hash = query;
      return await response
    }

    else {
      const backup = await fetch('../scripts/data.json')
      const backupData = await backup.json()
        window.location.hash = query;
        return await backupData
    }
  }


  export async function getOpenData(res) {
    updateUI('loading')
    const url = res[0]
    const query = res[1]
    const data = await fetch(url)
    if(data.status >= 200 && data.status < 400){
      const response = await data.json()
      window.location.hash = query;

        return await response
      }
  
      else {
        const backup = await fetch('./scripts/data.json')
        const backupData = await backup.json()
          return await backupData
      }
    }

// console.log(getData())






