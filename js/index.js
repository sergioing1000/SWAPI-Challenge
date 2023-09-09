// import { fetchStarWarsData } from './api.js';

// Función para el botón "People"
function People() {
  alert("https://swapi.dev/api/people/");

  fetchStarWarsData();

}

// Función para el botón "Planets"
function Planets() {
  alert("Has hecho clic en Planets");
}

// Función para el botón "Films"
function Films() {
  alert("Has hecho clic en Films");
}

// Función para el botón "Species"
function Species() {
  alert("Has hecho clic en Species");
}

// Función para el botón "Vehicles"
function Vehicles() {
  alert("Has hecho clic en Vehicles");
}

// Función para el botón "Starships"
function Starships() {
  alert("Has hecho clic en Starships");
}

//listeners
document.getElementById("btnPeople").addEventListener("click", People);
document.getElementById("btnPlanets").addEventListener("click", Planets);
document.getElementById("btnFilms").addEventListener("click", Films);
document.getElementById("btnSpecies").addEventListener("click", Species);
document.getElementById("btnVehicles").addEventListener("click", Vehicles);
document.getElementById("btnStarships").addEventListener("click", Starships);

document.getElementById("btnPeople").addEventListener("click", function () {
  document.getElementById("peopleModal").style.display = "block";
});

document.getElementById("btnPlanets").addEventListener("click", function () {
  document.getElementById("planetsModal").style.display = "block";
});

document.getElementById("btnFilms").addEventListener("click", function () {
  document.getElementById("filmsModal").style.display = "block";
});

document.getElementById("btnSpecies").addEventListener("click", function () {
  document.getElementById("speciesModal").style.display = "block";
});

document.getElementById("btnVehicles").addEventListener("click", function () {
  document.getElementById("vehiclesModal").style.display = "block";
});

document.getElementById("btnStarships").addEventListener("click", function () {
  document.getElementById("starshipsModal").style.display = "block";
});

////////////
const closePeopleModal = document.getElementById("closePeopleModal");
const closePlanetsModal = document.getElementById("closePlanetsModal");
const closeFilmsModal = document.getElementById("closeFilmsModal");
const closeSpeciesModal = document.getElementById("closeSpeciesModal");
const closeVehiclesModal = document.getElementById("closeVehiclesModal");
const closeStarshipsModal = document.getElementById("closeStarshipsModal");

closePeopleModal.onclick = () => {
  peopleModal.style.display = "none";
};

closePlanetsModal.onclick = () => {
  planetsModal.style.display = "none";
};

closeFilmsModal.onclick = () => {
  filmsModal.style.display = "none";
};

closeSpeciesModal.onclick = () => {
  speciesModal.style.display = "none";
};

closeVehiclesModal.onclick = () => {
  vehiclesModal.style.display = "none";
};

closeStarshipsModal.onclick = () => {
  starshipsModal.style.display = "none";
};
