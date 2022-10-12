import { recordMembers } from "../../components/Record/RecordMembers";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getMembers = async () => {
  const members = await getData("members");
  printMembers(members);
};

const printMembers = (list) => {
  const section = document.createElement("section");
  section.classList.add("members-section");
   for (const item of list) {
    console.log(item);
    section.innerHTML += recordMembers(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const Members = () => {
  getMembers();
};