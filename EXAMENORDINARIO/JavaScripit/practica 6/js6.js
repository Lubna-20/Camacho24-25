window.onload = () => {
    

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5')
    const divs = [
        document.getElementById('c1'),
        document.getElementById('c2'),
        document.getElementById('c3'),
        document.getElementById('c4'),
        document.getElementById('c5'),
        document.getElementById('c6'),
        document.getElementById('c7'),
        document.getElementById('c8'),
        document.getElementById('c9'),
        document.getElementById('c10'),
        document.getElementById('c11'),
        document.getElementById('c12')
    ];
   
    btn1.addEventListener("click" , () => { 
       // recorro todo el vector con un for y asigno a cada caja un numero aleatorio
        for (let i = 0; i < divs.length; i++) {
            var num= Math.floor(Math.random()*1000);
            divs[i].textContent = num;
        }
    })

    const colores = [
        '#FF0000', // Rojo
        '#00FF00', // Verde Lima
        '#0000FF', // Azul
        '#FFFF00', // Amarillo
        '#FF6600', // Naranja
        '#6600FF', // Púrpura
        '#FF00FF', // Magenta
        '#00FFFF', // Cian
        '#FFB6C1', // Rosa Claro
        '#A52A2A', // Marrón
        '#808080', // Gris
        '#000000', // Negro
        '#FFFFFF', // Blanco
        '#800000', // Rojo Oscuro
        '#008000', // Verde Oscuro
        '#000080', // Azul Marino
        '#808000', // Amarillo Oscuro
        '#800080', // Púrpura Oscuro
        '#008080', // Verde Azulado
        '#C0C0C0'  // Plata
    ];
    
    btn2.addEventListener("click",()=>{



     
        for (let i = 0; i < divs.length; i++) {
               
            const numeroAleatorio = Math.floor(Math.random() * divs.length);
           // este es otro fomma --> const colorHex = '#' + numeroAleatorio.toString(16).padStart(6, '0');
   

            divs[i].style.backgroundColor=colores[numeroAleatorio];
        }
         
    })
    btn3.addEventListener("click",()=>{
        for (let i = 0; i < divs.length; i++) {
            const num =parseInt(prompt("Introduce el numero "+(i+1)));
            divs[i].textContent=num;
        }
    }) 

    btn4.addEventListener("click",()=>{
        setInterval(function(){
            for (let i = 0; i < divs.length; i++) {
                var num= Math.floor(Math.random()*1000);
                divs[i].textContent = num;
            }
            for (let i = 0; i < divs.length; i++) {
                const numeroAleatorio = Math.floor(Math.random() * divs.length);
               // con esta forma genero colores aleaotios sin lista--> const colorHex = '#' + numeroAleatorio.toString(16).padStart(6, '0');
               divs[i].style.backgroundColor=colores[numeroAleatorio];
              
            }
        
        },1000)
    })
    btn5.addEventListener("click",()=>{

        let numAcertar=2;
        let numAciertos=0;
        let contador=0;
        
            const numeroAleatorio = Math.floor(Math.random() * divs.length);
            btn5.style.backgroundColor=colores[numeroAleatorio];
            
                setInterval(function(){
                    for (let i = 0; i < divs.length; i++) {
                        const numeroAleatorio = Math.floor(Math.random() * divs.length);
                        divs[i].style.backgroundColor=colores[numeroAleatorio];
                    }
                    
                
                },1000)
           
            
                divs.forEach(div => {
                    div.addEventListener("click", () => {
                        contador++;
                        if (div.style.backgroundColor == colores[numeroAleatorio]) {
                            numAciertos++;   
                            if (numAciertos === numAcertar) {
                               
                                alert("¡Has ganado y has hecho " + contador + " clicks!");
                            }
                        } else {
                            numAciertos--;
                        }
                    });
                });
           
           

    })
}
