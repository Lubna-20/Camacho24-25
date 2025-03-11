import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fondoColor: string ="";
claseFondo: string="";
textoColor: string ="";
claseColor: string ="";
textoTamanio: number=0;
claseTamanio: string="";
cambioFondo() {
  if (this.fondoColor=='rojo'){
    this.claseFondo='claseFondoRojo';
    }else if (this.fondoColor=='verde'){
      this.claseFondo='claseFondoVerde';
    }else if (this.fondoColor=='azul'){
      this.claseFondo='claseFondoAzul';
    }else if (this.fondoColor=='amarrilo'){
      this.claseFondo='claseFondoAmarrilo';
    }
}
cambioTamanio() {
  if (this.textoTamanio==12){
    this.claseTamanio='claseTamaño12px';
  }else if (this.textoTamanio==16){
    this.claseTamanio='claseTamaño16px';
    }else if (this.textoTamanio==20){
      this.claseTamanio='claseTamaño20px';
    }else if (this.textoTamanio==24){
      this.claseTamanio='claseTamaño24px';
    }
  }
cambioColor() {

  if (this.textoColor=='rojo'){
    this.claseColor='claseRojo' ;
    }else if (this.textoColor=='verde'){
      this.claseColor='claseVerde';
    }else if (this.textoColor=='azul'){
      this.claseColor='claseAzul';
    }else if (this.textoColor=='amarrilo'){
      this.claseColor='claseAmarrilo';
  }
}
  title = 'ngClaseConSelect';
}
