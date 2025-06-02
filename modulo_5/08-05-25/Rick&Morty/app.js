const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

const API_URL = "https://rickandmortyapi.com/api/character";

function mostrarPersonajes(personajes) {
  dataContainer.innerHTML = "";
  personajes.forEach(personaje => {
    const div = document.createElement("div");
    div.classList.add("character");
    div.innerHTML = `
      <h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="${personaje.name}" />
    `;
    dataContainer.appendChild(div);
  });
}

function bloquearBotones(estado) {
  fetchBtn.disabled = estado;
  axiosBtn.disabled = estado;
}

function obtenerConFetch() {
  dataContainer.innerHTML = "<p>Cargando con Fetch...</p>";
  bloquearBotones(true);

  fetch(API_URL)
    .then(response => {
      if (!response.ok) throw new Error("Error en la solicitud con fetch");
      return response.json();
    })
    .then(data => {
      mostrarPersonajes(data.results);
    })
    .catch(error => {
      dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    })
    .finally(() => {
      bloquearBotones(false);
    });
}

function obtenerConAxios() {
  dataContainer.innerHTML = "<p>Cargando con Axios...</p>";
  bloquearBotones(true);

  axios.get(API_URL)
    .then(response => {
      mostrarPersonajes(response.data.results);
    })
    .catch(error => {
      dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    })
    .finally(() => {
      bloquearBotones(false);
    });
}

fetchBtn.addEventListener("click", obtenerConFetch);
axiosBtn.addEventListener("click", obtenerConAxios);
