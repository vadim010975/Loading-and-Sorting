export default class FilmList {
  constructor(data, container) {
    this.container = container;
    this.elements = [];
    data.forEach((el) => {
      const element = document.createElement("tr");
      element.dataset.id = el.id;
      element.dataset.title = el.title;
      element.dataset.year = el.year;
      element.dataset.imdb = el.imdb;
      element.classList.add("row");
      element.insertAdjacentHTML("beforeend", `<td class='cell'>${el.id}</td>`);
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>${el.title}</td>`
      );
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>(${el.year})</td>`
      );
      element.insertAdjacentHTML(
        "beforeend",
        `<td class='cell'>imdb: ${el.imdb.toFixed(2)}</td>`
      );
      this.elements.push(element);
    });
  }

  show() {
    this.elements.forEach((el) => {
      this.container.appendChild(el);
    });
  }

  sort(param, idx = 1) {
    if (
      (param !== "id" &&
        param !== "title" &&
        param !== "year" &&
        param !== "imdb") ||
      (idx !== -1 && idx !== 1)
    ) {
      return;
    }
    this.elements.sort((a, b) => {
      if (param === "title") {
        return idx * a.dataset[param].localeCompare(b.dataset[param]);
      }
      return idx * (+a.dataset[param] - +b.dataset[param]);
    });
  }
}
