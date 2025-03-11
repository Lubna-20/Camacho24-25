import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aracena',
  templateUrl: './aracena.component.html',
  styleUrls: ['./aracena.component.css']
})
export class AracenaComponent implements OnInit{
  habitantes: number = 0
  superficie: number = 0

  ngOnInit(): void {
    this.habitantes = Math.floor(Math.random() * 10000)
    this.superficie = Math.floor(Math.random() * 1000)
  }
}
