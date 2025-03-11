//terea 5
window.onload = () => {



    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    btn1.addEventListener('click' , () => {

        const div1 = document.getElementById('c1');

        div1.style.backgroundColor="green"


    })
    btn2.addEventListener('click' ,() => {
        const div2 = document.getElementById('c2');
        div2.style.backgroundColor="yellow"
        div2.style.fontSize="50px"
        var num1 = Math.floor(Math.random()*(100)+1) ;
        div2.textContent=num1;
    } )

    btn3.addEventListener('click' , () => {
        const div3 = document.getElementById('c3');
        const num1 = parseInt( prompt("introduce el primer numero :"));
        const num2 = parseInt( prompt("introduce el segundo numero :"));
       
        div3.textContent= (num1+num2)
        div3.style.backgroundColor="blue"

    })

    btn4.addEventListener('click' , () => {
        const div4 = document.getElementById('c4');
        
        var contador =0;
        var numeroSecreto=Math.floor(Math.random()*(100)+1);
        let validar = false;
        while(!validar){
            contador++
            let numero = parseInt( prompt("adivina el numero x :"));
            if(numeroSecreto == numero){
                alert("felicidades has acertado el numero correcto")
                validar = true;
            }else{
                if(numero > numeroSecreto){
                    alert("el numero es menor que "+numero)
                }else{
                    alert("el numero es mayor que "+numero)
                }
                validar = false;
            }
        }

        div4.textContent="El numero: " +numeroSecreto+" intentos:"+contador;
        
        
    })

    btn5.addEventListener('click', () => {

        const div5 = document.getElementById('c5');
        const fecha = new Date();
        const anio = fecha.getFullYear();
        const mes = fecha.getMonth()+1;
        const dias = fecha.getDay();
        const hora = fecha.getHours();
        const minuto = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        div5.innerText=hora+":"+minuto+"\n"+dias+"-"+mes+"-"+anio

    })
    btn6.addEventListener('click' , () => {
        const div6 = document.getElementById('c6');
      // set interval para refrescar los datos cada cierto tiempo 
        setInterval(()=>{
            const fecha = new Date();
            const hora = fecha.getHours();
            const minuto = fecha.getMinutes();
            const segundos = fecha.getSeconds();
            div6.innerText=hora+":"+minuto+":"+segundos
        },1000)
       
    })
}