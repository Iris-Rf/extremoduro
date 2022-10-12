import "./RecordAlbums.css";

export const recordAlbums = (item) => ` 
<div id="album" >
    <img id="poster-albums" src="${item.poster}">
    <div id="description">
    <h2>${item.title}</h2>
    <p>${item.description} - ${item.date}</p>
    </div>
</div>
`;