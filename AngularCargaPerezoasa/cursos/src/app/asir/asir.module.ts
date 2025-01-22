import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsirRoutingModule } from './asir-routing.module';
import { DbComponent } from './db/db.component';
import { FhComponent } from './fh/fh.component';
import { LmComponent } from './lm/lm.component';
import { SorComponent } from './sor/sor.component';


@NgModule({
  declarations: [
    DbComponent,
    FhComponent,
    LmComponent,
    SorComponent
  ],
  imports: [
    CommonModule,
    AsirRoutingModule
  ]
})
export class AsirModule { }
