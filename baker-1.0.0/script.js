window.onload = inicio;

url = "getPanaderos.json";

const listaPanaderias = [
  "Jesus",
  "Almagro",
  "Julia",
  "Andalusi",
  "JoseAntonio",
  "el trigal",
];
const listaEnlaces = [
  "panaderiajesus.com",
  "panalmagro.es",
  "panaderiasjulia.es",
  "panaderialaandalusi.com",
  "panaderiajoseantonio.com",
  "eltrigal.com",
];
const menu = document.querySelectorAll(".navbar-nav a:not(.dropdown-menu a)");
const numeros = document.getElementsByClassName("display-5 mb-0");

// Este selector que hice, solo coge los elementos para reemplazarlos
// const panaderos = document.getElementsByClassName("team-item");
//No puedes hacer appendchild de panaderos porque no es un padre es un hijo!!
const panaderosPadre = document.getElementsByClassName("row g-4")[3];
//Limpiamos el contenedor

// Este si es un padre, es el div que rodea a los 4 divs de panaderos
// es [3] porque con esa clase hay otros elementos anteriores y justo ese es el que busco.
// Para replace NO HACE FALTA BUCLE, ELIMINA LOS HIJOS DIRECTAMENTE
panaderosPadre.replaceChildren();

function inicio() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => cargar(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));

  rellenarMenu();
  numRandom();

  function cargar(data) {
    data.forEach((element) => {
      let divImg = document.createElement("div");
      divImg.className = "col-lg-3 col-md-6 wow fadeInUp";

      let menuImg = document.createElement("div");
      menuImg.className = "team-item text-center rounded overflow-hidden";
      let imagenes = document.createElement("img");
      imagenes.setAttribute("src", element.imagen);
      imagenes.className = "img-fluid";
      divImg.appendChild(menuImg);

      let divNombre = document.createElement("div");
      divNombre.className = "team-text";
      let nombre = document.createElement("h5");
      nombre.textContent = element.nombre;
      let span = document.createElement("span");
      span.textContent = element.funcion;
      divNombre.appendChild(nombre, span);

      let divEnlaces = document.createElement("div");
      divEnlaces.className = "team-social";
      let facebookA = document.createElement("a");
      facebookA.className = "btn btn-square btn-light rounded-circle";
      let facebookI = document.createElement("i");
      facebookI.className = "fab fa-facebook-f";
      let twitterA = document.createElement("a");
      twitterA.className = "btn btn-square btn-light rounded-circle";
      let twitterI = document.createElement("i");
      twitterI.className = "fab fa-twitter";
      let instagramA = document.createElement("a");
      instagramA.className = "btn btn-square btn-light rounded-circle";
      let instagramI = document.createElement("i");
      instagramI.className = "fab fa-instagram";
      menuImg.appendChild(imagenes);
      divNombre.appendChild(nombre);
      menuImg.appendChild(nombre);
      menuImg.appendChild(span);
      facebookA.appendChild(facebookI);
      instagramA.appendChild(instagramI);
      twitterA.appendChild(twitterI);
      divEnlaces.appendChild(facebookA);

      divEnlaces.appendChild(twitterA);

      divEnlaces.appendChild(instagramA);

      menuImg.appendChild(divEnlaces);

      /** ESTE ES EL QUE TIENES QUE GENERAR CON LOS DOCUMENT
      *    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item text-center rounded overflow-hidden">
                        <img class="img-fluid" src="img/team-1.jpg" alt="">
                        <div class="team-text">
                            <div class="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div class="team-social">
                                <a class="btn btn-square btn-light rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-light rounded-circle" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-light rounded-circle" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
      * 
      */
      panaderosPadre.appendChild(divImg);
    });
  }

  function rellenarMenu() {
    Array.from(menu).forEach((elemento, indice) => {
      elemento.textContent = listaPanaderias[indice];
      elemento.src = listaEnlaces[indice];
    });
  }

  function numRandom() {
    //let num = [0 - 20, 0 - 200, 0 - 2000, 0 - 2000];
    for (let i = 0, valor = 20; i < numeros.length; i++, valor *= 10) {
      num = Math.floor(Math.random() * valor);
      numeros[i].textContent = num;
    }
  }
}
