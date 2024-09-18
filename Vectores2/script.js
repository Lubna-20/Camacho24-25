window.addEventListener("load", inicio);


function inicio(){
    const btn1=document.getElementById("btn1")
    const btn2=document.getElementById("btn2")
    const btn3=document.getElementById("btn3")
    const btn4=document.getElementById("btn4")
    const btn5=document.getElementById("btn5")
    const btn6=document.getElementById("btn6")

    btn1.addEventListener("click",function (){
        const click=document.getElementById('btn1');
        const div1=document.getElementById('c1')
        div1.style.background="green"
        
    })

    btn2.addEventListener("click", function(){
        const div2=document.getElementById('c2')
        var num = Math.floor(Math.random()*100) 
        console.log(num)
        div2.textContent = num
        div2.style.background="yellow"
       
    })
    btn3.addEventListener("click", function(){
        const div3=document.getElementById('c3')
        const num1=parseInt(prompt("Escribe el primer numero"));
        const num2=parseInt(prompt("Escribe el segundo numero"));
        div3.textContent=(num1+num2)
        div3.style.background="aqua"

    })
   

    btn4.addEventListener("click", function() {
        const div4=document.getElementById('c4')
        var numaleatorio= Math.floor(Math.random()*100) +1
        console.log(numaleatorio)
        var num;
        var contador
        while(numaleatorio != num){
            num=prompt("Escribe un numero")
        if(num>numaleatorio){
            alert ("El numero es incorrecto es mayor que el numero aleatorio")
        }if(num<numaleatorio){
            alert ("El numero es incorrecto es menor que el numero aleatorio")
        }
        else{
            alert ("Muy bien echo numero correcto")
        }
    } 

    })

    btn5.addEventListener("click", function(){
        const div5=document.getElementById('c5')
        const fecha =new Date();
        const anio=fecha.getFullYear()
        const mes=fecha.getMonth()+1
        const dia=fecha.getDay()
        const hora=fecha.getHours()
        const minuto=fecha.getMinutes()
        div5.textContent=hora+":"+minuto+"  "+
        dia+"/"+ mes+"/"+anio+ "   "
    })
    btn6.addEventListener("click", function(){
        const div6=document.getElementById('c6')
        setInterval(() => {
            const fecha =new Date();
            const hora=fecha.getHours()
            const minuto=fecha.getMinutes()
            const segundos=fecha.getSeconds()
            div6.textContent=hora+":"+minuto+":"+segundos    
        }, 1000);
        
    })  
   
}