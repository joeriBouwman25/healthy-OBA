import { updateUI } from './ui.js'
  
  // render data
  export function render(data) {
    const renderSection = document.querySelector("section:first-of-type")
     const results = data.results;
     results.forEach((item, i) => {
       const html = `
               <article>
                 <h2>${item.titles[0]}</h2>
                 <img src="${
                   item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                 }">
               </article>
             `;
       renderSection.insertAdjacentHTML('beforeend', html);
       updateUI('results')
     });
   }


   export function renderArticles(data) { 
    const nthSection = document.querySelector("section:nth-of-type(2)")
    const results = data.results;
    results.forEach((item, i) => {
      const html = `
              <article>
                <h2>${item.titles[0]}</h2>
                <a href="${item.detailLink}">${item.detailLink}</a>
              </article>
            `;
      nthSection.insertAdjacentHTML('beforeend', html);
      updateUI('webResults')
    });
   }