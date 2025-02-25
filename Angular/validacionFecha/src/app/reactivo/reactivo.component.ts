import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent {
  enviar() {
    alert('enviado');
  }
  FRegistro!: FormGroup;
  fechaValida!: boolean;
  pwd!: boolean;

  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cumple: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Z].{8}[0-9]$/)]],
      repeatPassword: ['', [Validators.required]],
    }, {
      validators: [this.passwordMatchValidator, this.validateFecha]
    });
  }

  validateFecha(formGroup: FormGroup) {
    const cumple = formGroup.get('cumple')!.value;
    const fechaActual = new Date();
    if (cumple > fechaActual) {
      formGroup.get('cumple')!.setErrors({ invalidDate: true });
    } else {
      formGroup.get('cumple')!.setErrors(null);
    }
    return formGroup.get('cumple')!.errors;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const repeatPassword = formGroup.get('repeatPassword')!.value;
    if (password !== repeatPassword) {
      formGroup.get('repeatPassword')!.setErrors({ mismatch: true });
    } else {
      formGroup.get('repeatPassword')!.setErrors(null);
    }
    return formGroup.get('repeatPassword')!.errors;


  }


}
