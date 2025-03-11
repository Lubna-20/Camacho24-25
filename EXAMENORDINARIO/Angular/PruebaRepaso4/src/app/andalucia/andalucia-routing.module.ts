import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuelvaComponent } from './huelva/huelva.component';
import { SevillaComponent } from './sevilla/sevilla.component';

const routes: Routes = [
  {
    path: 'huelva',
    component: HuelvaComponent,
    loadChildren: () => import('./huelva/huelva.module').then(m => m.HuelvaModule)
  },
  {
    path: 'sevilla',
    component: SevillaComponent,
    loadChildren: () => import('./sevilla/sevilla.module').then(m => m.SevillaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndaluciaRoutingModule { }
