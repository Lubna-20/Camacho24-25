import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuelvaRoutingModule } from './huelva-routing.module';
import { AracenaComponent } from './aracena/aracena.component';
import { MoguerComponent } from './moguer/moguer.component';


@NgModule({
  declarations: [
    AracenaComponent,
    MoguerComponent
  ],
  imports: [
    CommonModule,
    HuelvaRoutingModule
  ]
})
export class HuelvaModule { }
