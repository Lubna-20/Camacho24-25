import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';

@NgModule({
  declarations: [Componente1Component, Componente2Component, Componente3Component, Componente4Component],
  imports: [CommonModule, NgStyle, NgClass],
})
export class ModuleModule {}
