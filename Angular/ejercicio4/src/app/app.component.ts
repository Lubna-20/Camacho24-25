import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coversor de monedas';
  euros: number = 0;
  yenes: number = 0;
  dolares: number = 0;
  libras: number = 0;

  // Tasas de conversión
  d_e: number = 0.92;
  d_y: number = 145.78;
  d_l: number = 0.78;

  e_d: number = 1.09;
  e_y: number = 158.92;
  e_l: number = 0.85;

  l_d: number = 1.28;
  l_e: number = 1.18;
  l_y: number = 186.15;

  y_d: number = 0.0069;
  y_e: number = 0.0063;
  y_l: number = 0.0054;

  actualizarDolares() {
    this.euros = +(this.dolares * this.d_e).toFixed(2);
    this.yenes = +(this.dolares * this.d_y).toFixed(2);
    this.libras = +(this.dolares * this.d_l).toFixed(2);
  }

  actualizarEuros() {
    this.dolares = +(this.euros * this.e_d).toFixed(2);
    this.yenes = +(this.euros * this.e_y).toFixed(2);
    this.libras = +(this.euros * this.e_l).toFixed(2);
  }

  actualizarLibras() {
    this.dolares = +(this.libras * this.l_d).toFixed(2);
    this.euros = +(this.libras * this.l_e).toFixed(2);
    this.yenes = +(this.libras * this.l_y).toFixed(2);
  }

  actualizarYenes() {
    this.dolares = +(this.yenes * this.y_d).toFixed(2);
    this.euros = +(this.yenes * this.y_e).toFixed(2);
    this.libras = +(this.yenes * this.y_l).toFixed(2);
  }

  limpiar() {
    this.euros = 0;
    this.dolares = 0;
    this.yenes = 0;
    this.libras = 0;
  }
}
