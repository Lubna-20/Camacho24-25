import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
enviarFormulario() {


}

formulario: FormGroup;
constructor(private fb: FormBuilder) {
this.formulario = this.fb.group({
  nombre: ['', [Validators.required, Validators.maxLength(20)]],
  apellidos: ['', [Validators.required, Validators.maxLength(20)]],
  fechaNacimiento: ['', [Validators.required]],
  tarjetaCredito: ['', [Validators.required, Validators.pattern('/^\d{20}$/')]],
  contrasena: ['', [Validators.required, Validators.minLength(10)],Validators.pattern(
    '^(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$'
  )],
});

}


}
