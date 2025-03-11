import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camas',
  templateUrl: './camas.component.html',
  styleUrls: ['./camas.component.css']
})
export class CamasComponent implements OnInit{
  habitantes: number = 0
  superficie: number = 0

  ngOnInit(): void {
    this.habitantes = Math.floor(Math.random() * 10000)
    this.superficie = Math.floor(Math.random() * 1000)
  }
}
