import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  notas: any[] = [
    { codigoCif: '123456789', nombre: 'Juan', nota1: 5, nota2: 6, nota3: 7 },
    { codigoCif: '987654321', nombre: 'María', nota1: 8, nota2: 9, nota3: 10 },
    { codigoCif: '456123789', nombre: 'Pedro', nota1: 3, nota2: 4, nota3: 5 },
  ];
  // Definir columnas de la tabla
  displayedColumns: string[] = ['codigoCif', 'nombre', 'nota1', 'nota2', 'nota3'];

  // DataSource de la tabla
  dataSource!: MatTableDataSource<any>;

  // Formulario
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      codigoCif: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      nombre: ['', [Validators.required]],
      nota1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      nota2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      nota3: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  ngOnInit() {
    // Inicializa el dataSource con una lista vacía
    this.dataSource = new MatTableDataSource(this.notas);
  }

  // Método para enviar el formulario y agregar los datos a la tabla
  enviarFormulario() {
    // Obtener los valores del formulario
    const codigoCif = this.formulario.get('codigoCif')?.value;
    const nombre = this.formulario.get('nombre')?.value;
    const nota1 = this.formulario.get('nota1')?.value;
    const nota2 = this.formulario.get('nota2')?.value;
    const nota3 = this.formulario.get('nota3')?.value;

    // Crear un objeto con los valores del formulario
    const objeto = {
      codigoCif: codigoCif,
      nombre: nombre,
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
    };

    // Agregar el objeto al array de notas
    this.notas.push(objeto);
    console.log(this.notas);

    // Limpiar el formulario
    this.formulario.reset();

    // Actualizar el dataSource para reflejar los nuevos datos en la tabla
    this.dataSource = new MatTableDataSource(this.notas);
  }
}
