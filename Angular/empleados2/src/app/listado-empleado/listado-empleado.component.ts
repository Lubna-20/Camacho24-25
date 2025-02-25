import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoEmpleadoComponent } from '../cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit, AfterViewInit {

  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'eliminar', 'modificar'];
  datos: Empleado[] = [
    new Empleado(1, 'Juan Pérez', 'Calle Falsa 123', 'Desarrollador', 30),
    new Empleado(2, 'Ana Gómez', 'Avenida Siempre Viva 742', 'Diseñadora UX', 28),
    new Empleado(3, 'Carlos López', 'Boulevard Central 456', 'Gerente de Proyecto', 35),
    new Empleado(4, 'María Martínez', 'Plaza Mayor 12', 'QA Tester', 25),

    // ...otros empleados
  ];

  dataSource: MatTableDataSource<Empleado> = new MatTableDataSource(this.datos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // Inicializar la tabla de empleados con los datos de ejemplo
    this.dataSource.data = this.datos;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  // Ordenar por ID
  }

  ngAfterViewInit(): void {
    // Asignar el paginator y sort después de que la vista haya sido inicializada
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Métodos para la tabla de empleados (filtrado y ordenado)
  applyFilter(event: KeyboardEvent): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  eliminarEmpleado(id: number): void {
    // Eliminar el empleado con el ID especificado
    this.datos = this.datos.filter(emp => emp.id !== id);
    this.dataSource.data = this.datos;  // Actualiza la tabla después de eliminar
  }

  modificarEmpleado(emp: Empleado): void {
    const dialogoMod = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      width: '300px',
      height: '600px',
      data: {
        id: emp.id,
        nombre: emp.nombre,
        direccion: emp.direccion,
        cargo: emp.cargo,
        edad: emp.edad,
      }
    });

    dialogoMod.afterClosed().subscribe(x => {
      // esta funcion es para modificar el empleado en la tabla
      if (x !== undefined) {
        const index = this.datos.findIndex(empleado => empleado.id === x.id);
        if (index !== -1) {
          // Actualizar el empleado en la tabla
          this.datos[index] = x;
          // Actualizar la tabla
          this.dataSource.data = [...this.datos];
        }
      }
    });
  }

  // Abrir el cuadro de diálogo para agregar un nuevo empleado
  // El cuadro de diálogo se abre en una ventana modal

  openDialog(): void {
    const dialogo1 = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      data: new Empleado(0, '', '', "", 0),
      width: '300px',
      height: '600px',
    });

    dialogo1.afterClosed().subscribe((empleado: Empleado) => {
      if (empleado.id !== 0) {
        this.datos.push(empleado);  // Agregar al listado de empleados
        this.dataSource.data = this.datos;  // Actualizar la tabla
      }
    });
  }
}
