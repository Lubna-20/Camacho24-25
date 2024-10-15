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
    let hijosVerano = veranoPadre.children;
        for (let i = 0; i < hijosVerano.length; i++) {
            hijosVerano[i].style.backgroundColor = "yellow";
        }

}
