window.addEventListener("load", inicio);

function inicio(){

    
    const diasSemana = document.querySelector("#semana")
    diasSemana.style.color="blue";
    diasSemana.style.fontSize="25px";
   const sabado =diasSemana.querySelector("#itemSabado")
   sabado.style.background="green";
   const domingo =diasSemana.querySelector("#itemDomingo")
   domingo.style.background="red";

   const edad = document.querySelector("#edad")
   edad.style.color="red";

}   