import { Component } from '@angular/core';

@Component({
  selector: 'app-moguer',
  templateUrl: './moguer.component.html',
  styleUrls: ['./moguer.component.css']
})
export class MoguerComponent {
  habitantes: number = 0
  superficie: number = 0

  ngOnInit(): void {
    this.habitantes = Math.floor(Math.random() * 10000)
    this.superficie = Math.floor(Math.random() * 1000)
  }
}
