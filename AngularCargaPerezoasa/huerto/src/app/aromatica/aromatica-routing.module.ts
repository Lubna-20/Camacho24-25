import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentaComponent } from './menta/menta.component';
import { OreganoComponent } from './oregano/oregano.component';
import { PerejilComponent } from './perejil/perejil.component';

const routes: Routes = [
  {
    path: 'menta',
    component: MentaComponent,

  },
  {
    path: 'oregano',
    component: OreganoComponent
  },
  {
    path: 'perejil',
    component: PerejilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AromaticaRoutingModule { }
