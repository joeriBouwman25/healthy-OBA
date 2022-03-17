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
     });
   }

//    <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>