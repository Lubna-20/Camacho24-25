window.addEventListener("load", inicio);

function inicio() {
    console.log("JavaScript cargado correctamente");

    // Cambia el fondo de la página a verde claro
    document.body.style.backgroundColor = 'lightgreen';

    // Selecciona los div
    const divs = document.querySelectorAll("body > div");

    // Cambia el fondo del primer div
   
    divs[0].style.backgroundColor = 'green';
    
    // Selecciona la tabla y cambia el fondo de la tercera fila a rojo
    const tr1 = document.querySelector("tr");
    const tr2 =tr1.nextElementSibling
    const tr3=tr2.nextElementSibling
    tr3.style.color="red";
   

    

    // para cambiar el fondo necesitaremos utilizar una lista
    const lista = document.querySelector("ol");
        const numeroOnce = lista.children[10]; // indice 10 corresponde al elemento 11
            numeroOnce.style.backgroundColor = 'blue';
           
        
  

    // Cambia el color de fondo de los tres párrafos a diferentes colores
    const parrafo1 = document.querySelector("p")
    parrafo1.style.color="red";
    const parrafo2 =parrafo1.nextElementSibling
    parrafo2.style.color="green";
    const parrafo3 = parrafo2.nextElementSibling
    parrafo3.style.color="blue";


 
}
