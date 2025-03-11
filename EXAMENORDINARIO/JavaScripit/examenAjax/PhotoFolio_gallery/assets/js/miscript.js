let arrayEnlaces = [];

window.addEventListener("load", () => {
  const enlaces = document.querySelectorAll("ul li a.active");

  enlaces.forEach((element) => {
    if (element.textContent == "Nature") {
      arrayEnlaces.push(element);
    } else if (element.textContent == "People") {
      arrayEnlaces.push(element);
    } else if (element.textContent == "Architecture") {
      arrayEnlaces.push(element);
    } else if (element.textContent == "Animals") {
      arrayEnlaces.push(element);
    } else if (element.textContent == "Sports") {
      arrayEnlaces.push(element);
    } else if (element.textContent == "Travel") {
      arrayEnlaces.push(element);
    }
  });
});

url = "datos.json";
fetch(url)
  .then((response) => response.json())
  .then((datos) => mostrarDatos(datos))
  .catch((error) => console.error("Error al cargar el fichero JSON:", error));

  function mostrarDatos(datos) {
    arrayEnlaces.forEach((enlace) => {
      enlace.addEventListener("click", () => {
        const imagenes = document.querySelectorAll(".gallery-item img");
        let imgIndex = 0;  // Para controlar la asignación de imágenes
  
        // Recorremos el array de datos
        for (let i = 0; i < datos.length; i++) {
          if (enlace.textContent=="Nature" && datos[i].tipo === "naturaleza") { 
            if (imgIndex < imagenes.length) {
              imagenes[imgIndex].src = datos[i].imagen;  
              imgIndex++;  
            } else {
              break; 
            }
          }
          if (enlace.textContent=="People" && datos[i].tipo === "gente") {
            if (imgIndex < imagenes.length) {
              imagenes[imgIndex].src = datos[i].imagen;  
              imgIndex++;  
            } else {
              break; 
            }
          }
          if (enlace.textContent=="Architecture" && datos[i].tipo === "arquitectura") {
            if (imgIndex < imagenes.length) {
              imagenes[imgIndex].src = datos[i].imagen;  
              imgIndex++;  
            } else {
              break; 
            }
          }
          if (enlace.textContent=="Animals" && datos[i].tipo === "animales") {
            if (imgIndex < imagenes.length) {
              imagenes[imgIndex].src = datos[i].imagen;  
              imgIndex++;  
            } else {
              break; 
            }
          }
          if (enlace.textContent=="Sports" && datos[i].tipo === "Sports") {
            if (imgIndex < imagenes.length) {
              imagenes[imgIndex].src = datos[i].imagen;  
              imgIndex++;  
            } else {
              break; 
            }
          }
        }
  
       
      });
    });
  }
  