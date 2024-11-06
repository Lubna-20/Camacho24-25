document.addEventListener('DOMContentLoaded',inicio);
const cajaPrincipal=document.querySelector(".container")
const btnKms=document.querySelector("#ord_kms");
const btnMarca=document.querySelector("#ord_marca");
const btnConsumo=document.querySelector("#ord_consumo");
const btnkms2=document.querySelector("#ord_kms2");
const btnMarca2=document.querySelector("#ord_marca2");
const btnConsumo2=document.querySelector("#ord_consumo2");

//construyo el array que va a contener el fichero json
const coches=[];
function inicio() {
  //volcado del json a data
  fetch('coches.json')  
    .then(response => response.json())
    .then(data => cargar(data));
  
}
 function cargar(data)   
    {
      //pasar de data a un array
      const cochesContainer = document.querySelector('.container');

      //cargar desde el json hasta un array
     data.forEach(coche=>{
       coches.push(coche);
    });
   //filtrar
   btnKms.onclick=ordenarPorKms;
   btnMarca.onclick=ordenarPorMarca;
   btnConsumo.onclick=ordenarPorConsumo;
   btnkms2.onclick=ordenarPorKms2;
   btnMarca2.onclick=ordenarPorMarca2;
   btnConsumo2.onclick=ordenarPorConsumo2;
   //btnMarca2.onclick=ordernarPorMarca2;
  // btnConsumo2.onclick=ordenarPorConsumo2;

  }
  function ordenarPorKms(){
    const listadoOrdenadoKms=coches.slice().sort((a,b)=>a.kms-b.kms);
    mostrarListadoOrdenado(listadoOrdenadoKms);
  }
  function ordenarPorConsumo(){
    const listadoOrdenadoConsumo=coches.slice().sort((a,b)=>a.consumo-b.consumo)
    mostrarListadoOrdenado(listadoOrdenadoConsumo);

  }
  function ordenarPorMarca(){
    const listadoOrdenaPorMarca=coches.slice().sort((a,b)=>a.marca.localeCompare(b.marca));
    mostrarListadoOrdenado(listadoOrdenaPorMarca);
  }
  function ordenarPorKms2(){
    const listadoOrdenadoKms=coches.slice().sort((a,b)=>a.kms-b.kms).reverse();
    mostrarListadoOrdenado(listadoOrdenadoKms);
  }
  function ordenarPorConsumo2(){
    const listadoOrdenadoConsumo=coches.slice().sort((a,b)=>a.consumo-b.consumo).reverse();
    mostrarListadoOrdenado(listadoOrdenadoConsumo);
  }
  function ordenarPorMarca2(){
    const listadoOrdenaPorMarca=coches.slice().sort((a,b)=>a.marca.localeCompare(b.marca)).reverse();
    mostrarListadoOrdenado(listadoOrdenaPorMarca);
  }
    //mostrar la lista lista ordenada
      function mostrarListadoOrdenado(coches){
        limpiarCaja();
      if (coches.length > 0) {
        coches.forEach(element=>{
          const spColor=document.createElement("small");
          spColor.textContent="KILOMETROS:"+element.kms;
          const spMarca=document.createElement("small");
          spMarca.textContent="  MARCA: "+element.marca;
          const spConsumo=document.createElement("small");
          spConsumo.textContent="  CONSUMO: "+element.consumo;
          const spPrecio=document.createElement("small");
          spPrecio.textContent="  PRECIO:"+element.precio;
          const salto=document.createElement("br");
          cajaPrincipal.appendChild(spColor)
          cajaPrincipal.appendChild(spMarca)
          cajaPrincipal.appendChild(spConsumo)
          cajaPrincipal.appendChild(spPrecio)
          cajaPrincipal.appendChild(salto);
          
        })
      }
   }
   function limpiarCaja(){
    while (cajaPrincipal.firstElementChild){
      cajaPrincipal.removeChild(cajaPrincipal.firstElementChild);
    }
   }
    