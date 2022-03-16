
//Create Authentication URL
export function getAuthentication(query) {
    // const main = document.querySelector('main');
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '6c2bd595a3ca9a65b295591f2ca09652';
    const detail = 'Default';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

      return [url, query]
}



export async function getData(res) {
  const url = res[0]
  const query = res[1]
  const data = await fetch(url)

  if(data.status >= 200 && data.status < 400){
  const response = await data.json()

      window.location.hash = query;
      localStorage.setItem('data', JSON.stringify(data));
      await filter(response)
       await render(response);
    }
    else {
      if(localStorage.getItem('data')){
        const localData = JSON.parse(localStorage.getItem('data'))
        window.location.hash = query;
        await filter(localData)
        // console.log(data.status + data.statusText)
        render(localData)

    }
  }
}


// filter data

function filter(data) {
  const results = data.results
  console.log(results)
  // results.forEach(elements => {
  //   const formats = elements.formats
  //   console.log(formats)
  // })
}



  // render data
export function render(data) {
   const renderSection = document.querySelector("section:first-of-type")
    const results = data.results;
    results.forEach((item, i) => {
      const html = `
              <article>
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
              </article>
            `;
      renderSection.insertAdjacentHTML('beforeend', html);
    });
  }




