import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioslocalService {
  getUsuarios() {
    throw new Error('Method not implemented.');
  }


    constructor(private http:HttpClient, @Inject(LOCALE_ID) public local: string) { }

    leerTodosUsuarios(){
      return this.http.get<Usuario[]>('http://localhost/serviciosChat/listadoUsuarios.php')
    }

  insertarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario)
  }
  leerMensajes():Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>('http://localhost/serviciosChat/listadoMensajes.php')
  }
  escribirMensajes(mensaje:Mensaje):Observable<Mensaje>{
    return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje)
  }
  insertarMensajeP(msjchat: Mensaje):Observable<Mensaje>{
    let fecha = new Date();
    msjchat.fecha=formatDate(fecha,'HH:mm:ss/dd-MM-yyyy',this.local);
    return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php', msjchat);
  }
  leerMensajeP(miParametro: string):Observable<Mensaje[]>{
   return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+miParametro);

  }

  logeo(usuario:Usuario):Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
  }

}
