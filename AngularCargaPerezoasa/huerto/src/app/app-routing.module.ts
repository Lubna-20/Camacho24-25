import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AromaticaComponent } from './aromatica/aromatica.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';

const routes: Routes = [
  {
    path: 'aromatica',
    component: AromaticaComponent,
    loadChildren: () => import('./aromatica/aromatica.module').then(m => m.AromaticaModule)
  },
  {
    path: 'frutal',
    component: FrutalComponent,
    loadChildren: () => import('./frutal/frutal.module').then(m => m.FrutalModule)
  },
  {
    path: 'hortaliza',
    component: HortalizaComponent,
    loadChildren: () => import('./hortaliza/hortaliza.module').then(m => m.HortalizaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
