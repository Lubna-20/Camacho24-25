import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtremaduraRoutingModule } from './extremadura-routing.module';
import { ExtremaduraComponent } from './extremadura.component';


@NgModule({
  declarations: [
    ExtremaduraComponent
  ],
  imports: [
    CommonModule,
    ExtremaduraRoutingModule
  ]
})
export class ExtremaduraModule { }
