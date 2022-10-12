import "./style.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Albums } from "./pages/Albums/albums";
import { linkPage } from "./utils/linkPages";
// import { eventLink } from "./link/events";
import { Members } from "./pages/Members/Members";
import {recordMembers } from "./components/Record/RecordMembers";
import { recordAlbums } from "./components/Record/RecordAlbums";


// SE PUEDE PARAMETIZAR

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home)
linkPage("#albumslink", Albums);
linkPage("#memberslink", Members);

// eventLink();




