/**
 * @jest-environment jsdom
 */

import FilmList from "../FilmList";
import data from "../data";

test("class FilmList", () => {
  const id = 26;
  const title = "Побег из Шоушенка";
  const imdb = 9.3;
  const year = 1994;
  const filmList = new FilmList(data);
  expect(+filmList.elements[0].dataset.id).toBe(+id);
  expect(filmList.elements[0].dataset.title).toBe(title);
  expect(+filmList.elements[0].dataset.imdb).toBe(+imdb);
  expect(+filmList.elements[0].dataset.year).toBe(+year);
});
