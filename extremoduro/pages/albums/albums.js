import { recordAlbums } from "../../components/Record/RecordAlbums";
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
    section.innerHTML += recordAlbums(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const Albums = () => {
  getAlbums();
};