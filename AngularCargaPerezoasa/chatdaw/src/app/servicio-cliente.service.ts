import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor(private http:HttpClient) { }

// http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php

//http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php

insertarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario)
}
leerMensajes():Observable<Mensaje[]>{
  return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php')
}
escribirMensajes(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje)
}


logeo(usuario:Usuario):Observable<Usuario[]>{
  return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
}


//http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd

}
