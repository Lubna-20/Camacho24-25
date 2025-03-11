import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  segundos: number = 0;
  interval: any;
renaudar() {
  this.interval = setInterval(() => {
    this.segundos++;
  }, 1000);
}
parar() {
  clearInterval(this.interval);
}


}
