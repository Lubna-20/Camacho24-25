window.addEventListener('load',()=>{

    const body = document.querySelector('body')
    const crearTabla = document.getElementById('btnTablas')
    const colores =["red","green","yellow","blue"]
    const coloresEspañol =["rojo","verde","amarillo","azul"]
    const tabla = document.createElement('table')
    crearTabla.addEventListener('click',()=>{
        limpiarCaja()
        let filas = parseInt(prompt("Introduce la filas: "))
        let columnas =  parseInt(prompt("Introduce la columnas: "))
        let contador =0
        body.appendChild(tabla)
        for (let index = 0; index < filas; index++) {
            const filas = document.createElement('tr')
            
            tabla.appendChild(filas)
           for (let j = 0; j < columnas; j++) {
            contador++
            let num = Math.floor(Math.random()*4)
            const columnas = document.createElement('td')
           
            filas.appendChild(columnas)
            const botonColores = document.createElement('button')
            botonColores.className="botones"
            botonColores.textContent="boton "+contador;
            botonColores.style.backgroundColor=colores[num]
            columnas.appendChild(botonColores)
            botonColores.addEventListener("click",()=>{
                alert("la celda es de color "+coloresEspañol[num])
            })
           }
            
        }
    })
    function limpiarCaja(){
        while(tabla.firstElementChild){
            tabla.removeChild(tabla.firstElementChild)
        }
     }

})