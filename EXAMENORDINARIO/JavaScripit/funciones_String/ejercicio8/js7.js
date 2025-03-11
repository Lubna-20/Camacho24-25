window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".col-lg-12");

 
  let validar = true;
  while(validar){
    const num1 = Math.floor(Math.random()*100)
    const num2 = Math.floor(Math.random()*100)
  
    const p = document.createElement('p')
    contenedor.appendChild(p)
    let suma=num1+num2
    const mensaje =`la suma de ${num1} + ${num2} = ${suma} `
    p.textContent=mensaje
    if(num1===num2){
      validar=false
    }
  }


  
  


});

