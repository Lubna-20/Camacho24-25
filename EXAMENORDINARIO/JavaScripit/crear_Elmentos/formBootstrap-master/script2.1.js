window.addEventListener('load',empezar);

function empezar(){

  let validacion = document.querySelector('#cargar');

  validacion.onsubmit = inicio;

  function inicio(event){

    event.preventDefault();
    //Avanzar la usaremos por si detectamos errores
    let avanzar = true;

    //Identificamos nodos
    let ciclo = document.querySelector('input[name="radio"]:checked');
    let modulo = document.querySelectorAll('input[name="modulos[]"]:checked');
    let curso = document.getElementById('selectCurso').value;
    let nombre = document.getElementById('nombre').value;
    let horas = document.getElementById('exampleFormControlSelect2').value;

    //Identificamos los small

    let smCiclo = document.getElementById('smCiclo');
    let smModulo = document.getElementById('smModulos')
    let smCurso = document.getElementById('smCurso')
    let smNombre = document.getElementById('smNombre')
    let smHoras = document.getElementById('smHoras')


    //Validamos Curso 

    if(!ciclo){

      smCiclo.textContent ='Necesitas elegir al menos un campo'
      avanzar = false;
    }else{
      smCiclo.textContent = '';
    }

    //Validamos módulos

    if(modulo.length ===0){

      smModulo.textContent='Debes elegir al menos un campo';
      avanzar = false;
    }else{
      smModulo.textContent = '';
    }

   let modulosSelec ='';
   for(let i=0;i<modulo.length;i++){

    modulosSelec+=modulo[i].value+' | '
   }

    //Validamos Curso

    if(curso ===''){
      smCurso.textContent ='Debes seleccionar al menos un campo';
      avanzar = false;
    }else{
      smCurso.textContent='';
    }

    //Validamos Nombre 
    if(nombre.trim()===''){
      smNombre.textContent='Este campo no puede estar vacio';
      avanzar = false;
    }else{
      smNombre.textContent= '';
    }

    if(horas === ''){

      horas.textContent = 0;
    }
    
    if (avanzar) {
      alert('Ciclo: '+ciclo.value+'\n'+
      'Modulos: '+modulosSelec+'\n'+
      'Curso: '+curso+'\n'+
      'Nombre: '+nombre+'\n'+
      'Horas Perdidas: '+horas);
  }

    return avanzar;
   

  }
  
 
}