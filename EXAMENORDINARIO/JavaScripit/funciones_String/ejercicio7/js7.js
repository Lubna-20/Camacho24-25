window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".col-lg-12");

  const url = "texto.txt";
  fetch(url)
  .then((Response) => Response.text())
  .then((data) => {
    mostrarDatos(data);
  });
  function mostrarDatos(data) {
    let espacio=[]
    let puntos=[]
    espacio=data.split("\n");

    espacio.forEach(element => {
        const p = document.createElement('p')
        contenedor.appendChild(p);
        puntos=element.split(':')
        let media = (Number(puntos[2])+ Number(puntos[3])+ Number(puntos[4]))/3
        p.textContent="Media de "+puntos[1]+" -->NotaFinal = "+media.toFixed(2)
    });

  
}

});

