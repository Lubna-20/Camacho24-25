import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AracenaComponent } from './aracena/aracena.component';
import { MoguerComponent } from './moguer/moguer.component';

const routes: Routes = [
  {
    path: 'aracena',
    component: AracenaComponent
  },
  {
    path: 'moguer',
    component: MoguerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuelvaRoutingModule { }
