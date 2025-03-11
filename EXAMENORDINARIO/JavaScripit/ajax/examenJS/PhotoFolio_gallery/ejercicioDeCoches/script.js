window.addEventListener("load", () => {
  const cochesVerdes = [];
  const mediaPrecio = 0;
  const mediaKm = 0;
  const cocheKm = [];
  const colores = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Silver",
    "Yellow",
  ];
  const url = "coches.json";
  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos));

  function mostrarDatos(datos) {
    datos.forEach((item) => {
      listadoCochesVerdes(item);
      cocheConMasKm(item);
    });

    alert(cochesVerdes);
    //alert(mediaPrecio);
    alert(cocheKm);
  }

  function listadoCochesVerdes(coche) {
    if (
      coche.color == "Green" &&
      coche.marca == "Volkswagen" &&
      coche.consumo < 7 &&
      coche.precio > 25000
    ) {
      cochesVerdes.push(coche.marca);
      cochesVerdes.push(coche.modelo);
    }
  }
  function cocheConMasKm(coches) {}
});
