import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activadoA: boolean=false;
  activadoO: boolean=false;
  imgChicaT: String="";
  imgChicoT: String="";
  wT2: number=0;
  wT1: number=0;
  hT1: number=0;
  hT2: number=0;
  temporizador1: any;
  temporizador2: any;

  activarChicoTemporizador() {
    clearInterval(this.temporizador1);
    this.activadoO=true;
    this.activadoA=false;

  this.temporizador2=setInterval(()=>{
    this.numAlt=Math.ceil(Math.random()*100);
    this.imgChicoT="https://randomuser.me/api/portraits/men/"+this.numAlt+".jpg";
    this.wT2=Math.ceil(Math.random()*300)
    this.hT2=Math.ceil(Math.random()*300)
  },1000)
  }
  activarChicaTemporizador() {
    clearInterval(this.temporizador2);

    this.activadoA=true;
    this.activadoO=false;

  this.temporizador1=setInterval(()=>{
  this.numAlt=Math.ceil(Math.random()*100);
  this.imgChicaT="https://randomuser.me/api/portraits/women/"+this.numAlt+".jpg";
  this.wT1=Math.ceil(Math.random()*300)
  this.hT1=Math.ceil(Math.random()*300)
  },1000)
  }
  imgChica: String="";
  imgChico: String="";
  w1: number=0;
  w2: number=0;
  h1: number=0;
  h2: number=0;
  numAlt:number=0;
  activarChica() {
  this.numAlt=Math.ceil(Math.random()*100);
  this.imgChica="https://randomuser.me/api/portraits/women/"+this.numAlt+".jpg";
  this.w1=Math.ceil(Math.random()*300)
  this.h1=Math.ceil(Math.random()*300)
  }
  activarChico() {
    this.numAlt=Math.ceil(Math.random()*100);
    this.imgChico="https://randomuser.me/api/portraits/men/"+this.numAlt+".jpg";
    this.w2=Math.ceil(Math.random()*300)
    this.h2=Math.ceil(Math.random()*300)
    }
  }

