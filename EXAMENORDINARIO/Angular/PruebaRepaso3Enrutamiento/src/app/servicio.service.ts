import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from './mensajes';
import { Provincia } from './provincia';
import { Altura } from './altura';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

leerMensajes(){
  return this.http.get<Mensaje[]>('http://localhost/serviciosAdmin/listadoTodosMensajes.php')
}
obtenerProvincias(){
  return this.http.get<Provincia[]>('http://localhost/serviciosCliente/listadoProvincias.php')
}



  obtenerAlturas() {
      return this.http.get<Altura[]>('http://localhost/serviciosCliente/listadoAlturas.php')
  }


}
