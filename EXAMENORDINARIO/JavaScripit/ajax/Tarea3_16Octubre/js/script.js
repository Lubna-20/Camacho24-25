window.addEventListener("load", () => {
  const url = "getWebcams.json";
  const caja = document.querySelector("div");
  const mostrar = document.getElementById("mostrar");

  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .finally(() => console.log("vamosssss,funciona"))
    .catch((error) => console.log(error));

  let intervalo;

  function mostrarDatos(datos) {
    mostrar.addEventListener("click", () => {
      intervalo = setInterval(() => {
        // Limpiamos el contenedor antes de agregar un nuevo video para que se ve solo un video
        while (caja.firstChild) {
          caja.removeChild(caja.firstChild);
        }

        // creamos un num aleatorio para poder selecionar los videos
        let num = Math.floor(Math.random() * datos.length);
        const item = datos[num];

        // Crear el elemento de video
        const video = document.createElement("video");
        video.setAttribute("src", item.url);
        video.setAttribute("autoplay", true);
        caja.appendChild(video);

        video.style.width = "100%";
      }, 10000);
    });
  }
});
