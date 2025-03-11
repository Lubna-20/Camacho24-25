window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".col-lg-12");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");

  span.style.border = "3px solid red";
  span2.style.border = "3px solid yellow";
  span3.style.border = "3px solid green";

  const cadena = "red green blue yellow blue pink";
  span.textContent = cadena;
  const cadena2 = cadena.replace("red", "rojo").replace("green", "verde");
  span2.textContent = cadena2;

  const cadena3 = cadena.replaceAll(" ", ";");
  span3.textContent = cadena3;

  contenedor.appendChild(span);
  contenedor.appendChild(span2);
  contenedor.appendChild(span3);
});
