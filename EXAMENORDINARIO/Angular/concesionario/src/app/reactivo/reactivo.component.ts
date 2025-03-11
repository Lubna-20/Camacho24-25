import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent {
  enviar() {
    throw new Error('Method not implemented.');
  }
  ConcesionarioRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.ConcesionarioRegistro = this.fb.group({
      matricula: ['', [Validators.required, Validators.pattern('^\\d{4}[A-Z]{3}$')]],
      opcion: ['', [Validators.required]],
      neumaicos: ['', [Validators.required]]
    });
  }

}
