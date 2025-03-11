import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RojoComponent } from './rojo/rojo.component';
import { AzulComponent } from './azul/azul.component';
import { VerdeComponent } from './verde/verde.component';

const routes: Routes = [
  { path: 'azul', component: AzulComponent , loadChildren: () => import('./azul/azul.module').then(m => m.AzulModule) },
  { path: 'rojo', component: RojoComponent , loadChildren: () => import('./rojo/rojo.module').then(m => m.RojoModule) },
  { path: 'verde', component: VerdeComponent , loadChildren: () => import('./verde/verde.module').then(m => m.VerdeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
