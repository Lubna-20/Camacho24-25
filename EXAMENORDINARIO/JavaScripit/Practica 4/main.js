window.onload = () => {
    // Selecciona todos los elementos <li> y los botones por sus IDs
    const lista = document.querySelectorAll('li');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    
    // Define un arreglo de colores para ser utilizado en el botón 2
    const colores = ['green', 'blue', 'red', 'pink'];

    //btn1: genera un número aleatorio entre 0 y 999 para cada <li>
    btn1.addEventListener('click', () => {
        Array.from(lista).forEach(function(item) {
            // Genera un número aleatorio entre 0 y 999
            var num = Math.floor(Math.random() * 1000);
            // Asigna el número al contenido de texto del <li>
            item.textContent = num;
        });
    });

    //btn2: asigna un color aleatorio a cada <li> desde el arreglo 'colores'
    btn2.addEventListener('click', () => {
        Array.from(lista).forEach(function(item) {
            // Selecciona un color aleatorio del arreglo 'colores'
            item.style.color = colores[Math.floor(Math.random() * 4)];
        });
    });

    //btn3: genera un número aleatorio y cambia el color basado en su valor
    btn3.addEventListener('click', () => {
        Array.from(lista).forEach(function(item) {
            // Genera un número aleatorio entre 0 y 999
            var num = Math.floor(Math.random() * 1000);
            // Asigna el número al contenido de texto del <li>
            item.textContent = num;
            // Cambia el color a rojo si el número es mayor a 500, azul si no
            if (num > 500) {
                item.style.color = 'red';
            } else {
                item.style.color = 'blue';
            }
        });
    });

    //btn4: genera dos números aleatorios entre 1 y 10 y muestra una alerta si son iguales
    btn4.addEventListener('click', () => {
    
        console.log("accion 4")
        
        const lin1 = document.querySelector("li");
        const lin2 = lin1.nextElementSibling;
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        lin1.textContent=num1
        lin2.textContent=num2
    
        if(num1 == num2){
            alert("numero"+num1+" y numero"+num2+" son iguales")
        }
        
    });
};
