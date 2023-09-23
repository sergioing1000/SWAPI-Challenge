let PREV = null;
let NEXT = null;
let clickHandlerAL = null;

function makeFetch(strData) {
  let DataObject = [];

  cleantable();
  loadingModal.style.display = "flex";

  (async () => {
    try {
      const datosAPI = await fetchStarWarsData(strData);

      DataObject = datosAPI.results[0];

      PREV = datosAPI.previous;
      NEXT = datosAPI.next;

      for (let i = 0; i < Object.keys(DataObject).length; i++) {
        const headerElement = document.getElementById(`header${i + 1}`);

        if (headerElement) {
          headerElement.innerHTML =
            Object.keys(DataObject)[i].charAt(0).toUpperCase() +
            Object.keys(DataObject)[i].slice(1);
        }
      }

      table_section.style.display = "flex";

      let row = 0;
      let col = 0;

      datosAPI.results.forEach(function (resul) {
        Object.keys(DataObject)
          .slice(0, 10)
          .forEach(function (element) {
            const cellElement = document.getElementById(`cell-${row}-${col}`);

            if (typeof resul[element] === "object") {
              if (resul[element] != null) {
                const selectElement = document.createElement("select");

                selectElement.id = `select-${row}-${col}`;

                for (let i = 0; i < resul[element].length; i++) {
                  const optionElement = document.createElement("option");
                  optionElement.value = `cell-option-${i + 1}`;
                  optionElement.text = resul[element][i];
                  // console.log(resul[element][i]);
                  selectElement.appendChild(optionElement);
                }
                // console.log(selectElement);
                cellElement.appendChild(selectElement);
              } else {
                cellElement.innerHTML = "--";
              }
            } else if (typeof resul[element] === "number") {
              cellElement.innerHTML = resul[element];
            } else if (resul[element].includes("https")) {
              // console.log(resul[element]);
              fetchSpecific(resul[element], row, col);
            } else {
              cellElement.innerHTML = resul[element];
            }

            if (col === 0) {
              // addingListeners2(cellElement);
            }

            col++;
          });
        col = 0;
        row++;
      });

      loadingModal.style.display = "none";

      cellElement = null;
    } catch (error) {
      console.error("Error en index.js:", error);
    }
  })();
}
// =======================

function addingListeners1(cellElement) {
  let cell_text = "";

  function handleClick() {
    cell_text = cellElement.textContent;
    console.log(`El contenido de la celda es: ${cell_text}`);
  }

  console.log("la función");
  console.log(clickHandlerAL);

  if (clickHandlerAL) {
    cellElement.removeEventListener("click", clickHandlerAL, false);
    console.log("fucnion de remover");
  }

  clickHandlerAL = handleClick;
  cellElement.addEventListener("click", clickHandlerAL, { passive: true });
}
///////////////
function addingListeners2(cellElement) {



  var body = document.querySelector("body"),
    clickTarget = document.getElementById("click-target"),
    mouseOverTarget = document.getElementById("mouse-over-target"),
    toggle = false;

  function makeBackgroundYellow() {
    "use strict";

    if (toggle) {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = "yellow";
    }

    toggle = !toggle;
  }

  clickTarget.addEventListener("click", makeBackgroundYellow, false);

  mouseOverTarget.addEventListener("mouseup", function () {
    "use strict";

    clickTarget.removeEventListener("click", makeBackgroundYellow, false);
  });


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
document.getElementById("TblBtnPrev").addEventListener("click", function () {
  if (PREV != null) {
    makeFetch(PREV);
  } else {
    alert("no hay pagina previa");
  }
});
document.getElementById("TblBtnNext").addEventListener("click", function () {
  if (NEXT != null) {
    makeFetch(NEXT);
  } else {
    alert("no hay pagina siguiente");
  }
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
