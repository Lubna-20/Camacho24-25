import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevillaRoutingModule } from './sevilla-routing.module';
import { CoriaComponent } from './coria/coria.component';
import { CamasComponent } from './camas/camas.component';


@NgModule({
  declarations: [
    CoriaComponent,
    CamasComponent
  ],
  imports: [
    CommonModule,
    SevillaRoutingModule
  ]
})
export class SevillaModule { }
