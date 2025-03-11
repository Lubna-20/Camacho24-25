window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".col-lg-12");
  let tempMax = [];
  let tempMaxMedia = 0;
  let pluviometria = [];
  let pluviometriaMedia = 0;
  let puebloTemperaturaAlta = "";
  let puebloMasLluvia = "";

  const url = "texto.txt";
  fetch(url)
    .then((Response) => Response.text())
    .then((data) => {
      mostrarDatos(data);
    });
  function mostrarDatos(data) {
    let espacio = [];
    let puntos = [];
    espacio = data.split("\n");
    let tmp1 = 0;
    let tmp2 = 0;
    espacio.forEach((element) => {
      puntos = element.split(";");
      tempMax.push(Number(puntos[1]));
      pluviometria.push(Number(puntos[3]));
      if (Number(puntos[1]) > tmp1) {
        tmp1 = Number(puntos[1]);
        puebloTemperaturaAlta = puntos[0];
      }
      if (Number(puntos[3]) > tmp2) {
        tmp2 = Number(puntos[3]);
        puebloMasLluvia = puntos[0];
      }
    });
    calcularTempMaxMedia();
    calcularTempMaxPluviometria();
    const p1 = document.createElement("p");
    contenedor.appendChild(p1);
    p1.textContent =
      "el pueblo con la temperatura mas alta es ->" +
      puebloTemperaturaAlta +
      " con " +
      tmp1 +
      " grados";
    const p2 = document.createElement("p");
    contenedor.appendChild(p2);
    p2.textContent =
      "el pueblo con la lluvia mas alta es ->" +
      puebloMasLluvia +
      " con " +
      tmp2 +
      " L/m2";
  }
  function calcularTempMaxMedia() {
    for (let index = 0; index < tempMax.length; index++) {
      tempMaxMedia += tempMax[index];
    }
    console.log(tempMaxMedia);
    const p = document.createElement("p");
    contenedor.appendChild(p);
    tempMaxMedia = tempMaxMedia / tempMax.length;
    p.textContent = "La media de la temperatura maxima es -->" + tempMaxMedia;
  }
  function calcularTempMax0Pluviometria() {
    for (let index = 0; index < pluviometria.length; index++) {
      pluviometriaMedia += pluviometria[index];
    }
    const p = document.createElement("p");
    contenedor.appendChild(p);
    pluviometriaMedia = pluviometriaMedia / pluviometria.length;
    p.textContent =
      "La media de pluviometria es -->" + pluviometriaMedia.toFixed(2);
  }
});
