import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { match } from 'assert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  segundos:number=0;
  intervalId:any;
  numAleatorio:number=0;
  generarNumAleatorio(){
    this.intervalId = setInterval(() => {
      this.numAleatorio=Math.floor(Math.random()*1000)
    }, 1000);
  }
  iniciar() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.segundos++;
      }, 1000);
    }
  }

  parar() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetear() {
    this.parar();
    this.segundos = 0;
  }

  title = 'ejercicio1';
}
