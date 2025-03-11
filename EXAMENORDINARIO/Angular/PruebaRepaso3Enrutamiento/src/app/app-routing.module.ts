import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProvinciasComponent } from './provincias/provincias.component';
import { AlturasComponent } from './alturas/alturas.component';
import { MensajesComponent } from './mensajes/mensajes.component';

const routes: Routes = [
  { path: 'provincias', component: ProvinciasComponent },
  {path:'alturas', component: AlturasComponent},
  {path:'mensajes', component: MensajesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
