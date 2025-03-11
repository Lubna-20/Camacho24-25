import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamasComponent } from './camas/camas.component';
import { CoriaComponent } from './coria/coria.component';

const routes: Routes = [
  {
    path: 'coria',
    component: CoriaComponent
  },
  {
    path: 'camas',
    component: CamasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevillaRoutingModule { }
