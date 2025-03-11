window.addEventListener('DOMContentLoaded',()=>{

const url ="data.json"

fetch(url)
  .then(response => response.json())
  .then(data => mostrarDatos(data))
  .catch(error => console.error("Error al cargar el JSON:", error));

  function mostrarDatos(data){
    const carouselIndicador = document.querySelector(".carousel-indicators");
    const carouselItems = document.querySelector(".carousel-inner");

    // Limpiar los indicadores y las diapositivas existentes
    while (carouselIndicador.firstChild) {
      carouselIndicador.removeChild(carouselIndicador.firstChild);
    }

    while (carouselItems.firstChild) {
      carouselItems.removeChild(carouselItems.firstChild);
    }

    // Generar indicadores y elementos del carrusel a partir del JSON
    data.forEach((item, index) => {
        /* <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img data-src="holder.js/900x500/auto/#777:#555/text:First slide" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>*/ 
      // Crear el indicador
      const indicador = document.createElement("li");
      indicador.setAttribute("data-target", "#carouselId");
      indicador.setAttribute("data-slide-to", index);
      if (index === 0) {
        // Hacer activo el primer indicador
        indicador.classList.add("active");
      }
      carouselIndicador.appendChild(indicador);

      // Crear elemento del carrusel
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (index === 0) {
        // Hacer activo el primer elemento
        carouselItem.classList.add("active");
      }

      // Crear imagen
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.text;
      img.classList.add("d-block", "w-100");
      img.style.height = "750px"; 

      // Crear el contenedor de la descripción
      const cajaCousel = document.createElement("div");
      cajaCousel.classList.add("carousel-caption", "d-none", "d-md-block");

      // crear el texto
      const texto = document.createElement("h3"); 
      texto.textContent = item.text;
      // crear la descripcion 

      const descripcion = document.createElement('p')
      descripcion.textContent=item.description

      cajaCousel.appendChild(texto);
      cajaCousel.appendChild(descripcion);
      carouselItem.appendChild(img);
      carouselItem.appendChild(cajaCousel);
      carouselItems.appendChild(carouselItem);
    });
  }
})
  