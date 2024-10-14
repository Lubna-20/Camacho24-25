window.onload = function () {
    //1º Padre es id otoño, h2 en es un hermano anterior de id=”otonio” que va en rojo
    // Seleccionamos el padre "otonio" y su hermano anterior (el h2 de Otoño) y le aplicamos el fondo rojo
    let otonioPadre = document.querySelector('#otonio')
    otonioPadre.previousElementSibling.style.backgroundColor = 'red';
    // 2º Cambiar el color de fondo de todos los hijos de "otonio" a naranja
    // Obtenemos los hijos de la lista Otoño ( li) y les aplicamos el fondo naranja
        let hijosOtonio = otonioPadre.children;
        for (let i = 0; i < hijosOtonio.length; i++) {
            hijosOtonio[i].style.backgroundColor = 'orange';
        }
    
    // 3º Cambiar el color de fondo del hermano anterior de id "verano" (h2 de Verano) a verde
    // Seleccionamos el padre "verano" y su hermano anterior (el h2 de Verano) y le aplicamos el fondo verde
        let veranoPadre = document.getElementById('verano');
        veranoPadre.previousElementSibling.style.backgroundColor = 'green';
    
    // 4º Cambiar el color de fondo de todos los hijos de "verano" a amarillo
     // Obtenemos los hijos de la lista Verano y les aplicamos el fondo amarillo
        let hijosVerano = veranoPadre.children;
        for (let i = 0; i < hijosVerano.length; i++) {
            hijosVerano[i].style.backgroundColor = 'yellow';
        }
    
    // 5º Seleccionar "Pepino", cambiar su color de fondo y el de sus hermanos anterior y siguiente
     // Obtenemos el elemento "Pepino" y le aplicamos un fondo azul
        let pepino = hijosVerano[2]; // Pepino es el tercer elemento (índice 2)
        pepino.style.backgroundColor = '#0000FF'; // Azul para Pepino
        
    // Cambiar el fondo del hermano anterior de Pepino a fucsia, si existe
        if (pepino.previousElementSibling) {
            pepino.previousElementSibling.style.backgroundColor = '#FF00FF'; // Fucsia
        }
    
    // Cambiar el fondo del hermano siguiente de Pepino a púrpura, si existe
        if (pepino.nextElementSibling) {
            pepino.nextElementSibling.style.backgroundColor = '#8B00FF'; // Púrpura
        }
    
    // 6º Cambiar el color de fondo del hermano anterior de id "primavera" (h2 de Primavera) a rosa '#ff2299'
    // Seleccionamos el padre "primavera" y su hermano anterior (el h2 de Primavera) y le aplicamos el fondo rosa
        let primaveraPadre = document.getElementById('primavera');
        primaveraPadre.previousElementSibling.style.backgroundColor = '#ff2299';
    
    // 7º Seleccionar "Cebolla", cambiar el color de fondo desde ese punto hacia arriba y hacia abajo
    // Obtenemos la lista de hijos de Primavera y seleccionamos "Cebolla" (el quinto elemento)
        let hijosPrimavera = primaveraPadre.children;
        let cebolla = hijosPrimavera[4]; // Cebolla es el quinto elemento (índice 4)
    
    // Cambiar el fondo de los hermanos anteriores de "Cebolla" (hacia arriba) a cian
        for (let i = 0; i < 5; i++) {
            hijosPrimavera[i].style.backgroundColor = '#00FFFF'; // Cian
        }
    
        // Cambiar el fondo de los hermanos siguientes de "Cebolla" (hacia abajo) a verde claro
        for (let i = 5; i < hijosPrimavera.length; i++) {
            hijosPrimavera[i].style.backgroundColor = '#00FF00'; // Verde claro
        }
 };
