import { Component, Inject } from '@angular/core';
import { Empleado } from '../empleado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuadro-dialogo-empleado',
  templateUrl: './cuadro-dialogo-empleado.component.html',
  styleUrls: ['./cuadro-dialogo-empleado.component.css']
})
export class CuadroDialogoEmpleadoComponent {

  constructor(
    public dialogRef: MatDialogRef<CuadroDialogoEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Empleado,

  ) { }


  Cancelar(): void {
    this.dialogRef.close();
  }


}
