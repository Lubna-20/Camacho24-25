window.addEventListener("DOMContentLoaded", () => {
  const titulo = "   Desarrollo de aplicaciones web";
  const titulo2 = "   Desarrollo de aplicaciones multiplataforma";
  const resultado = titulo.trim().concat(titulo2.trim());
  const contenedor = document.querySelector(".col-lg-12");
  const span = document.createElement("span");
  span.textContent = resultado;
  span.style.border = "3px solid red";
  contenedor.appendChild(span);
});
