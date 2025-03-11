import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost/serviciosCliente/insertarUsuario.php', usuario)
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost/serviciosCliente/listadoUsuarios.php')
  }
}
