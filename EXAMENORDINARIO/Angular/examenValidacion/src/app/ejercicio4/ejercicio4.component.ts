import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
enviar() {
  alert('formulario enviado');
}
formulario4!: FormGroup;

constructor(private fb: FormBuilder) {
  this.formulario4 = this.fb.group({
    visa: ['', [Validators.required,Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$')]],
    mastercard: ['', [Validators.required,Validators.pattern('^5[1-5][0-9]{14}$')]],
    american: ['', [Validators.required,Validators.pattern('^3[47][0-9]{13}$')]],
    discover: ['', [Validators.required,Validators.pattern('^6(?:011|5[0-9]{2})[0-9]{12}$')]],
    club: ['', [Validators.required,Validators.pattern('^3(?:0[0-5]|[68][0-9])[0-9]{11}$')]],
    jcb: ['', [Validators.required,Validators.pattern(/^(?:2131|1800|35\d{3})\d{11}$/)]],
  });
}
}
