import "./RecordAlbums.css";

export const RecordAlbums = (item) => ` 
<figure class="card" >
    <img src="${item.poster}">
    <div class="description">
    <h2>${item.title}</h2>
    <p>${item.description} - ${item.date}</p>
    </div>
</figure>
`;