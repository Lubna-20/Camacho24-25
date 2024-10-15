window.addEventListener('load', inicio)

function inicio(){
    // 1º Padre es id otoño,
    // h2 en es un hermano anterior de id=”otonio” que va en rojo
    let otonioPadre = document.getElementById('otonio')
    otonioPadre.previousElementSibling.style.backgroundColor="red"

    //2º Todos los hijos de otoño van en naranja
    let hijosOtonio = otonioPadre.children
    for (let i = 0; i < hijosOtonio.length; i++) {
        hijosOtonio[i].style.backgroundColor="orange"
    }

    //3º Padre2 igual que 1º, 
    //pero con id verano. Hermano anterior va en verde
    let veranoPadre = document.getElementById('verano')
    veranoPadre.previousElementSibling.style.backgroundColor="green"

    //4º Todos los hijos van en amarillo, 
    //aunque más abajo alguno se modificarán
    //5º Selecciono pepino listaHijosV[2], le cambio el color a
    // él, al hermano de por arriba y de por abajo.
    let hijosVerano = veranoPadre.children;
    for (let i = 0; i < hijosVerano.length; i++) {
        hijosVerano[i].style.backgroundColor = 'yellow';
        hijosVerano[1].style.backgroundColor = '#FF00FF'; 
        hijosVerano[2].style.backgroundColor = '#0000FF';
        hijosVerano[3].style.backgroundColor = 'purple';

    }
   //6º Padre3 igual que 1º, pero con id primavera.
   // Hermano anterior va en '#ff2299'

   let primaveraPadre = document.getElementById('primavera')
   primaveraPadre.previousElementSibling.style.backgroundColor='#ff2299'

    }