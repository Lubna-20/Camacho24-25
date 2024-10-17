window.addEventListener("load", inicio);

const url = "getTodoPersonal.json";

const contenedorPadre = document.querySelectorAll(".col-md-4.mb-5");
eliminarPlantilla();
function inicio() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((data) => mostrar(data))
    .catch((error) => alert(error))
    .finally(() => alert("FIN."));

  function mostrar(data) {
    data.forEach((datos) => {

        const contenedorpadre =document.createElement('div')
        contenedorPadre.className='col-md-4 mb-5'
        
        const caja1 = document.createElement('div')
        caja1.className='card';
        contenedorpadre.appendChild(caja1)

        const caja2 = document.createElement('div')
        caja2.className='card-body';
        contenedorPadre.appendChild(caja2)

        const imagen = document.createElement('img')
        imagen.setAttribute("src", datos.imagen);

        const nombre = document.createElement('p')
        nombre.textContent="Nombre: "+ datos.nombre

        caja2.append(imagen,nombre)
    });
  }
}

function eliminarPlantilla() {
  contenedorPadre.forEach((element) => {
    element.remove();
  });
}
