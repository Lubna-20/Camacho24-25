import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrutaModule } from './fruta/fruta.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor(private cliente: HttpClient) { }


  actualizar(producto: FrutaModule): Observable<FrutaModule> {
    return this.cliente.put<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', producto);
  }

  leerFrutas(): Observable<FrutaModule[]> {
    return this.cliente.get<FrutaModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
  }
  crearFruta(producto: FrutaModule): Observable<FrutaModule> {
    return this.cliente.post<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', producto);

  }
  eliminar(id: number) {
    return this.cliente.delete<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id=' + id);

  }


}
