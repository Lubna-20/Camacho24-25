import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private cliente: HttpClient, @Inject(LOCALE_ID) private locale: string) { }
  leerMensajes(): Observable<ChatModule[]> {

    return this.cliente.get<ChatModule[]>(' http://camacho.atwebpages.com/chat/ObtenerMensajes.php');
  }
  enviarMensaje(mensaje: ChatModule): Observable<ChatModule> {
    mensaje.fecha=formatDate(Date.now(),'HH:mm:ss/dd/MM/yyyy',this.locale);
    return this.cliente.post<ChatModule>(' http://camacho.atwebpages.com/chat/AltaMensaje.php', mensaje);
  }
  limpiarMensajes(): Observable<ChatModule[]> {
    return this.cliente.delete<ChatModule[]>('http://camacho.atwebpages.com/chat/truncate.php');
  }
  borrarMensaje(mensaje: ChatModule): Observable<ChatModule[]> {
    return this.cliente.delete<ChatModule[]>("http://camacho.atwebpages.com/chat/EliminarMensaje.php?id=" + mensaje.id);
  }
}
