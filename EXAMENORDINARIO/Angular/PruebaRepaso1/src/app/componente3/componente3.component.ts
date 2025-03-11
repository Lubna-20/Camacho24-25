import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  ngOnInit(): void {
    this.generarImg();
  }
  vectorsImg: String[] = ["Sevilla","Caceres","Huelva","Andalucia","Badajoz","Cadiz","CastillaLeon","Valladolid"];
  provincia: any;


  generarImg() {
  let numero = Math.floor(Math.random() * this.vectorsImg.length);
  this.provincia = this.vectorsImg[numero];
  }

}
