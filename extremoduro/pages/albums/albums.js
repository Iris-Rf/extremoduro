import { RecordAlbums } from "../../components/RecordAlbums/RecordAlbums";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getAlbums = async () => {
  const albums = await getData("albums");
  printAlbums(albums);
};

const printAlbums = (list) => {
  const section = document.createElement("section");
  section.classList.add("albums-section");
  for (const item of list) {
    section.innerHTML += RecordAlbums(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const Albums = () => {
  getAlbums();
};