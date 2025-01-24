import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoC1 } from './proyecto1/proyectoC1.component';
import { ProyectoC2 } from './proyecto2/proyectoC2.component';

const routes: Routes = [

 {
  path: 'proyecto1',
  component: ProyectoC1,
  loadChildren: () => import('./proyecto1/proyecto1.module').then(m => m.Proyecto1Module)
 },
 {
  path: 'proyecto2',
  component: ProyectoC2,
  loadChildren: () => import('./proyecto2/proyecto2.module').then(m => m.Proyecto2Module)
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
