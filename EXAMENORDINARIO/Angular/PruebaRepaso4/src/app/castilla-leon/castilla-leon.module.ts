import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastillaLeonRoutingModule } from './castilla-leon-routing.module';
import { CastillaLeonComponent } from './castilla-leon.component';


@NgModule({
  declarations: [
    CastillaLeonComponent
  ],
  imports: [
    CommonModule,
    CastillaLeonRoutingModule
  ]
})
export class CastillaLeonModule { }
