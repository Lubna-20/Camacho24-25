import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpService {


  constructor(private cliente: HttpClient) { }

  leerEmpleados(): Observable<Empleado[]> {
    return this.cliente.get<Empleado[]>('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');
  }
  eliminar(id: number) {
    return this.cliente.delete<Empleado>('http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' + id);
  }
  guardarEmpleado(empleado: Empleado) {
    return this.cliente.post<Empleado>('http://moralo.atwebpages.com/ajaxListar/create_persona.php/', empleado);
  }
  modificarEmpleado(empleado: Empleado) {
    return this.cliente.put<Empleado>(' http://moralo.atwebpages.com/ajaxListar/update_persona.php/', empleado);

  }
}
