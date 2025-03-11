window.addEventListener("load", inicio);
// eliminamos las cards del HTML
const elementosCard = document.querySelectorAll(".col-md-4.mb-5");
elementosCard.forEach(function (item) {
  item.remove();
});

const divJefe = document.querySelector(".row.gx-4.gx-lg-5");
const url = "getTodoPersonal.json";

function inicio() {
  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .finally(() => console.log("¡Vamosssss, funcionaaaaaa!"))
    .catch((error) => console.log("Error:", error));

  function mostrarDatos(datos) {
    datos.forEach((item) => {
      // Creamos los elementos principales de la tarjeta
      const divAbuelo = document.createElement("div");
      divAbuelo.className = "col-md-4 mb-5";
      const divPadre = document.createElement("div");
      divPadre.className = "card h-100";
      const divHijo = document.createElement("div");
      divHijo.className = "card-body";

      // Agregamos  contenido a la tarjeta
      const h2Titulo = document.createElement("h2");
      h2Titulo.className = "card-title";
      h2Titulo.textContent = item.nombre;
      const pTexto = document.createElement("p");
      pTexto.className = "card-text";
      pTexto.textContent = "Cargo:" + item.cargo;
      const pDireccion = document.createElement("p");
      pDireccion.className = "card-text";
      pDireccion.textContent = "Direccion:" + item.direccion;
      const img = document.createElement("img");
      img.src = item.imagen;
      img.style.float = "right";
      img.style.borderRadius = "25%";
      img.width = 150;
      const pEdad = document.createElement("p");
      pEdad.className = "card-text";
      pEdad.textContent = "Edad:" + item.edad;

      const divMasInfo = document.createElement("div");
      divMasInfo.className = "card-footer";
      divMasInfo.style.textAlign = "center";
      const a = document.createElement("a");
      a.className = "btn btn-primary btn-sm";
      a.innerText = "Mas info";
      a.href = item.enlace;

      // añadir los elementos creados
      divPadre.appendChild(divHijo);
      divAbuelo.appendChild(divPadre);
      divJefe.appendChild(divAbuelo);
      divHijo.appendChild(h2Titulo);
      divHijo.appendChild(img);
      divHijo.appendChild(pTexto);
      divHijo.appendChild(pDireccion);
      divHijo.appendChild(pEdad);
      divPadre.appendChild(divMasInfo);
      divMasInfo.appendChild(a);
    });
  }
}
