import "./RecordMembers.css";

export const recordMembers = (item) => ` 
<div id="members" >
    <img src="${item.poster}">
    <div class="description">
    <h2>${item.name}</h2>
    <p>${item.bibliography}</p>
    </div>
</div>
`;