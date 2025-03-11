window.addEventListener("load",()=>{

    const botonAvanzar = document.querySelector("#jugar")
    const botonAvanzar2 = document.querySelector("#jugar2")
    const body = document.querySelector('body')
    const divPadre = document.createElement('div')
    divPadre.className=('gallery')
    body.appendChild(divPadre)
    const arrayCajas =[]

    for (let index = 0; index < 40; index++) {
        const div = document.createElement('div');
        div.className = "gallery";
        div.style.backgroundColor = "green";
        div.style.border = "1px solid black"; 
        div.style.margin="10px";
        // añadir las cajas creadas al vector con la funcion push
        arrayCajas.push(div)
        divPadre.appendChild(div); 
      }

      let intervalo;
    let index =0;

    botonAvanzar.addEventListener("click", () => {
        console.log("Botón presionado");

       
        intervalo = setInterval(() => {
            const caja = arrayCajas[index];
            if (caja.style.backgroundColor === "green") {
                caja.style.backgroundColor = "red";
            } else {
                caja.style.backgroundColor = "green"; 
            }

           // esta operacion lo que hace es mover circularmente al array
            index = (index + 1) % arrayCajas.length;
        }, 500);
    });
    botonAvanzar2.addEventListener("click", () => {
        console.log("Botón presionado");
        
        intervalo = setInterval(() => {
            const caja = arrayCajas[index];
            if (caja.style.backgroundColor === "green") {
                caja.style.backgroundColor = "red";
            } else {
                caja.style.backgroundColor = "green"; 
            }

           // esta operacion lo que hace es mover circularmente al array pero al contrario
           index = (index - 1 + arrayCajas.length) % arrayCajas.length;

        }, 500);
    });



      })



