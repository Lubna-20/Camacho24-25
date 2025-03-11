window.addEventListener("load", () => {
  const tipoDegalery = document.querySelectorAll(".navmenu ul li a.active");
  const crearSpan = document.querySelectorAll(".gallery-item");
  const img = document.querySelectorAll(".gallery-item img");

  const url = "datos.json";
  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos));

  function mostrarDatos(datos) {
    tipoDegalery.forEach((tipo) => {
      tipo.addEventListener("click", () => {
        img.forEach((imageness) => {
          datos.forEach((element) => {
            const span = document.createElement("span");

            if (tipo.textContent == "Nature") {
              if (element.tipo == "naturaleza") {
                span.textContent = element.texto;
                imageness.setAttribute("src", element.imagen);
              }
            }
            if (tipo.textContent == "People") {
              if (element.tipo == "gente") {
                span.textContent = element.texto;
                imageness.setAttribute("src", element.imagen);
              }
            }
            if (tipo.textContent == "Architecture") {
              if (element.tipo == "arquitectura") {
                span.textContent = element.texto;
                imageness.setAttribute("src", element.imagen);
              }
            }
            if (tipo.textContent == "Animals") {
              if (element.tipo == "animales") {
                span.textContent = element.texto;
                imageness.setAttribute("src", element.imagen);
              }
            }
            if (tipo.textContent == "Sports") {
              if (element.tipo == "deportes") {
                span.textContent = element.texto;
                imageness.setAttribute("src", element.imagen);
              }
            }
          });
        });
      });
    });
  }
});
