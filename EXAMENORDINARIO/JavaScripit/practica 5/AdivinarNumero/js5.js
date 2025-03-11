
window.onload = () => {



    const btn1 = document.getElementById('btn1');
   

    btn1.addEventListener('click' , () => {
        const div4 = document.getElementById('c1');
        
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
        div4.style.backgroundColor="pink"
        
    })

   
}