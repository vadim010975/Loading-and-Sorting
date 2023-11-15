import data from "./data";
import FilmList from "./FilmList";

const containerEl = document.querySelector(".container");
const filmList = new FilmList(data, containerEl);

let current = 0;
let idx = 1;
const arrayParameters = ["id", "title", "year", "imdb"];

setInterval(() => {
  filmList.sort(arrayParameters[current], idx);
  filmList.show();

  if (idx === -1) {
    idx = 1;
    current += 1;
  } else {
    idx = -1;
  }
  if (current >= arrayParameters.length) {
    current = 0;
  }
}, 2000);
