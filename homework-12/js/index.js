const BASE = 'https://swapi.dev/api/';

const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const btnGetInfo = document.querySelector(".btn-get-info");
const btnGetPlanets = document.querySelector(".btn-get-planets");
const row = document.querySelector(".row");
const colInfo = document.querySelector(".col-info");
const colPlanets = document.querySelector(".col-planets");

async function getPeople() {
  try {
    const response = await fetch(`${BASE}people/`,).then(response => response.json());
    return result = response.results;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

getPeople()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

async function getPlanets(page = 1) {
  try {
    const response = await fetch(`${BASE}planets/?page=${page}`).then(response => response.json());
    return result = response.results;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

getPlanets()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

function renderPeople(people) {
  people.forEach(hero => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = hero.name;
    const article = document.createElement("p");
    article.classList.add("card-text");
    switch (hero.gender) {
      case 'male':
        hero.gender = ` <i class="fas fa-mars fa-3x"></i>`;
        break;
      case 'female':
        hero.gender = `<i class="fas fa-venus fa-3x"></i>`;
      default:
        hero.gender = `<i class="fab fa-reddit-alien fa-3x"></i>`;
    }
    article.innerHTML = `Birth Year: ${hero.birth_year}<br>Gender: ${hero.gender}`;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    colInfo.appendChild(card);
    row.appendChild(colInfo);
    fragment.appendChild(row);
  });
  container.appendChild(fragment);
}

function renderPlanets(planets) {
  const container = document.querySelector(".container");
  planets.forEach(planet => {
    const card = cardTemplate(planet);
    colPlanets.insertAdjacentElement('afterbegin', card);
    row.appendChild(colPlanets);
    fragment.appendChild(row);
  });
  container.appendChild(fragment);
}

function cardTemplate(planet) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = planet.name;
  cardBody.appendChild(title);
  card.appendChild(cardBody);
  colPlanets.appendChild(card);
  row.appendChild(colPlanets);
  fragment.appendChild(row);
  return card;
}

let currentPage = 1;
function paginationInit() {
  document.getElementById('next').addEventListener("click", () => {
    if (currentPage <= 0) return;
    getPlanets(++currentPage).then(renderPlanets);
  });
}

paginationInit();
btnGetInfo.addEventListener("click", (e) => {
  getPeople().then(renderPeople);
});
btnGetPlanets.addEventListener("click", (e) => {
  getPlanets().then(renderPlanets);
});
