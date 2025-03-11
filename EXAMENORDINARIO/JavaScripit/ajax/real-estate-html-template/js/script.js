window.addEventListener("load", inicio);

const arrayPalabras=['Casa','Salir','propiedades','pagar','contactar','añadir propiedad']

const enlaces = document.querySelectorAll('.navbar-nav .nav-link, a.d-lg-flex');
enlaces.forEach((item,indice) => {
    item.innerHTML=arrayPalabras[indice]
    
});
console.log(enlaces)

const urlCasas = "/ajax/real-estate-html-template/js/getCasas.json";

function inicio() {
    const propiedadaDeItem = document.querySelectorAll(".property-item");

    fetch(urlCasas)
      .then((response) => response.json())
      .then((datos) => mostrarDatos(datos))
      .finally(() => console.log("vamosssss,funciona"))
      .catch((error) => console.log('Error:', error));

    function mostrarDatos(datos) {
        datos.forEach((item, indice) => {
           
                const img = propiedadaDeItem[indice].querySelector("img");
                const estadoDiv = propiedadaDeItem[indice].querySelector(".bg-primary");
                const tipoDiv = propiedadaDeItem[indice].querySelector(".bg-white");
                const precioH5 = propiedadaDeItem[indice].querySelector("h5");
                const tituloLink = propiedadaDeItem[indice].querySelector(".d-block.h5");
                const ubicacionP = propiedadaDeItem[indice].querySelector("p");
                const specs = propiedadaDeItem[indice].querySelectorAll("small");

                img.src = item.imagen;
                estadoDiv.textContent = item.estado;
                tipoDiv.textContent = item.tipo;
                precioH5.textContent = "$"+item.precio
                tituloLink.textContent = item.titulo;
                ubicacionP.innerHTML = `<i class="fa fa-map-marker-alt text-primary me-2"></i>${item.ubicacion}`;
                specs[0].innerHTML = `<i class="fa fa-ruler-combined text-primary me-2"></i>${item.tamano}`;
                specs[1].innerHTML = `<i class="fa fa-bed text-primary me-2"></i>${item.dormitorios} Bed`;
                specs[2].innerHTML = `<i class="fa fa-bath text-primary me-2"></i>${item.banos} Bath`;
           
        });
    }

    const contenerorPrincipal = document.querySelectorAll('.team-item')
    const urlFutbol ="/ajax/real-estate-html-template/js/getPersonas.json"
    fetch(urlFutbol)
      .then((response) => response.json())
      .then((datos) => mostrarDatosFutbol(datos))
      .finally(() => console.log("vamosssss,funciona"))
      .catch((error) => console.log('Error:', error));

      function mostrarDatosFutbol(datos){

        datos.forEach((element,indice) => {

            const img = contenerorPrincipal[indice].querySelector('img');
            img.src=element.imagen;
            img.style.borderRadius="25%";

            const nombre = contenerorPrincipal[indice].querySelector('h5');
            nombre.innerHTML=element.nombre
            const posicion = contenerorPrincipal[indice].querySelector('small');
            posicion.innerHTML=element.posicion;
            const rrSs=contenerorPrincipal[indice].querySelectorAll('a');

            rrSs[0].setAttribute("href",element.facebook)
            rrSs[1].setAttribute("href",element.twitter)
            rrSs[2].setAttribute("href",element.instagram)
            
            
        });

      }
}
