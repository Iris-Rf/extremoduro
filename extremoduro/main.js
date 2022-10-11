import "./style.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Albums } from "./pages/Albums/albums";
import { linkPage } from "./utils/linkPages";

// SE PUEDE PARAMETIZAR

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home)
linkPage("#albumslink", Albums);
linkPage("#memberslink", Members);

