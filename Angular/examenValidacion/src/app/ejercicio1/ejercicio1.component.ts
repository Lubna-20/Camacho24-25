import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
enviar() {
  alert('formulario enviado con exito');
}
formulario1!: FormGroup;

constructor(private fb: FormBuilder) {
  this.formulario1 = this.fb.group({
    name: ['', [Validators.required,Validators.maxLength(20)]],
    email: ['', [Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@gmail.com$")]],
    edad: ['', [Validators.required,Validators.min(18)]],
    cargo: ['', [Validators.required]],
    salario: ['', [Validators.required,Validators.min(900),Validators.max(1200)]],
  });
}
}
