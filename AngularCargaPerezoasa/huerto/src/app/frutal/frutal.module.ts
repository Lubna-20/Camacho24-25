import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { CiruelaComponent } from './ciruela/ciruela.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { PeraComponent } from './pera/pera.component';


@NgModule({
  declarations: [

    CiruelaComponent,
    ManzanaComponent,
    PeraComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
