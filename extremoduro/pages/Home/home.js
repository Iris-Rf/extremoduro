
// export const getAlbums = async () => {
//     try {
//       const responsePromiseAlbums = await fetch('http://localhost:3000/albums');
//       const responseAlbumsToJson = await responsePromiseAlbums.json();
//       return responseAlbumsToJson;
//     } catch (error) {
//       console.log(error)
//     }
//   }
    
//   export const displayAlbums = (albums, myYear) => {
//     const app = document.querySelector('#app');
  
//     app.innerHTML = "";
//     error.innerHTML = "";
  
//     albums.forEach((album) => {
//         if (myYear >= album.duration) {
//             const albumItem = document.createElement("div");
//             albumItem.classList.add("container");
//             albumItem.innerHTML = ` 
//                 <h3 class="title">${album.title}</h3>
//                 <div class="content">
//                     <a href="https://robeyfito.es.tl/CURIOSIDADES.htm/" alt="Curiosities Extremoduro">
//                         <div class="content-overlay"></div>
//                         <img class="content-image"" alt="extremoduro poster"
//                             src=${album.poster}>
//                         <div class="content-details fadeIn-bottom">
//                             <h2 class="content-title"> Release Year:${album.date} </h2>
//                             <h3 class="content-text"> Direct by: ${film.director} || Total Duration: ${film.duration}</h2>
//                             <p class="content-text">${album.description}</p>
//                         </div>
//                     </a>
//                 </div>
//                 <div class="responsive-buttons">
//                     <button class="more-info">+ info</button>
//                     <button class="close-info hide">Close info</button>
//                 </div>
//             `;
            
//             const content = albumItem.querySelector(".content");
  
//             content.addEventListener("mouseover",() => {
//               content.classList.add("hover");
//             });
//             content.addEventListener("mouseout",() => {
//                 content.classList.remove("hover");
//             });
            
//             const button = albumItem.querySelector(".more-info");
  
//             const closeButton = albumItem.querySelector(".close-info");
  
//             button.addEventListener("click",() => {
//                 content.classList.add("hover");
//                 button.classList.add("hide");
//                 closeButton.classList.remove("hide");
//             });
//              closeButton.addEventListener("click",() => {
//                 content.classList.remove("hover");
//                 button.classList.remove("hide");
//                 closeButton.classList.add("hide");
//             });
  
//             app.appendChild(albumItem);
//         }    
//     })
  
//     if (app.innerHTML === "" && myYear) {
//         const notYear= `<h2>There is no release in that year, please try again!</h2>`;
//         error.innerHTML = notYear;
//     }
//   }
      
  
    
//   function existeFecha(array, fecha) {
//     return array.some(function(f){
//       return f.getTime() === fecha.getTime();     
//     });
//   }