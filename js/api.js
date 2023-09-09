
async function fetchStarWarsData() {

  const apiUrl = "https://swapi.dev/api/people/";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos:", data);

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}