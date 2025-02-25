import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  colors = ['red', 'green', 'blue', 'yellow'];
  currentColor = 'white';

  changeColor(color: string) {
    this.currentColor = color;
  }
}
