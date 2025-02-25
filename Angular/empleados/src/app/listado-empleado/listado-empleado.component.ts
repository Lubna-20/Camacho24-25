import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServicioEmpService } from '../servicio-emp.service';
import { CuadroDialogoEmpleadoComponent } from '../cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit {




  eliminarEmpleado(id: number) {
    this.httpCliente.eliminar(id).subscribe((empleado: Empleado
    ) => {
      this.httpCliente.leerEmpleados().subscribe((x) => {
        this.dataSource.data = x;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'eliminar', 'modificar'];
  datos: Empleado[] = [];
  dataSource: MatTableDataSource<Empleado> = new MatTableDataSource();

  empleado!: Empleado;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private httpCliente: ServicioEmpService, public dialog: MatDialog) {

  }
  modificarEmpleado(emp: Empleado) {
    const dialogoMod = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      width: '300px',
      height: '600px',
      data: {
        id: emp.id,
        nombre: emp.nombre,
        direccion: emp.direccion,
        cargo: emp.cargo,
        edad: emp.edad,
        imagen: emp.imagen
      }
    });

    dialogoMod.afterClosed().subscribe(x => {
      if (x !== undefined) {
        this.httpCliente.modificarEmpleado(x).subscribe(resultado => {
          const index = this.datos.findIndex(e => e.id === x.id);
          if (index !== -1) {
            this.datos[index] = x;
            this.dataSource.data = [...this.datos];
          }
        });
      }
    });
  }

  openDialog() {
    const dialogo1 = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      data: new Empleado(0, '', '', "", 0, ''),
      width: '300px',
      height: '600px',
    });
    dialogo1.afterClosed().subscribe((empleado: Empleado) => {
      if (empleado != undefined)
        this.aniadir(empleado);
    });

  }
  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x) => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  aniadir(empleado: Empleado) {
    //agregar a la lista
    this.datos.push(new Empleado(empleado.id, empleado.nombre,
      empleado.direccion, empleado.cargo, empleado.edad, empleado.imagen));

    //agregar a la tabla
    this.httpCliente.guardarEmpleado(empleado).subscribe(resultado => this.empleado);
    //renderizar la vista

  }

}
