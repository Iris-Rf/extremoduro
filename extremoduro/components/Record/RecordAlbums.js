import "./RecordAlbums.css";

export const recordAlbums = (item) => ` 
    <img class="content-image" src="${item.poster}">
    <div class="content-details fadeIn-top fadeIn-right">
       <h3>${item.title}</h3>
        <p class="pdescription">${item.description} - ${item.date}</</p>
    </div>`;