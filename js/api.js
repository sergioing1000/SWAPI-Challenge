
async function fetchStarWarsData(option) {

  let apiUrl = "";

  switch (option) {
    case "people":
      apiUrl = "https://swapi.dev/api/people/";
      break;
    case "planets":
      apiUrl = "https://swapi.dev/api/planets/";
      break;
    case "films":
      apiUrl = "https://swapi.dev/api/films/";
      break;
    case "species":
      apiUrl = "https://swapi.dev/api/species/";
      break;
    case "vehicles":
      apiUrl = "https://swapi.dev/api/vehicles/";
      break;
    case "starships":
      apiUrl = "https://swapi.dev/api/starships/";
      break;
    default:
      break;
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos:", data);

    return data;

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}