import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
indicehover: any;


  title = 'periodicos-Digitales';
  segundos: number = 10;
  temporizador: any;
  arrayClases = ['clase1', 'clase2', 'clase3', 'clase4', 'clase5', 'clase6', 'clase7']
  clase: string = ""
  activado: boolean = false;
  nombreBoton: string = "Boton habilitado";
  contador: any = 0;

  //Array de personas

  personas = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Luis', edad: 30 },
    { id: 3, nombre: 'Sofia', edad: 28 },
    { id: 4, nombre: 'Miguel', edad: 35 }
  ]
  //Array de periódicos
  periodicos = [
    { nombre: 'El País', url: 'https://elpais.com' },
    { nombre: 'El Mundo', url: 'https://elmundo.es' },
    { nombre: 'ABC', url: 'https://abc.es' },
    { nombre: 'La Vanguardia', url: 'https://lavanguardia.com' },
    { nombre: 'El Diario', url: 'https://eldiario.es' }
  ];

  activar() {
    this.nombreBoton = "Boton deshabilitado";
    this.activado = true;
    this.temporizador = setInterval(() => {
      if (this.contador > this.arrayClases.length) {
        this.contador = 0;
      }
      this.clase = this.arrayClases[this.contador];
      this.segundos--;
      if (this.segundos == 0) {
        clearInterval(this.temporizador);
        this.segundos = 10;
        this.clase = "";
        this.activado = false;
        this.nombreBoton = "Boton habilitado";

      }
      this.contador++;

    }, 1000)
  }
  verNombre() {
    this.indicehover = null;
  }
  verEdad(indice: number) {
    this.indicehover = indice;
  }
}
