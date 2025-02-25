import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
enviar() {
  alert('formulario enviado');
}
formulario3!: FormGroup;
constructor(private fb: FormBuilder) {
  this.formulario3 = this.fb.group({
    letras: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
    numeros: ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
    mayusculas :['', [Validators.required,Validators.pattern(/^[A-Z]+$/)]],
    rango:['',[Validators.required,Validators.min(100),Validators.max(200)]],
    numero:['',[Validators.required,Validators.pattern(/^\d{5}$/)]],
    diezLetras:['',[Validators.required,Validators.pattern(/^[a-zA-Z]{10}$/)]]
  });
}
}
