window.addEventListener("load", inicio);

function inicio() {
  // Ruta del JSON
  const url = "getTodoPersonal.json";

  // Selecciona el contenedor del carrusel
  const indicators = document.querySelector(".carousel-indicators");
  const inner = document.querySelector(".carousel-inner");

  // Realiza la solicitud al JSON
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        // Crea el indicador
        const indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselId");
        indicator.setAttribute("data-slide-to", index);
        if (index === 0) indicator.classList.add("active");
        indicators.appendChild(indicator);

        // Crea el elemento del carrusel
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        // Imagen
        const img = document.createElement("img");
        img.src = item.imagen;
        img.classList.add("d-block", "w-100");
        img.alt = `${item.nombre}`;
       // Ajuste de tamaño de la imagen
       img.style.width = "50%";  // Cambia el tamaño al 50% del contenedor
       img.style.height = "auto"; // Mantiene la proporción de la imagen
        // Texto del carrusel
        const caption = document.createElement("div");
        caption.classList.add("carousel-caption", "d-none", "d-md-block");

        const title = document.createElement("h3");
        title.textContent = item.nombre;

        const description = document.createElement("p");
        description.textContent = `${item.cargo} - ${item.edad} años`;

        caption.appendChild(title);
        caption.appendChild(description);
        carouselItem.appendChild(img);
        carouselItem.appendChild(caption);

        inner.appendChild(carouselItem);
      });
    })
    .catch((error) => console.error("Error cargando el JSON:", error));
}

/***
 *  <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
 */
/**
 * <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img data-src="holder.js/900x500/auto/#777:#555/text:First slide" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>
            <div class="carousel-item">
                <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>
            <div class="carousel-item">
                <img data-src="holder.js/900x500/auto/#666:#444/text:Third slide" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
 */
