import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <div class="principal">
      <div class="container">
        <h1 class="main-title">Extremoduro discography 🤘</h1>
        <p>The discography of the Spanish rock band Extremoduro consists of eleven studio albums, one live album, two compilation albums and one video album.</p>
        <button><a id="#linkbtn" onclik="https://robeyfito.es.tl/CURIOSIDADES.htm">Group curiosities</a></button>
      </div>
  </div>
      <section class="container content">
         <h2>Bibliography</h2>
         <p>Extremoduro was a Spanish rock group founded by Roberto Iniesta in the Extremaduran city of Plasencia in 1987 that remained active until its dissolution in December 2019. They themselves defined their style as transgressive rock, based on an aggressive hard rock style with explicit lyrics that deal with earthly and marginal themes—such as sex, drugs, and love—in contrast to frequent poetic allusions. Over time, poetry ended up predominating even more in the lyric, while musical composition was given a greater instrumental complexity. The audacity of their musical proposal led them to have more difficulties to prosper in their beginnings as well as various changes in the formation of the band. The founding leader Roberto Iniesta -also known simply as "Robe"- has been the only stable member throughout its history, although the guitarist and producer Iñaki Antón "Uoho" began his collaboration with the group in 1993, integrating gradually until he was the most active member along with Robe himself. However, the popularity of the band increased a lot at a national level in 1996 with the publication of the album Agila although various circumstances, such as the lack of promotional elements, made them postpone their performances in other countries for several years. After managing to certify numerous platinum records, La ley innata became the first of his albums to reach the top of the Spanish sales charts; an achievement that was repeated by Material defective and For all audiences. His status of a cult band outside their country of origin, led them to perform for the first time in Latin America in 2012, thus increasing their success and international reach. It is considered by numerous music critics as one of the most important and influential bands in the history of Spanish rock. Many artists of various styles are inspired by them or have publicly shown their admiration. Despite having had little promotion and media support especially in its beginnings, in 2013 they had already managed to sell more than three million records.</p>
      </section> `; 
};

