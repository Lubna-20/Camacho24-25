window.addEventListener("load", () => {
  let url = "datos.json";
  const gallery = document.querySelectorAll(".active");
  const contenedorImg = document.querySelectorAll(".gallery-item img");
  const listaHormiga = document.querySelector(".current");

  let arrayNaturaleza = [];
  let arrayArquitectura = [];
  let arrayDeportes = [];
  let arrayAnimales = [];
  let arrayGente = [];

  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos));

  function mostrarDatos(datos) {
    datos.forEach((element, indice) => {
      if (element.tipo == "naturaleza") {
        arrayNaturaleza.push(element);
      } else if (element.tipo == "gente") {
        arrayGente.push(element);
      } else if (element.tipo == "arquitectura") {
        arrayArquitectura.push(element);
      } else if (element.tipo == "animales") {
        arrayAnimales.push(element);
      } else if (element.tipo == "deportes") {
        arrayDeportes.push(element);
      }
    });
  }
  gallery.forEach((element) => {
    element.onclick = () => {
      const listaRotulo = document.querySelectorAll(".gallery-item span");
      listaRotulo.forEach((element) => {
        element.remove();
      });
      listaHormiga.textContent = "Gallery/" + element.textContent;
      if (element.textContent == "Nature") {
        let i = 0;
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayNaturaleza[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayNaturaleza[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i == arrayNaturaleza.length) {
            i = 0;
          }
        });
      }
      if (element.textContent == "People") {
        let i = 0;
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayGente[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayGente[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i == arrayGente.length) {
            i = 0;
          }
        });
      }
      if (element.textContent == "Architecture") {
        let i = 0;
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayArquitectura[i].imagen);
          i++;
          if (i == arrayArquitectura.length) {
            i = 0;
          }
        });
      }
      if (element.textContent == "Sports") {
        let i = 0;
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayDeportes[i].imagen);
          i++;
          if (i == arrayDeportes.length) {
            i = 0;
          }
        });
      }
      if (element.textContent == "Travel") {
        let i = 0;
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayAnimales[i].imagen);
          i++;
          if (i == arrayAnimales.length) {
            i = 0;
          }
        });
      }
    };
  });
});
