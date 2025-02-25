import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Euroconversor';
  euros:number=0;
  yenes:number=0;
  dolares:number=0;
  libras:number=0;
  d_l:number=1.10;
  d_e:number=1.08;
  d_y:number=123.12;

  e_l:number=
  e_y:number=
  e_d:number=

  l_y:number=
  l_e:number=
  l_d:number=

  actualizarDolares(){
    this.euros=this.dolares*this.d_e;
    this.yenes=this.dolares*this.d_y;
    this.libras=this.dolares*this.d_l;

  }
  actualizarLibras(){

  }
  actualizarYenes(){

  }
  actualizarEuros(){

  }
  limpiar(){
 this.dolares=0;
 this.euros=0;
 this.libras=0;
 this.yenes=0;
  }
}
