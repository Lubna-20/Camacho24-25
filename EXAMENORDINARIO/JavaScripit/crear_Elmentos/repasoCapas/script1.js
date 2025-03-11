window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const cajaPadre = document.createElement("div");
  cajaPadre.className = "container";
  body.appendChild(cajaPadre);

  const fielset = document.createElement("fieldset");
  fielset.className = "gallery";
  const legend = document.createElement("legend");
  legend.textContent = "Practicas imagenes";
  cajaPadre.appendChild(fielset);
  fielset.appendChild(legend);
  const arrayCajas = [];
  //crear las 40 img mediante blucle
  for (let index = 0; index < 40; index++) {
    const img = document.createElement("img");
    numRandom = Math.floor(Math.random() * 40 + 1);
    img.src = "https://randomuser.me/api/portraits/men/" + numRandom + ".jpg";
    fielset.appendChild(img);
  }
  const imagenes = document.querySelectorAll("img");
  var contador = 0;
  const limImg=6;
  // click para poner el borde
  imagenes.forEach((imagen) => {
  
      imagen.addEventListener("click", () => {
       
        if (contador <limImg ) {
        imagen.className = "ponerBorde";
        contador++;
        }
    });
    
  });
  // doble click para quitar el borrde
  imagenes.forEach((imagen) => {
    imagen.addEventListener("dblclick", () => {
       
            contador--
            imagen.className = "quitarBorde";
        
       
    });
  });
});
