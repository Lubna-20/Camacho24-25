import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiruelaComponent } from './ciruela/ciruela.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { PeraComponent } from './pera/pera.component';

const routes: Routes = [
  {
    path: 'ciruela',
    component: CiruelaComponent,

  },
  {
    path: 'manzana',
    component: ManzanaComponent
  },
  {
    path: 'pera',
    component: PeraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }
