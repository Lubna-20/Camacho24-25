window.addEventListener("load", inicio);

const url = "documento.txt";
//Creamos los arrays necesarios
let temperaturaMediaMax = [];
let mediaPluviometria = [];
let temperaturaMasAlta = [];
let puebloMasLluvia = [];

const contenedor = document.getElementsByClassName("col-lg-12")[0];

function inicio() {
  fetch(url)
    .then((response) => response.text())
    .then((datos) => {
      mostrar(datos);
    })
    .finally(() => comsole.log("FIN"))
    .catch((error) => console.error());
  function mostrar(datos) {
    let cadena = [];
    cadena = datos.split("\n");
    let cadenaMeteo=[]
    console.log(cadena);
    let sumaTemperaturaMax=0
    let mediaPluviometria=0
    cadena.forEach(element => {
        cadenaMeteo=element.split(";")
        
        sumaTemperaturaMax+=Number(cadenaMeteo[1])
        mediaPluviometria+=Number(cadenaMeteo[3])
    });
    let p = document.createElement('p')
    let media=sumaTemperaturaMax/cadena.length
    let p2 = document.createElement('p')
    let mediaPluv=mediaPluviometria/cadena.length
    p.textContent="La Media de las temperaturas es : " +media
    p2.textContent="La Media de las Pluviometria es : " +mediaPluv
    contenedor.appendChild(p)
    contenedor.appendChild(p2)
    console.log(media)
  }
}
