import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component {
formulario2!: FormGroup;
constructor(private fb: FormBuilder) {
  this.formulario2 = this.fb.group({
    hotel: ['', [Validators.required]],
    fechaEntrada: ['', [Validators.required]],
    fechaSalida: ['', [Validators.required]],
  },{
    validators: [this.validateFecha]
});
}

validateFecha(formGroup: FormGroup) {
  const fechaEntrada = formGroup.get('fechaEntrada')!.value;
  const fechaSalida = formGroup.get('fechaSalida')!.value;
  if (fechaEntrada > fechaSalida) {
    formGroup.get('fechaSalida')!.setErrors({ fechaInvalida: true });
  } else {
    formGroup.get('fechaSalida')!.setErrors(null);
  }
  return formGroup.get('fechaSalida')!.errors;
}
enviar() {
  alert('formulario enviado');
}

}
