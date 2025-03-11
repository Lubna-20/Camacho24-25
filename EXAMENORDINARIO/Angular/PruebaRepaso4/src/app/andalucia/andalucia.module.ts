import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndaluciaRoutingModule } from './andalucia-routing.module';
import { HuelvaComponent } from './huelva/huelva.component';
import { SevillaComponent } from './sevilla/sevilla.component';


@NgModule({
  declarations: [
    HuelvaComponent,
    SevillaComponent
  ],
  imports: [
    CommonModule,
    AndaluciaRoutingModule
  ]
})
export class AndaluciaModule { }
