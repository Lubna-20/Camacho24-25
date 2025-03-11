import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
numeros: number[] = [];

aniadirNumero() {
  this.numeros.unshift(Math.floor(Math.random() * 100));
}
editarNumero(index: number) {
  this.numeros[index] = Math.floor(Math.random() * 100);
}
eliminarNumero(index: number) {
  this.numeros.splice(index, 1);
}
ngOnInit(): void {
  for (let i = 0; i < 20; i++) {
    this.numeros.push(Math.floor(Math.random() * 100));
  }
}

}
