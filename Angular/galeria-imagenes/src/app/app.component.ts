import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heigth:number=500;
  width:number=500;
  fondoUltimo: string="";
  fondoPrimero:string="fondoPrimero"

aumentarImagen() {
  this.heigth+=50;
  this.width+=50;

}
disminuirImagen() {
  this.heigth-=50;
  this.width-=50;
}


  title = 'galeria-imagenes';
   imagenes = [
    'https://randomuser.me/api/portraits/women/40.jpg',
    'https://randomuser.me/api/portraits/women/41.jpg',
    'https://randomuser.me/api/portraits/women/42.jpg',
    'https://randomuser.me/api/portraits/women/43.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/40.jpg',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'https://randomuser.me/api/portraits/men/42.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
    'https://randomuser.me/api/portraits/men/44.jpg',
  ];
  imagen: string = this.imagenes[0];

  intervalo: any;
  cambioImagenSiguiente() {
    if (this.imagen === this.imagenes[this.imagenes.length - 1]) {
      this.imagen = this.imagenes[this.imagenes.length - 1];
      this.fondoUltimo="fondoUltimo"
      this.fondoPrimero=""

    } else {
      this.imagen = this.imagenes[this.imagenes.indexOf(this.imagen) + 1];
      this.fondoUltimo=""
      this.fondoPrimero=""


    }

}
cambioImagenAnterior() {
  if(this.imagen === this.imagenes[0]){
   this.imagen= this.imagenes[0];
   this.fondoPrimero="fondoPrimero"
   this.fondoUltimo=""


  }else{
    this.imagen = this.imagenes[this.imagenes.indexOf(this.imagen) - 1];
    this.fondoUltimo=""
      this.fondoPrimero=""

  }
}

nombreRandom:string="Play"

randomImagen() {
  if(this.nombreRandom==="Play"){
    this.nombreRandom="Stop";
    this.intervalo = setInterval(() => {
      this.imagen = this.imagenes[Math.floor(Math.random() * this.imagenes.length)];
    }, 1000);
  }else{
    this.nombreRandom="Play";
    clearInterval(this.intervalo);
  }
}

}
