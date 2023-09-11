
function makeFetch(strData) {
  let DataObject = [];
  loadingModal.style.display = "flex";
  
  (async () => {
    try {
      const datosAPI = await fetchStarWarsData(strData);

      DataObject = datosAPI.results[0];
      

      for (let i = 0; i < Object.keys(DataObject).length; i++) {
        const headerElement = document.getElementById(`header${i + 1}`);
        if (headerElement) {
          headerElement.innerHTML =
            Object.keys(DataObject)[i].charAt(0).toUpperCase() +
            Object.keys(DataObject)[i].slice(1);
        }
      }

      table_section.style.display = "flex";

      let fila = 0;
      let col = 0;
        
      datosAPI.results.forEach(function (resul) {
        Object.keys(DataObject).slice(0, 10).forEach(function (element) { 
          const cellElement = document.getElementById(`cell-${fila}-${col}`);

          if (typeof (resul[element]) === 'object') {
            // console.log("es un objeto");
          }

          if (resul[element].includes("https")) {
            fetchSpecific(resul[element],fila,col);            
          }
          else {
            cellElement.innerHTML = resul[element];
          }
          
          col++;
        });
        col = 0;
        fila++;
      });
      
      loadingModal.style.display = "none";

    } catch (error) {
      console.error("Error en index.js:", error);
    }
  })();
}

// making fetch
document.getElementById("btnPeople").addEventListener("click", function () {
  makeFetch("people");
});
document.getElementById("btnPlanets").addEventListener("click", function () {
  makeFetch("planets");
});
document.getElementById("btnFilms").addEventListener("click", function () {
  makeFetch("films");
});
document.getElementById("btnSpecies").addEventListener("click", function () {
  makeFetch("species");
});
document.getElementById("btnVehicles").addEventListener("click", function () {
  makeFetch("vehicles");
});
document.getElementById("btnStarships").addEventListener("click", function () {
  makeFetch("starships");
});

// Showing modals

// document.getElementById("btnPeople").addEventListener("click", function () {
//   document.getElementById("peopleModal").style.display = "block";
// });

// document.getElementById("btnPlanets").addEventListener("click", function () {
//   document.getElementById("planetsModal").style.display = "block";
// });

// document.getElementById("btnFilms").addEventListener("click", function () {
//   document.getElementById("filmsModal").style.display = "block";
// });

// document.getElementById("btnSpecies").addEventListener("click", function () {
//   document.getElementById("speciesModal").style.display = "block";
// });

// document.getElementById("btnVehicles").addEventListener("click", function () {
//   document.getElementById("vehiclesModal").style.display = "block";
// });

// document.getElementById("btnStarships").addEventListener("click", function () {
//   document.getElementById("starshipsModal").style.display = "block";
// });

// Closing modals

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

const loadingModal = document.getElementById("loading-modal");
